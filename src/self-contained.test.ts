// REV-9169. The release mirror receives packages/sdk and nothing else, and builds it there. This pins that
// nothing the build reads lives outside the package, and that the tools it installs are pinned exactly.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const PACKAGE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function sourceFiles(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) return sourceFiles(path);
    return /\.(?:ts|mts|cts|js|mjs|cjs)$/.test(name) &&
      !/\.test\.[cm]?[jt]s$/.test(name)
      ? [path]
      : [];
  });
}

function insidePackage(path: string): boolean {
  const from = relative(PACKAGE_ROOT, path);
  return (
    from !== "" && from !== ".." && !from.startsWith("../") && !isAbsolute(from)
  );
}

const read = (name: string) => readFileSync(join(PACKAGE_ROOT, name), "utf8");

describe("packages/sdk builds from its own directory", () => {
  it("no source file imports a relative path that leaves the package", () => {
    const files = sourceFiles(join(PACKAGE_ROOT, "src"));
    expect(files.length).toBeGreaterThan(10);
    const leaving: string[] = [];
    for (const file of files) {
      const text = readFileSync(file, "utf8");
      const specifiers = [
        ...text.matchAll(
          /(?:from|import|require)\s*\(?\s*["'](\.{1,2}\/[^"']*)["']/g,
        ),
        ...text.matchAll(/export\s+\*\s+from\s+["'](\.{1,2}\/[^"']*)["']/g),
      ].map((match) => match[1]);
      for (const specifier of specifiers) {
        if (!insidePackage(resolve(dirname(file), specifier)))
          leaving.push(`${relative(PACKAGE_ROOT, file)} -> ${specifier}`);
      }
    }
    expect(leaving).toEqual([]);
  });

  it("the transport runtime is a copy inside the package, not a path into sdks/", () => {
    const runtime = join(PACKAGE_ROOT, "src/generated/runtime.ts");
    expect(existsSync(runtime)).toBe(true);
    expect(readFileSync(runtime, "utf8")).toMatch(
      /^\/\/ Copy of sdks\/typescript\/src\/runtime\.ts, written by packages\/sdk\/scripts\/sync-runtime\.mjs/,
    );
    expect(read("src/core/openapi-transport.ts")).not.toMatch(
      /sdks\/typescript/,
    );
  });

  it("tsconfig.json and tsup.config.ts reach nothing outside the package", () => {
    const tsconfig = JSON.parse(read("tsconfig.json")) as {
      extends?: string;
      files?: string[];
      include?: string[];
      compilerOptions?: {
        rootDir?: string;
        paths?: Record<string, string[]>;
        baseUrl?: string;
      };
    };
    const references = [
      tsconfig.extends,
      tsconfig.compilerOptions?.rootDir,
      tsconfig.compilerOptions?.baseUrl,
      ...(tsconfig.files ?? []),
      ...(tsconfig.include ?? []),
      ...Object.values(tsconfig.compilerOptions?.paths ?? {}).flat(),
    ].filter((value): value is string => typeof value === "string");
    expect(
      references.filter((value) => value.split("/").includes("..")),
    ).toEqual([]);
    expect(read("tsup.config.ts")).not.toMatch(/["'`]\.\.\//);
  });

  it("package.json has no workspace, link or file dependencies", () => {
    const manifest = JSON.parse(read("package.json")) as Record<
      string,
      Record<string, string> | undefined
    >;
    const specs = [
      "dependencies",
      "devDependencies",
      "peerDependencies",
      "optionalDependencies",
    ].flatMap((field) =>
      Object.entries(manifest[field] ?? {}).map(
        ([name, spec]) => `${field}.${name}=${spec}`,
      ),
    );
    expect(
      specs.filter((spec) => /=(?:workspace|link|file|portal):/.test(spec)),
    ).toEqual([]);
  });

  it("the build tools the mirror installs are pinned exactly", () => {
    const dev = (
      JSON.parse(read("package.json")) as {
        devDependencies: Record<string, string>;
      }
    ).devDependencies;
    expect(dev.tsup).toMatch(/^\d+\.\d+\.\d+$/);
    expect(dev.typescript).toMatch(
      /^npm:@typescript\/typescript6@\d+\.\d+\.\d+$/,
    );
    expect(dev["@types/node"]).toMatch(/^\d+\.\d+\.\d+$/);
    expect(dev.ai).toMatch(/^\d+\.\d+\.\d+$/);
    // The mirror installs stock tsup, which takes esbuild from its own range. Pinning it here makes the mirror's build
    // use the esbuild this monorepo tested (tsup 8.5.1 resolves 0.27.3 here).
    expect(dev.esbuild).toMatch(/^\d+\.\d+\.\d+$/);
  });

  it("repository.url names the mirror repository, which is what npm provenance attests", () => {
    const manifest = JSON.parse(read("package.json")) as {
      repository: { type: string; url: string };
    };
    expect(manifest.repository).toEqual({
      type: "git",
      url: "https://github.com/RevKeen/sdk-typescript",
    });
  });
});
