import axios from "axios";
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tab,
} from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import CustomTextField from "../../../../components/CustomTextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { Close, Send } from "@material-ui/icons";
import { useValue } from "../../../../context/ContextProvider";
import {
  postInfrastructure,
  putInfrastructure,
} from "../../../../api/infrastructure_api";
import InfrastructureForm from "./InfrastructureForm";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import actionHelper from "../../../../context/actionHelper";

const InfrastructureAddEdit = ({ openInfrastructure, handleClose }) => {
  const [value, setValue] = useState(null);
  const [valueTab, setValueTab] = useState("1");
  const {
    state: {
      infrastructure: {
        id,
        name_of_project,
        location,
        date_of_public_bidding,
        name_of_contractor,
        contrators_authorized_representative,
        position,
        date_of_notice_of_award,
        categoryProject,
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
        notarized,
      },
    },
    dispatch,
  } = useValue();

  const actions = actionHelper();

  const name_of_projectRef = useRef();
  const locationRef = useRef();
  const date_of_public_biddingRef = useRef();
  const name_of_contractorRef = useRef();
  const contrators_authorized_representativeRef = useRef();
  const positionRef = useRef();
  const date_of_notice_of_awardRef = useRef();
  const performance_security_postedRef = useRef();
  const issuing_entityRef = useRef();
  const policy_noRef = useRef();
  const amount_performance_postedRef = useRef();
  const date_of_effectivityRef = useRef();
  const expiration_dateRef = useRef();
  const credit_line_from_bankRef = useRef();
  const amount_credit_lineRef = useRef();
  const date_credit_lineRef = useRef();
  const date_of_notiization_of_contractRef = useRef();
  const book_noRef = useRef();
  const doc_noRef = useRef();
  const series_ofRef = useRef();
  const date_issuance_of_notice_to_proceedRef = useRef();
  const issued_byRef = useRef();
  const contract_amountRef = useRef();
  const revised_contract_amountRef = useRef();
  const contract_durationRef = useRef();
  const revised_contract_timeRef = useRef();
  const time_suspension_extensionRef = useRef();
  const peo_project_engineerRef = useRef();
  const contractors_project_engineerRef = useRef();
  const materials_engineerRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_INFRASTRUCTURE",
      payload: { [e.target.id]: e.target.value },
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!id) {
      const res = await postInfrastructure({
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
      })
        .then(function (response) {
          // console.log("then:", response.data.message);
          if (response.data.status === 200) {
            console.log(response.data.message);
            Swal.fire({
              title: "Success",
              text: "Save successfully",
              icon: "success",
              confirmButtonText: "OK!",
            });

            handleClose();
          }
        })
        .catch(function (error) {
          console.log("post catch:", error);
        });
      console.log("saving");
    }

    if (id) {
      const res = await putInfrastructure({
        infraId: id,
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
      })
        .then(function (response) {
          // console.log("then:", response.data.message);
          if (response.data.status === 200) {
            console.log(response.data.message);
            Swal.fire({
              title: "Success",
              text: "Update successfully",
              icon: "success",
              confirmButtonText: "OK!",
            });

            handleClose();
          }
        })
        .catch(function (error) {
          console.log("post catch:", error);
        });
      console.log("saving");
    }
  };

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };

  const handleChangeAutoComplete = (e, newValue) => {
    setValue(newValue.label);
    const str = e.target.id;

    const newStr = str.split("-")[0];
    console.log(newValue.label);
    dispatch({
      type: actions.UPDATE_INFRASTRUCTURE,
      payload: { [newStr]: newValue.label },
    });
  };

  return (
    <Dialog
      open={openInfrastructure}
      onClose={handleClose}
      fullWidth
      maxWidth="xl"
    >
      <form onSubmit={handleSave}>
        <DialogTitle>
          Infastructures Information
          <IconButton
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText paddingBottom={3}>
            Please fill infrastructure information in the fields :
          </DialogContentText>

          <TabContext value={valueTab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChangeTab}
                aria-label="lab API tabs example"
              >
                <Tab label="Project Details" value="1" />
                <Tab label="Project Task" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <InfrastructureForm
                handleChange={handleChange}
                handleChangeAutoComplete={handleChangeAutoComplete}
                value={value}
                adapterDateFns={AdapterDateFns}
              />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </DialogContent>
        <DialogActions sx={{ px: "19px" }}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            endIcon={<Send />}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default InfrastructureAddEdit;
