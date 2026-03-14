export interface ListSecurityCodesPaymentAttemptsResponse {
    data: ListSecurityCodesPaymentAttemptsResponse.Data;
}
export declare namespace ListSecurityCodesPaymentAttemptsResponse {
    interface Data {
        avs_codes: Data.AvsCodes.Item[];
        cvv_codes: Data.CvvCodes.Item[];
    }
    namespace Data {
        type AvsCodes = AvsCodes.Item[];
        namespace AvsCodes {
            interface Item {
                code: string;
                match_type: string;
                address_match: boolean | null;
                zip_match: boolean | null;
                description: string;
                risk_level: string;
            }
        }
        type CvvCodes = CvvCodes.Item[];
        namespace CvvCodes {
            interface Item {
                code: string;
                match_type: string;
                description: string;
                risk_level: string;
            }
        }
    }
}
//# sourceMappingURL=ListSecurityCodesPaymentAttemptsResponse.d.ts.map