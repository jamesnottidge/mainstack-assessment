import "@testing-library/jest-dom";

jest.mock("@/contexts/TransactionContext", () => ({
  TransactionContext: jest.fn().mockReturnValue({
    transactions: [
      {
        amount: 500,
        metadata: {
          name: "John Doe",
          type: "digital_product",
          email: "johndoe@example.com",
          quantity: 1,
          country: "Nigeria",
          product_name: "Rich Dad Poor Dad",
        },
        payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
        status: "successful",
        type: "deposit",
        date: "2022-03-03",
      },
      // Add other transactions here
    ],
    setTransactions: jest.fn(),
    filteredTransactions: [],
    setFilteredTransactions: jest.fn(),
    wallet: {
      balance: 750.56,
      total_payout: 500,
      total_revenue: 1250.56,
      pending_payout: 0,
      ledger_balance: 500,
    },
    user: {
      email: "olivierjones@gmail.com",
      first_name: "Olivier",
      last_name: "Jones",
    },
    loading: false,
    setLoading: jest.fn(),
    error: null,
    setError: jest.fn(),
    showFilter: false,
    setShowFilter: jest.fn(),
    filterTypes: [],
    setFilterTypes: jest.fn(),
    filterStatuses: [],
    setFilterStatuses: jest.fn(),
    handleFilterApply: jest.fn(),
    handleFilterClear: jest.fn(),
  }),
  useTransactionProvider: jest.fn().mockReturnValue({
    transactions: [
      {
        amount: 500,
        metadata: {
          name: "John Doe",
          type: "digital_product",
          email: "johndoe@example.com",
          quantity: 1,
          country: "Nigeria",
          product_name: "Rich Dad Poor Dad",
        },
        payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
        status: "successful",
        type: "deposit",
        date: "2022-03-03",
      },
      // Add other transactions here
    ],
    setTransactions: jest.fn(),
    filteredTransactions: [
      {
        amount: 500,
        metadata: {
          name: "John Doe",
          type: "digital_product",
          email: "johndoe@example.com",
          quantity: 1,
          country: "Nigeria",
          product_name: "Rich Dad Poor Dad",
        },
        payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
        status: "successful",
        type: "deposit",
        date: "2022-03-03",
      },
    ],
    setFilteredTransactions: jest.fn(),
    wallet: {
      balance: 750.56,
      total_payout: 500,
      total_revenue: 1250.56,
      pending_payout: 0,
      ledger_balance: 500,
    },
    user: {
      email: "olivierjones@gmail.com",
      first_name: "Olivier",
      last_name: "Jones",
    },
    loading: false,
    setLoading: jest.fn(),
    error: null,
    setError: jest.fn(),
    showFilter: false,
    setShowFilter: jest.fn(),
    filterTypes: [],
    setFilterTypes: jest.fn(),
    filterStatuses: [],
    setFilterStatuses: jest.fn(),
    handleFilterApply: jest.fn(),
    handleFilterClear: jest.fn(),
  }),
}));

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));