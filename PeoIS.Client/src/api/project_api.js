import axios from "axios";
import { defaultUrl } from "../utils/defaultUrl";

const url = defaultUrl;

export const fetchProjects = async () => {
  try {
    const res = await axios.get(`${url}projects`);

    if (res.data.status === 200) {
      return res.data.projects;
    }
  } catch (error) {
    console.log("fetchProhejct error:", error);
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await axios
      .delete(`${defaultUrl}delete-project/${id}`)
      .then(console.log("deleted project"));
  } catch (error) {
    console.log("delete error:", error);
  }
};

//Post
export const postProject = async ({
  aip_reference_code,
  project_status,
  project_name,
  location,
  barangay,
  province,
  municipality,
  implementing_office,
  starting_date,
  completion_date,
  expected_output,
  funding_source,
  personal_services,
  mooe,
  capital_outlay,
  total,
  cca,
  ccm,
  cc_typology_code,
}) => {
  try {
    const res = await axios.post(`${defaultUrl}add-project`, {
      aip_reference_code: aip_reference_code,
      project_status: project_status,
      project_name: project_name,
      location: location,
      barangay: barangay,
      province: province,
      municipality: municipality,
      implementing_office: implementing_office,
      starting_date: starting_date,
      completion_date: completion_date,
      expected_output: expected_output,
      funding_source: funding_source,
      personal_services: personal_services,
      mooe: mooe,
      capital_outlay: capital_outlay,
      total: total,
      cca: cca,
      ccm: ccm,
      cc_typology_code: cc_typology_code,
    });

    return res;
  } catch (error) {
    console.log("post error:", error);
  }
};

//put project

export const putProject = async ({
  projectId,
  aip_reference_code,
  project_status,
  project_name,
  location,
  barangay,
  province,
  municipality,
  implementing_office,
  starting_date,
  completion_date,
  expected_output,
  funding_source,
  personal_services,
  mooe,
  capital_outlay,
  total,
  cca,
  ccm,
  cc_typology_code,
}) => {
  try {
    const res = await axios.put(`${defaultUrl}update-project/${projectId}`, {
      aip_reference_code: aip_reference_code,
      project_status: project_status,
      project_name: project_name,
      location: location,
      barangay: barangay,
      municipality: municipality,
      province: province,
      implementing_office: implementing_office,
      starting_date: starting_date,
      completion_date: completion_date,
      expected_output: expected_output,
      funding_source: funding_source,
      personal_services: personal_services,
      mooe: mooe,
      capital_outlay: capital_outlay,
      total: total,
      cca: cca,
      ccm: ccm,
      cc_typology_code: cc_typology_code,
    });
    return res;
  } catch (error) {
    console.log("put error:", error);
  }
};
