import axios from "axios";

import { defaultUrl } from "../utils/defaultUrl";

const url = defaultUrl;

export const fetchProjectsActivity = async () => {
  try {
    const res = await axios.get(`${url}project-activityLog`);

    if (res.data.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.log("fetchProjectActivity error:", error);
  }
};
