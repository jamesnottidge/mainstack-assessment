import axios from "axios";
import exp from "constants";
import { Transaction, Wallet, User } from "./types";

const BASE_URL = "https://fe-task-api.mainstack.io";

export const API = axios.create({
  baseURL: BASE_URL,
});

export const getTransactions = async (): Promise<Transaction[]> => {
  return API.get("/transactions").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getWallet = async (): Promise<Wallet> => {
  return API.get("/wallet").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export const getUser = async (): Promise<User> => {
  return API.get("/user").then((response) => {
    console.log(response.data);
    return response.data;
  });
};
