import axios from "axios";
import { defaultUrl } from "../utils/defaultUrl";

const url = defaultUrl;

export const signInUser = async (email, password) => {
  try {
    const res = await axios.post(`${url}user-signin`, {
      email: email,
      password: password,
    });

    return res;
  } catch (error) {
    console.log("sign error:", error);
  }
};
