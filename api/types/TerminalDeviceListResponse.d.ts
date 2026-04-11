import type * as RevKeen from "../index.js";
/**
 * A list of terminal devices registered for your merchant account.
 */
export interface TerminalDeviceListResponse {
    data: RevKeen.TerminalDevice[];
    meta: TerminalDeviceListResponse.Meta;
}
export declare namespace TerminalDeviceListResponse {
    interface Meta {
        count: number;
    }
}
//# sourceMappingURL=TerminalDeviceListResponse.d.ts.map