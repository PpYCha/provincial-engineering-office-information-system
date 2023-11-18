import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataGridComponent from "../../../../components/DataGridComponent";
import InfrastructureAddEdit from "./InfrastructureAddEdit";
import {
  deleteInfrastructure,
  fetchInfrastructures,
} from "../../../../api/infrastructure_api";
import { AddCircle, BorderColor, DeleteOutline } from "@material-ui/icons";
import { useValue } from "../../../../context/ContextProvider";
import ActionButton from "../../../../components/DataGrid/ActionButton";
import { fDate } from "../../../../utils/formatTime";
import Swal from "sweetalert2";

const InfrastructureList = () => {
  const [infastructureList, setInfastructureList] = useState([]);

  const [loading, setLoading] = useState(true);

  const {
    state: { openInfrastructure },
    dispatch,
  } = useValue();

  const handleClose = () => {
    dispatch({ type: "CLOSE_INFRASTRUCTURE" });
    dispatch({ type: "RESET_INFRASTRUCTURE" });
    fetchAPI();
  };

  const columns = [
    { field: "id", headerName: "ID", hide: true },
    {
      field: "name_of_project",
      headerName: "Project Name",
      minWidth: 300,
      maxWidth: 700,
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 100,
      hide: true,
    },
    {
      field: "date_of_public_bidding",
      headerName: "Date of Public Bidding",
      minWidth: 100,
      hide: true,
    },
    {
      field: "name_of_contractor",
      headerName: "Name of Contractor",
      minWidth: 200,
      maxWidth: 300,
    },
    {
      field: "contrators_authorized_representative",
      headerName: "Contractor Authorized Representative",
      minWidth: 200,
      maxWidth: 700,
    },
    { field: "position", headerName: "Position", minWidth: 100, hide: true },
    {
      field: "date_of_notice_of_award",
      headerName: "Date of Notice of Award",
      minWidth: 100,
      hide: true,
    },
    {
      field: "performance_security_posted",
      headerName: "Performance Security Posted",
      minWidth: 100,
      hide: true,
    },
    {
      field: "issuing_entity",
      headerName: "Issuing Entity",
      minWidth: 100,
      hide: true,
    },
    { field: "policy_no", headerName: "Policy No.", minWidth: 100, hide: true },
    {
      field: "amount_performance_posted",
      headerName: "Amount Performance Posted",
      minWidth: 150,
      hide: true,
    },
    {
      field: "date_of_effectivity",
      headerName: "Date of Effective",
      minWidth: 160,
      hide: true,
      renderCell: (params) => {
        return (
          <>
            <Typography variant="inherit">{fDate(params.value)}</Typography>
          </>
        );
      },
    },
    {
      field: "expiration_date",
      headerName: "Expiration Date",
      minWidth: 160,
      hide: true,
      renderCell: (params) => {
        return (
          <>
            <Typography variant="inherit">{fDate(params.value)}</Typography>
          </>
        );
      },
    },
    {
      field: "credit_line_from_bank",
      headerName: "Credit Line From Bank",
      minWidth: 100,
      hide: true,
    },
    {
      field: "amount_credit_line",
      headerName: "Amount Credit Line",
      minWidth: 100,
      hide: true,
    },
    {
      field: "date_credit_line",
      headerName: "Date Credit Line",
      minWidth: 160,
      hide: true,
      renderCell: (params) => {
        return (
          <>
            <Typography variant="inherit">{fDate(params.value)}</Typography>
          </>
        );
      },
    },
    {
      field: "date_of_notiization_of_contract",
      headerName: "Date Notization Contract",
      minWidth: 160,
      hide: true,
      renderCell: (params) => {
        return (
          <>
            <Typography variant="inherit">{fDate(params.value)}</Typography>
          </>
        );
      },
    },
    { field: "book_no", headerName: "Book No", minWidth: 100, hide: true },
    { field: "doc_no", headerName: "Doc No", minWidth: 100, hide: true },
    { field: "series_of", headerName: "Series Of", minWidth: 100, hide: true },
    {
      field: "date_issuance_of_notice_to_proceed",
      headerName: "Date Issuance of Notice to Proceed",
      minWidth: 160,
      hide: true,
      renderCell: (params) => {
        return (
          <>
            <Typography variant="inherit">{fDate(params.value)}</Typography>
          </>
        );
      },
    },
    { field: "issued_by", headerName: "Issued By", minWidth: 100 },
    {
      field: "contract_amount",
      headerName: "Contract Amount",
      minWidth: 100,
      hide: true,
    },
    {
      field: "revised_contract_amount",
      headerName: "Revised Contract Amount",
      minWidth: 100,
      hide: true,
    },
    {
      field: "contract_duration",
      headerName: "Contract Duration",
      minWidth: 100,
    },
    {
      field: "revised_contract_time",
      headerName: "Revised Contract Time",
      minWidth: 100,
    },
    {
      field: "time_suspension_extension",
      headerName: "Time Suspension Extension",
      minWidth: 100,
    },
    {
      field: "peo_project_engineer",
      headerName: "PEO Project Engineer",
      minWidth: 100,
    },
    {
      field: "contractors_project_engineer",
      headerName: "Contractors Project Engineer",
      minWidth: 100,
    },
    {
      field: "materials_engineer",
      headerName: "Materials Engineer",
      minWidth: 100,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 200,
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
            </Stack>
          </>
        );
      },
    },
  ];

  const handleEdit = ({ params }) => {
    const {
      id,
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
    } = params.row;
    console.log(id);
    dispatch({
      type: "UPDATE_INFRASTRUCTURE",
      payload: {
        id,
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
      },
    });

    dispatch({
      type: "OPEN_INFRASTRUCTURE",
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,

      confirmButtonText: "Yes",
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "", "success");
        await deleteInfrastructure(id);
        fetchAPI();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    setLoading(true);
    setInfastructureList(await fetchInfrastructures());
    setLoading(false);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={24}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">Infastructures List</Typography>
          {/* <Button
            startIcon={<AddCircle />}
            variant="outlined"
            onClick={() => dispatch({ type: "OPEN_INFRASTRUCTURE" })}
          >
            Add New Infrastructures
          </Button> */}
        </Stack>
        <InfrastructureAddEdit
          openInfrastructure={openInfrastructure}
          handleClose={handleClose}
        />
        <Box m={2}>
          <DataGridComponent
            loading={loading}
            rows={infastructureList}
            columns={columns}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default InfrastructureList;
