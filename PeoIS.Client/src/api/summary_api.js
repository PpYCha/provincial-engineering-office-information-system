import axios from "axios";

import { defaultUrl } from "../utils/defaultUrl";

const url = defaultUrl;

export const fetchSummaryProjects = async () => {
  try {
    const res = await axios.get(`${url}projects`);

    if (res.data.status === 200) {
      const total = res.data.projects;

      return total.length;
    }
  } catch (error) {
    console.log("fetchSummaryProject error:", error);
  }
};

export const fetchSummaryFundedProjects = async () => {
  try {
    const res = await axios.get(`${url}projects`);

    if (res.data.status === 200) {
      const funded = res.data.projects;
      const fundeds = funded.filter((item) => item.project_status === "Funded");

      return fundeds.length;
    }
  } catch (error) {
    console.log("fetchSummaryProject error:", error);
  }
};

export const fetchSummaryNotFundedProjects = async () => {
  try {
    const res = await axios.get(`${url}projects`);

    if (res.data.status === 200) {
      const funded = res.data.projects;
      const fundeds = funded.filter(
        (item) => item.project_status === "Not Funded"
      );

      return fundeds.length;
    }
  } catch (error) {
    console.log("fetchSummaryProject error:", error);
  }
};
