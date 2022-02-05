// import { Employee } from "../model/Employee";
import { Key } from "react";
// eslint-disable-next-line
const BASE_URL = "https://api.drpaul-clinic.com";

export const htppGetData = async (collection) => {
  const response = await fetch(`${BASE_URL}/${collection}`);
  return await response.json();
};
