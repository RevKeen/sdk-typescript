import { anySignal, getTimeoutSignal } from "./signals.js";
export const makeRequest = async (fetchFn, url, method, headers, requestBody, timeoutMs, abortSignal, withCredentials, duplex) => {
    const signals = [];
    let timeoutAbortId;
    if (timeoutMs != null) {
        const { signal, abortId } = getTimeoutSignal(timeoutMs);
        timeoutAbortId = abortId;
        signals.push(signal);
    }
    if (abortSignal != null) {
        signals.push(abortSignal);
    }
    const newSignals = anySignal(signals);
    const response = await fetchFn(url, {
        method: method,
        headers,
        body: requestBody,
        signal: newSignals,
        credentials: withCredentials ? "include" : undefined,
        // @ts-ignore
        duplex,
    });
    if (timeoutAbortId != null) {
        clearTimeout(timeoutAbortId);
    }
    return response;
};
//# sourceMappingURL=makeRequest.js.map