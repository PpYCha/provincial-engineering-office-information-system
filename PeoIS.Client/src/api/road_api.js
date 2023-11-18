import axios from "axios";

import { defaultUrl } from "../utils/defaultUrl";

const url = defaultUrl;

export const fetchRoads = async () => {
  try {
    const res = await axios.get(`${url}roads`);

    if (res.data.status === 200) {
      console.log(res.data.roads);
      return res.data.roads;
    }
  } catch (error) {
    console.log("road error:", error);
  }
};

export const deleteRoad = async (id) => {
  try {
    const res = await axios
      .delete(`http://localhost:8000/api/delete-road/${id}`)
      .then(console.log("deleted project"));
  } catch (error) {
    console.log("delete error:", error);
  }
};

export const postRoad = async ({
  provincialRoadId,
  provincialRoad,
  roadlocation,
  roadLength,
  remarks,
}) => {
  try {
    const res = await axios.post("http://localhost:8000/api/add-road", {
      provincialRoadId: provincialRoadId,
      provincialRoad: provincialRoad,
      roadlocation: roadlocation,
      roadLength: roadLength,
      remarks: remarks,
    });
    return res;
  } catch (error) {
    console.log("post infra:", error);
  }
};

export const putRoad = async ({
  id,
  provincialRoadId,
  provincialRoad,
  roadlocation,
  roadLength,
  remarks,
}) => {
  try {
    const res = await axios.put(`http://localhost:8000/api/update-road/${id}`, {
      provincialRoadId: provincialRoadId,
      provincialRoad: provincialRoad,
      roadlocation: roadlocation,
      roadLength: roadLength,
      remarks: remarks,
    });
    return res;
  } catch (error) {
    console.log("put error:", error);
  }
};
