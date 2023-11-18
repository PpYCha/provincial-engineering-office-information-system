import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { defaultUrl } from "../utils/defaultUrl";

const url = defaultUrl;

//Get all
export const fetchUsers = async () => {
  try {
    const res = await axios.get(`${url}users`);

    if (res.data.status === 200) {
      return res.data.users;
    }
  } catch (error) {
    console.log("fetchUsers error:", error);
  }
};

//Create
export const postUser = async ({
  name,
  email,
  username,
  password,
  address,
  contactNumber,
  gender,
  office,
  status,
  role,
}) => {
  try {
    const res = await axios.post(`${url}user-signup`, {
      name: name,
      email: email,
      username: username,
      password: password,
      address: address,
      contactNumber: contactNumber,
      gender: gender,
      office: office,
      status: status,
      role: role,
    });

    return res;
  } catch (error) {
    console.log("post error:", error);
  }
};

//Update
export const putUser = async ({
  userId,
  name,
  email,
  username,
  password,
  address,
  contactNumber,
  gender,
  office,
  status,
  role,
}) => {
  console.log(contactNumber);

  try {
    const res = await axios.put(`${url}update-user/${userId}`, {
      name: name,
      email: email,
      username: username,
      password: password,
      contactNumber: contactNumber,
      address: address,
      gender: gender,
      office: office,
      status: status,
      role: role,
    });
    return res;
  } catch (error) {
    console.log("put error", error);
  }
};

//Select 1
export const fetchUser = async ({ userId }) => {
  try {
    const res = await axios.get(`${url}edit-user/${userId}`);
    // console.log(res);
    return res;
  } catch (error) {
    console.log("fetch user error:", error);
  }
};

//Delete 1
export const deleteUser = async (userId) => {
  try {
    const res = await axios.delete(
      `http://localhost:8000/api/delete-user/${userId}`
    );

    return res;
  } catch (error) {
    console.log("fetch user error:", error);
  }
};
