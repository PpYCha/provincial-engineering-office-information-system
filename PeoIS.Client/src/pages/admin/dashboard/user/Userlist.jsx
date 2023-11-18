import BorderColorIcon from "@mui/icons-material/BorderColor";
import { DeleteOutline } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { deleteUser, fetchUsers } from "../../../../api/user_api";
import ActionButton from "../../../../components/DataGrid/ActionButton";
import { useValue } from "../../../../context/ContextProvider";
import UserAddEdit from "./UserAddEdit";
import { AddCircle } from "@material-ui/icons";
import Swal from "sweetalert2";
import MaterialReactTable from "material-react-table";

import { usersColumns } from "../../../../data/usersColumns";
import actionHelper from "../../../../context/actionHelper";

const Userlist = () => {
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    state: { openUser },
    dispatch,
  } = useValue();

  const actions = actionHelper();

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    setLoading(true);

    setListUser(await fetchUsers());
    setLoading(false);
  };

  const handleClose = () => {
    dispatch({ type: actions.CLOSE_USER });
    dispatch({ type: actions.RESET_USER_PROFILE });
  };

  const handleEdit = (params) => {
    const {
      id,
      name,
      email,
      password,
      username,
      contactNumber,
      address,
      gender,
      office,
      status,
      role,
    } = params.original;

    // console.log(params.original);
    dispatch({
      type: "UPDATE_USER_PROFILE",
      payload: {
        id,
        name,
        email,
        password,
        username,
        phone: contactNumber,
        address,
        gender,
        office,
        status,
        role,
      },
    });

    dispatch({
      type: "OPEN_USER",
    });
  };

  const handleDelete = async (row) => {
    Swal.fire({
      title: `Do you want to delete "${row.original.name}"?`,
      showDenyButton: true,

      confirmButtonText: "Yes!",
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteUser(row.original.id);
        fetchAPI();
        Swal.fire({
          icon: "success",
          title: "Succesfully Deleted!",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          title: "Changes are not saved!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  return (
    <Box display="flex" flexDirection="column">
      <Stack direction="row" spacing={2} m={3} justifyContent="space-between">
        <Typography variant="h5">User List </Typography>
        <Button
          startIcon={<AddCircle />}
          variant="outlined"
          onClick={() => dispatch({ type: actions.OPEN_USER })}
        >
          Add New User
        </Button>
      </Stack>
      <UserAddEdit
        openUser={openUser}
        fetchAPI={fetchAPI}
        handleClose={handleClose}
      />

      <Box m={2}>
        <MaterialReactTable
          columns={usersColumns}
          data={listUser}
          enableEditing
          positionActionsColumn="last"
          enableDensityToggle={false}
          initialState={{
            columnVisibility: {
              id: false,
              address: false,
              gender: false,
            },
          }}
          muiTableProps={{
            sx: {
              tableLayout: "fixed",
            },
          }}
          muiTableBodyProps={{
            sx: {
              //stripe the rows, make odd rows a darker color
              "& tr:nth-of-type(odd)": {
                backgroundColor: "#f5f5f5",
              },
            },
          }}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 210,
            },
          }}
          renderRowActions={({ row, table }) => (
            <Stack direction="row" spacing={2}>
              <ActionButton
                size="small"
                variant="contained"
                startIcon={<BorderColorIcon />}
                color="success"
                label="Edit"
                onClick={() => handleEdit(row)}
              />
              <ActionButton
                size="small"
                variant="contained"
                startIcon={<DeleteOutline />}
                onClick={() => handleDelete(row)}
                color="error"
                label="Delete"
              />
            </Stack>
          )}
        />
      </Box>
    </Box>
  );
};

export default Userlist;
