/**
 * Bank account details (if type is 'us_bank_account')
 */
export interface BankAccountDetails {
    /** The name of the bank */
    bank_name: string | null;
    /** The last 4 digits of the account number */
    last4: string | null;
    /** The last 4 digits of the routing number */
    routing_number_last4: string | null;
    /** The type of bank account */
    account_type: BankAccountDetails.AccountType | null;
}
export declare namespace BankAccountDetails {
    /** The type of bank account */
    const AccountType: {
        readonly Checking: "checking";
        readonly Savings: "savings";
    };
    type AccountType = (typeof AccountType)[keyof typeof AccountType];
}
//# sourceMappingURL=BankAccountDetails.d.ts.map