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
import actionHelper from "../../../../context/actionHelper";
import { useValue } from "../../../../context/ContextProvider";

const TaskAddEdit = ({ openTask, handleClose }) => {
  const {
    state: { task },
    dispatch,
  } = useValue();

  const actions = actionHelper();

  const taskCodeRef = useRef();
  const taskTitleRef = useRef();
  const taskUnitRef = useRef();

  const handleChange = (e) => {
    dispatch({
      type: actions.UPDATE_TASK,
      payload: { [e.target.id]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task);
  };

  const textInput = [
    {
      type: "text",
      id: "taskCode",
      label: "Task Code",
      name: "taskCode",
      onChange: handleChange,
      inputRef: taskCodeRef,
      value: task.taskCode,
      md: 12,
    },
    {
      type: "text",
      id: "taskTitle",
      label: "Task Title",
      name: "taskTitle",
      onChange: handleChange,
      inputRef: taskTitleRef,
      value: task.taskTitle,
      md: 12,
    },
    {
      type: "text",
      id: "taskUnit",
      label: "Task Unit",
      name: "taskUnit",
      onChange: handleChange,
      inputRef: taskUnitRef,
      value: task.taskUnit,
      md: 12,
    },
  ];

  return (
    <Dialog open={openTask} onClose={handleClose} fullWidth maxWidth="lg">
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          Task Information
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
            Please fill task information in the fields :
          </DialogContentText>

          <Grid container spacing={2} justifyContent="center">
            {textInput.map((item) => (
              <Grid item md={item.md ? item.md : 4} key={item.id}>
                <TextField
                  required
                  fullWidth
                  type={item.type}
                  id={item.id}
                  label={item.label}
                  name={item.label}
                  onChange={item.onChange}
                  value={item.value}
                  inputRef={item.inputRef}
                />
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions sx={{ px: "19px" }}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            endIcon={<Send />}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default TaskAddEdit;
