import { TransactionStatus, TransactionType } from "../src/lib/types";
import {
  formatCurrency,
  formatDate,
  getDateArray,
  Capitalize,
} from "../src/lib/utils";

describe("formatCurrency", () => {
  it("formats currency correctly", () => {
    expect(formatCurrency(1250)).toEqual("1,250.00");
    expect(formatCurrency(1250.56)).toEqual("1,250.56");
  });
});

describe("formatDate", () => {
  it("formats date correctly", () => {
    expect(formatDate("2022-03-03")).toEqual("Mar 03, 2022");
  });
});

describe("getDateArray", () => {
  const transactions = [
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
      status: "successful" as TransactionStatus,
      type: "deposit" as TransactionType,
      date: "2022-03-03",
    },
    {
      amount: 400,
      metadata: {
        name: "Fibi Brown",
        type: "coffee",
        email: "fibibrown@example.com",
        quantity: 8,
        country: "Ireland",
      },
      payment_reference: "d28db158-0fc0-40cd-826a-4243923444f7",
      status: "successful" as TransactionStatus,
      type: "deposit" as TransactionType,
      date: "2022-03-02",
    },
    {
      amount: 350.56,
      metadata: {
        name: "Delvan Ludacris",
        type: "webinar",
        email: "johndoe@example.com",
        quantity: 1,
        country: "Kenya",
        product_name: "How to build an online brand",
      },
      payment_reference: "73f45bc0-8f41-4dfb-9cae-377a32b71d1e",
      status: "successful" as TransactionStatus,
      type: "deposit" as TransactionType,
      date: "2022-03-01",
    },
  ];

  it("returns an array with one date when there is only one transaction", () => {
    const transaction = {
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
      status: "successful" as TransactionStatus,
      type: "deposit" as TransactionType,
      date: "2022-03-03",
    };
    expect(getDateArray([transaction])).toEqual(["Mar 03, 2022"]);
  });

  it("returns an array with two dates when there are two transactions", () => {
    const transaction1 = {
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
      status: "successful" as TransactionStatus,
      type: "deposit" as TransactionType,
      date: "2022-03-01",
    };
    const transaction2 = {
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
      status: "successful" as TransactionStatus,
      type: "deposit" as TransactionType,
      date: "2022-03-03",
    };
    expect(getDateArray([transaction1, transaction2])).toEqual([
      "Mar 01, 2022",
      "Mar 03, 2022",
    ]);
  });

  it("returns an array with the earliest and latest dates when there are more than two transactions", () => {
    expect(getDateArray(transactions)).toEqual([
      "Mar 01, 2022",
      "",
      "Mar 03, 2022",
    ]);
  });
});

describe("Capitalize", () => {
  it("capitalizes the first letter of a string", () => {
    expect(Capitalize("test")).toEqual("Test");
    expect(Capitalize("hello world")).toEqual("Hello world");
  });
});
