import axios from "axios";
import exp from "constants";


const BASE_URL = "https://fe-task-api.mainstack.io";

export const API = axios.create({
  baseURL: BASE_URL,
//   headers: {
//     "Content-type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     "Access-Control-Allow-Credentials": true,
//   },
});

export const getTransactions = async () => {
    API.get("/transactions")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
};

export const getWallet = async () => {
    API.get("/wallet")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })

}

export const getUser = async () => {
    API.get("/user")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
};
