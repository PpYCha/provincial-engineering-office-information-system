import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import reducer from "./reducer";

const initialState = {
  currentUser: null,
  paramUserId: null,
  openLogin: false,
  openUser: false,
  openProject: false,
  openInfrastructure: false,
  openRoad: false,
  openTask: false,
  loading: false,
  alert: { open: false, severity: "info", message: "" },

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

  project: {
    id: "",
    aip_reference_code: "",
    project_status: "",
    project_name: "",
    location: "0",
    barangay: "",
    province: "Northern Samar",
    municipality: "",
    implementing_office: "",
    starting_date: "",
    completion_date: "",
    expected_output: "",
    funding_source: "",
    personal_services: "0",
    mooe: "0",
    capital_outlay: "",
    total: "",
    cca: "0",
    ccm: "0",
    cc_typology_code: "0",
  },

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

  road: {
    id: "",
    provincialRoadId: "",
    provincialRoad: "",
    roadlocation: "",
    roadLength: "",
    remarks: "",
  },

  task: {
    id: "",
    taskCode: "",
    taskTitle: "",
    taskUnit: "",
  },
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      dispatch({ type: "UPDATE_USER", payload: currentUser });
    }
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
