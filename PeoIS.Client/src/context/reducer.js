import actionHelper from "./actionHelper";

const actions = actionHelper();

const reducer = (state, action) => {
  switch (action.type) {
    case actions.OPEN_LOGIN:
      return { ...state, openLogin: true, rowId: action.payload };
    case actions.CLOSE_LOGIN:
      return { ...state, openLogin: false };

    case actions.OPEN_USER:
      return { ...state, openUser: true, rowId: action.payload };
    case actions.CLOSE_USER:
      return { ...state, openUser: false };

    case actions.OPEN_PROJECT:
      return { ...state, openProject: true, rowId: action.payload };
    case actions.CLOSE_PROJECT:
      return { ...state, openProject: false };

    case actions.OPEN_INFRASTRUCTURE:
      return { ...state, openInfrastructure: true, rowId: action.payload };
    case actions.CLOSE_INFRASTRUCTURE:
      return { ...state, openInfrastructure: false };

    case actions.OPEN_ROAD:
      return { ...state, openRoad: true, rowId: action.payload };
    case actions.CLOSE_ROAD:
      return { ...state, openRoad: false };

    case actions.OPEN_TASK:
      return { ...state, openTask: true, rowId: action.payload };
    case actions.CLOSE_TASK:
      return { ...state, openTask: false };

    case actions.START_LOADING:
      return { ...state, loading: true };
    case actions.END_LOADING:
      return { ...state, loading: false };

    case actions.UPDATE_ALERT:
      return { ...state, alert: action.payload };

    case actions.UPDATE_USER:
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };

    case actions.UPDATE_USER_PROFILE:
      return {
        ...state,
        userProfile: { ...state.userProfile, ...action.payload },
      };

    case actions.RESET_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          id: "",
          name: "",
          email: "",
          password: "",
          username: "",
          phone: "",
          address: "",
          gender: "",
          office: "",
          status: "",
          role: "",
        },
      };

    case actions.UPDATE_PROJECT:
      return {
        ...state,
        project: { ...state.project, ...action.payload },
      };

    case actions.RESET_PROJECT:
      return {
        ...state,
        project: {
          id: "",
          aip_reference_code: "",
          project_status: "",
          project_name: "",
          location: "",
          barangay: "",
          province: "Northern Samar",
          municipality: "",
          implementing_office: "",
          starting_date: "",
          completion_date: "",
          expected_output: "",
          funding_source: "",
          personal_services: "",
          mooe: "",
          capital_outlay: "",
          total: "",
          cca: "",
          ccm: "",
          cc_typology_code: "",
        },
      };

    case actions.UPDATE_INFRASTRUCTURE:
      return {
        ...state,
        infrastructure: { ...state.infrastructure, ...action.payload },
      };

    case actions.RESET_INFRASTRUCTURE:
      return {
        ...state,
        infrastructure: {
          id: "",
          name_of_project: "",
          location: "",
          date_of_public_bidding: "",
          name_of_contractor: "",
          contrators_authorized_representative: "",
          position: "",
          categoryProject: "",
          date_of_notice_of_award: "",
          performance_security_posted: "",
          issuing_entity: "",
          policy_no: "",
          amount_performance_posted: "",
          date_of_effectivity: "",
          expiration_date: "",
          credit_line_from_bank: "",
          amount_credit_line: "",
          date_credit_line: "",
          date_of_notiization_of_contract: "",
          notarized: "",
          book_no: "",
          doc_no: "",
          series_of: "",
          date_issuance_of_notice_to_proceed: "",
          issued_by: "",
          contract_amount: "",
          revised_contract_amount: "",
          contract_duration: "",
          revised_contract_time: "",
          time_suspension_extension: "",
          peo_project_engineer: "",
          contractors_project_engineer: "",
          materials_engineer: "",
        },
      };
    case actions.UPDATE_ROAD:
      return {
        ...state,
        road: { ...state.road, ...action.payload },
      };

    case actions.RESET_ROAD:
      return {
        ...state,
        road: {
          id: "",
          provincialRoadId: "",
          provincialRoad: "",
          roadlocation: "",
          roadLength: "",
          remarks: "",
        },
      };
    case actions.UPDATE_TASK:
      return {
        ...state,
        task: { ...state.task, ...action.payload },
      };

    case actions.RESET_TASK:
      return {
        ...state,
        task: {
          id: "",
          taskCode: "",
          taskTitle: "",
          taskUnit: "",
        },
      };

    default:
      throw new Error("No matched action!");
  }
};

export default reducer;
