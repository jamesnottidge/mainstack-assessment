export interface Wallet {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
}

export interface User {
  email: string;
  first_name: string;
  last_name: string;
}

export interface Transaction {
  amount: number;
  date: string;
  payment_reference?: string;
  status: TransactionStatus;
  type: TransactionType;
  metadata?: {
    country: string;
    email: string;
    name: string;
    product_name: string;
    quantity: number;
    type: string;
  };
}

export type TransactionType =
  | "Store Transactions"
  | "Get tipped"
  | "Withdrawals"
  | "Chargebacks"
  | "Cashbacks"
  | "Refer & Earn"
  | "deposit"
  | "withdrawal"
  | "chargeback"
  | "cashback"
  | "refer_earn"
  | "tip";

export type TransactionStatus = "successful" | "pending" | "failed";


export type TransactionContextType = {
    transactions: Transaction[];
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    filteredTransactions: Transaction[];
    setFilteredTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    wallet: Wallet;
    user: User;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: any;
    showFilter: boolean;
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
    filterTypes: TransactionType[] | string[];
    setFilterTypes: React.Dispatch<React.SetStateAction<TransactionType[]>>;
    filterStatuses: TransactionStatus[] | string[];
    setFilterStatuses: React.Dispatch<React.SetStateAction<TransactionStatus[]>>;
    filterTransactions: (
        types: TransactionType[],
        statuses: TransactionStatus[]
    ) => Transaction[];
    handleFilterApply: () => void;
    handleFilterClear: () => void;
    };

