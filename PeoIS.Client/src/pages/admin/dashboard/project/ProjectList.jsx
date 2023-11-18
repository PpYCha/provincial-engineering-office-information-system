import { Box } from "@material-ui/core";
import {
  Delete,
  CheckCircle,
  Warning,
  Edit,
  Construction,
  BorderColor,
  DeleteOutline,
  Architecture,
} from "@mui/icons-material";
import {
  Button,
  ButtonBase,
  CircularProgress,
  Paper,
  Stack,
  Typography,
  styled,
  IconButton,
  Chip,
} from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import DataGridComponent from "../../../../components/DataGridComponent";
import { pink, green, red } from "@mui/material/colors";

import { fetchProjects, deleteProject } from "../../../../api/project_api";
import ProjectAddEdit from "./ProjectAddEdit";
import { useValue } from "../../../../context/ContextProvider";
import ActionButton from "../../../../components/DataGrid/ActionButton";
import { AddCircle } from "@material-ui/icons";
import InfrastructureAddEdit from "../infrastructures/InfrastructureAddEdit";
import Swal from "sweetalert2";

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    state: { openProject, openInfrastructure },
    dispatch,
  } = useValue();

  const handleClose = () => {
    dispatch({ type: "CLOSE_PROJECT" });
    dispatch({ type: "CLOSE_INFRASTRUCTURE" });
    dispatch({ type: "RESET_PROJECT" });
    fetchAPI();
  };

  const handleEdit = ({ params }) => {
    const {
      id,
      aip_reference_code,
      project_status,
      project_name,
      location,
      barangay,

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
    } = params.row;

    dispatch({
      type: "UPDATE_PROJECT",
      payload: {
        id,
        aip_reference_code,
        project_status,
        project_name,
        location,
        barangay,
        // province,
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
    });

    dispatch({
      type: "OPEN_PROJECT",
    });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,

      confirmButtonText: "yes",
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        await deleteProject(id);
        fetchAPI();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const getFullName = (params) => {
    return `${params.row.project_name || ""}, Brgy. ${
      params.row.barangay || ""
    }, ${params.row.municipality || ""}, N. Samar`;
  };

  const handleInfrastructure = ({ params }) => {
    const {
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
    } = params.row;
    // console.log(id);
    dispatch({
      type: "UPDATE_INFRASTRUCTURE",
      payload: {
        name_of_project: project_name,
        location: barangay + ", " + municipality + ", " + "Northern Samar",
      },
    });
    dispatch({
      type: "OPEN_INFRASTRUCTURE",
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    setLoading(true);

    setProjectList(await fetchProjects());
    setLoading(false);
  };

  const columns = useMemo(() => [
    { field: "id", headerName: "ID", flex: 1, hide: true },
    {
      field: "aip_reference_code",
      headerName: "AIP",
      minWidth: 130,
    },

    {
      field: "projectTitle",
      headerName: "PROJECT NAME",
      minWidth: 300,
      maxWidth: 700,
      flex: 1,
      valueGetter: getFullName,
    },
    {
      field: "implementing_office",
      headerName: "IMPLEMENTING OFFICE",
      minWidth: 175,
      hide: true,
    },
    {
      field: "starting_date",
      headerName: "Starting Date",
      minWidth: 100,
      hide: true,
    },
    {
      field: "completion_date",
      headerName: "Completion Date",
      minWidth: 100,
      hide: true,
    },
    {
      field: "expected_output",
      headerName: "EXPECTED OUTPUT",
      minWidth: 300,
      hide: true,
    },
    { field: "funding_source", headerName: "FUNDING SOURCE", minWidth: 135 },
    { field: "capital_outlay", headerName: "CAPITAL OUTLAY", minWidth: 100 },
    { field: "total", headerName: "TOTAL", minWidth: 100 },
    {
      field: "project_status",
      headerName: "Status",
      minWidth: 120,

      renderCell: (params) => {
        return (
          <>
            {params.row.project_status === "Not Funded" ? (
              <>
                <Chip label="Not Funded" variant="outlined" color="warning" />
              </>
            ) : (
              <>
                <Chip
                  label="Funded"
                  variant="outlined"
                  color="success"
                  sx={{ minWidth: 90 }}
                />
              </>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 385,
      renderCell: (params) => {
        return (
          <>
            <Stack direction="row" spacing={2} justifyContent="space-evenly">
              <ActionButton
                size="small"
                variant="contained"
                startIcon={<BorderColor />}
                color="success"
                label="Edit"
                onClick={() => handleEdit({ ...{ params } })}
              />

              <ActionButton
                size="small"
                variant="contained"
                startIcon={<DeleteOutline />}
                onClick={() => handleDelete(params.row.id)}
                color="error"
                label="Delete"
              />
              <ActionButton
                size="small"
                variant="contained"
                startIcon={<Architecture />}
                onClick={() => handleInfrastructure({ ...{ params } })}
                color="info"
                label="Infrastructure"
              />
            </Stack>
          </>
        );
      },
    },
  ]);

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={24}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">Project List</Typography>

          <Button
            startIcon={<AddCircle />}
            variant="outlined"
            onClick={() => dispatch({ type: "OPEN_PROJECT" })}
          >
            Add New Project
          </Button>
        </Stack>
        <ProjectAddEdit openProject={openProject} handleClose={handleClose} />
        <InfrastructureAddEdit
          openInfrastructure={openInfrastructure}
          handleClose={handleClose}
        />
        <Box m={2}>
          <DataGridComponent
            loading={loading}
            rows={projectList}
            columns={columns}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ProjectList;
