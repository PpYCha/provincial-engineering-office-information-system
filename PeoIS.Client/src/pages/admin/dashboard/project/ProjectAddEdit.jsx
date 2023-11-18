import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Tab,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import Swal from "sweetalert2";

import { useValue } from "../../../../context/ContextProvider";
import { postProject, putProject } from "../../../../api/project_api";
import { Close } from "@material-ui/icons";
import { Send } from "@mui/icons-material";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import ProjectForm from "./ProjectForm";

const ProjectAddEdit = ({ openProject, handleClose }) => {
  const [alignment, setAlignment] = useState("Funded");
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [barangayData, setBarangay] = useState([]);
  const [valueTab, setValueTab] = useState("1");

  const {
    state: {
      project: {
        id,
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
      },
    },
    dispatch,
  } = useValue();

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_PROJECT",
      payload: { [e.target.id]: e.target.value },
    });
  };

  const handleChangeAutoComplete = (e, newValue) => {
    setValue(newValue.label);
    const str = e.target.id;

    const newStr = str.split("-")[0];

    dispatch({
      type: "UPDATE_PROJECT",
      payload: { [newStr]: newValue.label },
    });
  };

  const handleSave = () => {
    console.log(id);
    if (!id) {
      const res = postProject({
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
      })
        .then(function (response) {
          // console.log("then:", response.data.message);
          if (response.data.status === 200) {
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
    }

    if (id) {
      const res = putProject({
        projectId: id,
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
      })
        .then(function (response) {
          // console.log("then:", response.data.message);
          if (response.data.status === 200) {
            console.log(response.data.message);
            Swal.fire({
              title: "Success",
              text: "Updated successfully",
              icon: "success",
              confirmButtonText: "OK!",
            });
            // navigate("/dashboard/projects");
            handleClose();
          }
        })
        .catch(function (error) {
          console.log("post catch:", error);
        });
      console.log("updating");
    }
  };

  return (
    <Dialog open={openProject} onClose={handleClose} fullWidth maxWidth="xl">
      <DialogTitle>
        Project Information
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
      <DialogContent>
        <DialogContentText paddingBottom={1}>
          Please fill project information in the fields :
        </DialogContentText>
        <ProjectForm
          handleChange={handleChange}
          handleChangeAutoComplete={handleChangeAutoComplete}
        />
      </DialogContent>
      <DialogActions sx={{ px: "19px" }}>
        <Button
          type="submit"
          variant="contained"
          color="success"
          endIcon={<Send />}
          onClick={handleSave}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectAddEdit;
