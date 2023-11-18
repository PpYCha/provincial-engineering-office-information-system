import { Close, Send } from "@material-ui/icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import { postRoad, putRoad } from "../../../../api/road_api";
import { useValue } from "../../../../context/ContextProvider";
import CustomTextField from "../../../../components/CustomTextField";

const RoadAddEdit = ({ openRoad, handleClose }) => {
  const {
    state: {
      road: {
        id,
        provincialRoadId,
        provincialRoad,
        roadlocation,
        roadLength,
        remarks,
      },
    },
    dispatch,
  } = useValue();

  const provincialRoadIdRef = useRef();
  const provincialRoadRef = useRef();
  const roadlocationRef = useRef();
  const roadLengthRef = useRef();
  const remarksRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_ROAD",
      payload: { [e.target.id]: e.target.value },
    });
  };

  const handleSave = () => {
    console.log(provincialRoadId);
    console.log(provincialRoad);
    console.log(roadlocation);
    console.log(roadLength);
    console.log(remarks);

    if (!id) {
      const res = postRoad({
        provincialRoadId,
        provincialRoad,
        roadlocation,
        roadLength,
        remarks,
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
      const res = putRoad({
        id: id,
        provincialRoadId: provincialRoadId,
        provincialRoad: provincialRoad,
        roadlocation: roadlocation,
        roadLength: roadLength,
        remarks: remarks,
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
    <>
      <Dialog open={openRoad} onClose={handleClose} fullWidth maxWidth="lg">
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
        <DialogContent dividers>
          <DialogContentText paddingBottom={3}>
            Please fill project information in the fields :
          </DialogContentText>
          <form>
            <Grid container spacing={2} justifyContent="center">
              <Grid item md={3}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="provincialRoadId"
                  label="Road ID"
                  name="provincialRoadId"
                  onChange={handleChange}
                  value={provincialRoadId}
                  inputRef={provincialRoadRef}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="provincialRoad"
                  label="Provincial Road"
                  name="provincialRoad"
                  onChange={handleChange}
                  value={provincialRoad}
                  inputRef={provincialRoadRef}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="roadlocation"
                  label="Location"
                  name="roadlocation"
                  onChange={handleChange}
                  value={roadlocation}
                  inputRef={roadlocationRef}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="roadLength"
                  label="Length(km)"
                  name="roadLength"
                  onChange={handleChange}
                  value={roadLength}
                  inputRef={roadLengthRef}
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="remarks"
                  label="Remarks"
                  name="remarks"
                  onChange={handleChange}
                  value={remarks}
                  inputRef={remarksRef}
                />
              </Grid>
            </Grid>
          </form>
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
    </>
  );
};

export default RoadAddEdit;
