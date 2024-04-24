import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Transaction } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (num: number) => {
  const formatted = num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatted.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export const getDateArray = (transactions: Transaction[]): string[] => {
  if (transactions.length === 0) {
    return [];
  } else if (transactions.length === 1) {
    return [formatDate(transactions[0].date)];
  } else if (transactions.length === 2) {
    const sortedDates = transactions
      .map((transaction) => new Date(transaction.date))
      .sort((a, b) => a.getTime() - b.getTime());
    return sortedDates.map((date) => formatDate(date.toISOString()));
  } else {
    const sortedDates = transactions
      .map((transaction) => new Date(transaction.date))
      .sort((a, b) => a.getTime() - b.getTime());
    const earliestDate = formatDate(sortedDates[0].toISOString());
    const latestDate = formatDate(
      sortedDates[sortedDates.length - 1].toISOString()
    );
    return [
      earliestDate,
      ...Array(transactions.length - 2).fill(""),
      latestDate,
    ];
  }
};

export const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
