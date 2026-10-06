export { O as OAuthConfig, a as OAuthTokenManager } from './oauth-D7xvINHV.mjs';

type RevKeenKeyKind = "secret" | "publishable" | "unknown";
declare function classifyApiKey(key: string): RevKeenKeyKind;

export { type RevKeenKeyKind, classifyApiKey };
