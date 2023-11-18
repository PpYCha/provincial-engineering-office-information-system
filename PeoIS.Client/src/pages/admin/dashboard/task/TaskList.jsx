import { AddCircle } from "@material-ui/icons";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import actionHelper from "../../../../context/actionHelper";
import { useValue } from "../../../../context/ContextProvider";
import TaskAddEdit from "./TaskAddEdit";
import { MaterialReactTable } from "material-react-table";

const TaskList = () => {
  const {
    state: { openTask, task },
    dispatch,
  } = useValue();
  const actions = actionHelper();

  const handleClose = () => {
    dispatch({ type: actions.CLOSE_TASK });
    dispatch({ type: actions.RESET_TASK });
    // fetchAPI();
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        size: 150,
      },
      {
        accessorKey: "taskCode",
        header: "Task Code",
        size: 150,
      },
      {
        accessorKey: "taskTitle",
        header: "Task Title",
        size: 150,
      },
      {
        accessorKey: "taskUnit",
        header: "Task Unit",
        size: 150,
      },
    ],
    []
  );

  const sampleData = [
    {
      id: 1,
      taskCode: "B.5",
      taskTitle: "Project Billboard & Sign Board",
      taskUnit: "",
    },
  ];

  return (
    <Box display="flex" flexDirection="column">
      <Paper elevation={24}>
        <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
          <Typography variant="h5">List of Task Details</Typography>

          <Button
            startIcon={<AddCircle />}
            variant="outlined"
            onClick={() => dispatch({ type: actions.OPEN_TASK })}
          >
            Add New Task
          </Button>
        </Stack>
        <TaskAddEdit openTask={openTask} handleClose={handleClose} />
        <Box m={2}>
          <MaterialReactTable columns={columns} data={sampleData} />
        </Box>
      </Paper>
    </Box>
  );
};

export default TaskList;
