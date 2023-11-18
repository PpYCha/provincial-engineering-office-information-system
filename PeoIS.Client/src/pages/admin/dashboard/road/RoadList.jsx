import { AddCircle, BorderColor, DeleteOutline } from "@material-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteRoad, fetchRoads } from "../../../../api/road_api";
import { useValue } from "../../../../context/ContextProvider";
import { roadsData } from "../../../../data";
import ActionButton from "../../../../components/DataGrid/ActionButton";
import DataGridComponent from "../../../../components/DataGridComponent";
import RoadAddEdit from "./RoadAddEdit";

const RoadList = () => {
  const [roadList, setRoadList] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    state: { openRoad },
    dispatch,
  } = useValue();

  const columns = [
    {
      field: "id",
      headerName: "ROAD ID",
      minWidth: 100,
      hide: true,
    },
    {
      field: "provincialRoadId",
      headerName: "ROAD ID",
      minWidth: 120,
    },
    {
      field: "provincialRoad",
      headerName: "Provincial Road",
      minWidth: 300,
    },
    {
      field: "roadlocation",
      headerName: "Location",
      minWidth: 200,
    },
    {
      field: "roadLength",
      headerName: "Length(km)",
      minWidth: 100,
    },
    {
      field: "remarks",
      headerName: "Remarks",
      minWidth: 100,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
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
                color="error"
                label="Delete"
                onClick={() => handleDelete(params.row.id)}
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
      provincialRoadId,
      provincialRoad,
      roadlocation,
      roadLength,
      remarks,
    } = params.row;
    console.log(id);
    dispatch({
      type: "UPDATE_ROAD",
      payload: {
        id,
        provincialRoadId,
        provincialRoad,
        roadlocation,
        roadLength,
        remarks,
      },
    });

    dispatch({
      type: "OPEN_ROAD",
    });
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      showDenyButton: true,

      confirmButtonText: "Yes",
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        await deleteRoad(id);
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

    setRoadList(await fetchRoads());
    setLoading(false);
  };

  const handleClose = () => {
    dispatch({ type: "CLOSE_ROAD" });
    dispatch({ type: "RESET_ROAD" });
    fetchAPI();
  };

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={24}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">List of Provincial Roads</Typography>

          <Button
            startIcon={<AddCircle />}
            variant="outlined"
            onClick={() => dispatch({ type: "OPEN_ROAD" })}
          >
            Add New Road
          </Button>
        </Stack>
        <RoadAddEdit openRoad={openRoad} handleClose={handleClose} />
        <Box m={2}>
          <DataGridComponent
            loading={loading}
            rows={roadList}
            columns={columns}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default RoadList;
