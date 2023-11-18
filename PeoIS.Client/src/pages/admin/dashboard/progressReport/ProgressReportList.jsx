import { AddCircle } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DataGridComponent from "../../../../components/DataGridComponent";
import { progressReportData } from "../../../../data";

const ProgressReportList = () => {
  const [loading, setLoading] = useState(true);

  const columns = [
    { field: "id", headerName: "ID", flex: 1, hide: true },
    {
      field: "name_of_project",
      headerName: "Name of Project",
      minWidth: 200,
    },
    {
      field: "contractId",
      headerName: "Contract Id No.",
      minWidth: 130,
    },
    {
      field: "location",
      headerName: "Location",
      minWidth: 130,
    },
    {
      field: "contractor",
      headerName: "Contractor",
      minWidth: 130,
    },
    {
      field: "contract_amount",
      headerName: "Contract Amount",
      minWidth: 130,
    },
    {
      field: "contract_amount_revised",
      headerName: "Contract Amount Revised",
      minWidth: 130,
    },
    {
      field: "previous_percent_accomplishment",
      headerName: "Previous % of Accomplishment",
      minWidth: 130,
    },
    {
      field: "current_percent_accomplishment",
      headerName: "Current % Accomplishment",
      minWidth: 130,
    },
    {
      field: "slippage",
      headerName: "Slippage",
      minWidth: 130,
    },
    {
      field: "target_completion_date",
      headerName: "Target Completion Date",
      minWidth: 130,
    },
    {
      field: "target_completion_date_revised",
      headerName: "Target Completion Date Revised",
      minWidth: 130,
    },
    {
      field: "project_engineer",
      headerName: "Project Engineer",
      minWidth: 130,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      minWidth: 250,
    },
  ];

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={24}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">List of Progress Report</Typography>

          <Button
            startIcon={<AddCircle />}
            variant="outlined"
            onClick={() => {}}
          >
            Add New Progress
          </Button>
        </Stack>
        <Box m={2}>
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <DataGridComponent
              loading={loading}
              rows={progressReportData}
              columns={columns}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default ProgressReportList;
