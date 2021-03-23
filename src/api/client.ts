import axios from "axios";

let urls = {
  test: "https://api.met.no/weatherapi/locationforecast/2.0/",
  development: "https://api.met.no/weatherapi/locationforecast/2.0/",
  production: "https://api.met.no/weatherapi/locationforecast/2.0/",
};

export const client = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
