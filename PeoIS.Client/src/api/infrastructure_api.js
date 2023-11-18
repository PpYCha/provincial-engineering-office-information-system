import axios from "axios";

import { defaultUrl } from "../utils/defaultUrl";

const url = defaultUrl;

export const fetchInfrastructures = async () => {
  try {
    const res = await axios.get(`${url}infrastructures`);

    if (res.data.status === 200) {
      console.log(res.data.infrastructures);
      return res.data.infrastructures;
    }
  } catch (error) {
    console.log("infrastructure error:", error);
  }
};

//delete infrastructire
export const deleteInfrastructure = async (id) => {
  try {
    const res = await axios
      .delete(`${url}delete-infrastructure/${id}`)
      .then(console.log("deleted project"));
  } catch (error) {
    console.log("delete error:", error);
  }
};

//Post
export const postInfrastructure = async ({
  name_of_project,
  location,
  date_of_public_bidding,
  name_of_contractor,
  contrators_authorized_representative,
  position,
  date_of_notice_of_award,
  performance_security_posted,
  issuing_entity,
  policy_no,
  amount_performance_posted,
  date_of_effectivity,
  expiration_date,
  credit_line_from_bank,
  amount_credit_line,
  date_credit_line,
  date_of_notiization_of_contract,
  book_no,
  doc_no,
  series_of,
  date_issuance_of_notice_to_proceed,
  issued_by,
  contract_amount,
  revised_contract_amount,
  contract_duration,
  revised_contract_time,
  time_suspension_extension,
  peo_project_engineer,
  contractors_project_engineer,
  materials_engineer,
  categoryProject,
  notarized,
}) => {
  try {
    const res = await axios.post(`${url}add-infrastructure`, {
      name_of_project: name_of_project,
      location: location,
      date_of_public_bidding: date_of_public_bidding,
      name_of_contractor: name_of_contractor,
      contrators_authorized_representative:
        contrators_authorized_representative,
      position: position,
      date_of_notice_of_award: date_of_notice_of_award,
      performance_security_posted: performance_security_posted,
      issuing_entity: issuing_entity,
      policy_no: policy_no,
      amount_performance_posted: amount_performance_posted,
      date_of_effectivity: date_of_effectivity,
      expiration_date: expiration_date,
      credit_line_from_bank: credit_line_from_bank,
      amount_credit_line: amount_credit_line,
      date_credit_line: date_credit_line,
      date_of_notiization_of_contract: date_of_notiization_of_contract,
      book_no: book_no,
      doc_no: doc_no,
      series_of: series_of,
      date_issuance_of_notice_to_proceed: date_issuance_of_notice_to_proceed,
      issued_by: issued_by,
      contract_amount: contract_amount,
      revised_contract_amount: revised_contract_amount,
      contract_duration: contract_duration,
      revised_contract_time: revised_contract_time,
      time_suspension_extension: time_suspension_extension,
      peo_project_engineer: peo_project_engineer,
      contractors_project_engineer: contractors_project_engineer,
      materials_engineer: materials_engineer,
      categoryProject: categoryProject,
      notarized: notarized,
    });
    console.log("infra store:", res);
    return res;
  } catch (error) {
    console.log("post infra:", error);
  }
};

//Put
export const putInfrastructure = async ({
  infraId,
  name_of_project,
  location,
  date_of_public_bidding,
  name_of_contractor,
  contrators_authorized_representative,
  position,
  date_of_notice_of_award,
  performance_security_posted,
  issuing_entity,
  policy_no,
  amount_performance_posted,
  date_of_effectivity,
  expiration_date,
  credit_line_from_bank,
  amount_credit_line,
  date_credit_line,
  date_of_notiization_of_contract,
  book_no,
  doc_no,
  series_of,
  date_issuance_of_notice_to_proceed,
  issued_by,
  contract_amount,
  revised_contract_amount,
  contract_duration,
  revised_contract_time,
  time_suspension_extension,
  peo_project_engineer,
  contractors_project_engineer,
  materials_engineer,
  categoryProject: categoryProject,
  notarized: notarized,
}) => {
  try {
    const res = await axios.put(`${url}update-infrastructure/${infraId}`, {
      name_of_project: name_of_project,
      location: location,
      date_of_public_bidding: date_of_public_bidding,
      name_of_contractor: name_of_contractor,
      contrators_authorized_representative:
        contrators_authorized_representative,
      position: position,
      date_of_notice_of_award: date_of_notice_of_award,
      performance_security_posted: performance_security_posted,
      issuing_entity: issuing_entity,
      policy_no: policy_no,
      amount_performance_posted: amount_performance_posted,
      date_of_effectivity: date_of_effectivity,
      expiration_date: expiration_date,
      credit_line_from_bank: credit_line_from_bank,
      amount_credit_line: amount_credit_line,
      date_credit_line: date_credit_line,
      date_of_notiization_of_contract: date_of_notiization_of_contract,
      book_no: book_no,
      doc_no: doc_no,
      series_of: series_of,
      date_issuance_of_notice_to_proceed: date_issuance_of_notice_to_proceed,
      issued_by: issued_by,
      contract_amount: contract_amount,
      revised_contract_amount: revised_contract_amount,
      contract_duration: contract_duration,
      revised_contract_time: revised_contract_time,
      time_suspension_extension: time_suspension_extension,
      peo_project_engineer: peo_project_engineer,
      contractors_project_engineer: contractors_project_engineer,
      materials_engineer: materials_engineer,
      categoryProject: categoryProject,
      notarized: notarized,
    });
    console.log("infra put:", res);
    return res;
  } catch (error) {
    console.log("put error:", error);
  }
};
