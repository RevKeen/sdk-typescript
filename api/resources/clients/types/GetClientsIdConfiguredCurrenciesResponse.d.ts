export interface GetClientsIdConfiguredCurrenciesResponse {
    success: boolean;
    currencies: string[];
    default_currency: string | null;
    currency_details: GetClientsIdConfiguredCurrenciesResponse.CurrencyDetails.Item[];
    requestId?: string;
}
export declare namespace GetClientsIdConfiguredCurrenciesResponse {
    type CurrencyDetails = CurrencyDetails.Item[];
    namespace CurrencyDetails {
        interface Item {
            code: string;
            symbol: string;
            name: string;
        }
    }
}
//# sourceMappingURL=GetClientsIdConfiguredCurrenciesResponse.d.ts.map