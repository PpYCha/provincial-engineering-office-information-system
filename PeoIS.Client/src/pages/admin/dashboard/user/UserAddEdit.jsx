import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  IconButton,
} from "@mui/material";
import React, { useRef, useMemo, useState } from "react";
import Swal from "sweetalert2";

import { postUser, putUser } from "../../../../api/user_api";
import { useValue } from "../../../../context/ContextProvider";
import FormInput from "../../../../components/form/FormInput";

import { DialogTitle } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { Send } from "@mui/icons-material";

import AutocompleteComponent from "../../../../components/form/AutocompleteComponent";

const UserNew = ({ openUser, handleClose, fetchAPI }) => {
  const {
    state: {
      userProfile: {
        id,
        name,
        email,
        password,
        username,
        phone,
        address,
        gender,
        office,
        status,
        role,
      },
    },
  } = useValue();

  const [loding, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const genderRef = useRef();
  const officeRef = useRef();
  const statusRef = useRef();
  const roleRef = useRef();

  const handleSave = async (e) => {
    e.preventDefault();

    setLoading(true);

    //update
    if (id) {
      const res = await putUser({
        userId: id,
        name: name,
        email: email,
        password: password,
        contactNumber: phone,
        address: address,
        gender: gender,
        office: office,
        status: status,
        role: role,
      });

      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Succesfully saved!",
          showConfirmButton: false,
          timer: 2000,
        });
        handleClose();
      }
      if (res.data.status === "failed") {
        Swal.fire({
          title: res.data.message,
          icon: "warning",
          showConfirmButton: true,
        });
      }
    }
    //add
    if (!id) {
      const res = await postUser({
        name: name,
        email: email,
        password: password,
        username: username,
        contactNumber: phone,
        address: address,
        gender: gender,
        office: office,
        status: status,
        role: role,
      });

      if (res.data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Succesfully saved!",
          showConfirmButton: false,
          timer: 2000,
        });
        handleClose();
      }
      if (res.data.status === "failed") {
        Swal.fire({
          title: res.data.message,
          icon: "warning",
          showConfirmButton: true,
        });
      }
    }

    fetchAPI();

    setLoading(false);
  };

  const inputs = useMemo(() => [
    {
      id: "name",
      name: "name",
      label: "Name",
      value: name,
      type: "text",
      inputRef: nameRef,
      required: true,
      md: 6,
    },
    {
      id: "email",
      name: "email",
      label: "Email Address",
      value: email,
      type: "email",
      inputRef: emailRef,
      required: true,
      md: 6,
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      value: password,
      type: "password",
      inputRef: passwordRef,
      required: true,
      md: 6,
    },

    {
      id: "address",
      name: "address",
      label: "Address",
      value: address,
      type: "text",
      inputRef: addressRef,
      required: true,
      md: 6,
    },
    {
      id: "phone",
      name: "phone",
      label: "Phone No.",
      value: phone,
      type: "text",
      inputRef: phoneRef,

      md: 3,
    },
  ]);

  return (
    <>
      <Dialog open={openUser} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>
          User Information
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
        <form component="form" onSubmit={handleSave}>
          <DialogContent dividers>
            <DialogContentText paddingBottom={3}>
              Please fill user information in the fields :
            </DialogContentText>
            <Grid container spacing={2} justifyContent="center">
              {inputs.map((params) => {
                return <FormInput key={params.id} {...{ params }} />;
              })}
              <AutocompleteComponent
                options={roleBox}
                label="Role"
                id="role"
                inputRef={roleRef}
                value1={role}
                required={true}
              />
              <AutocompleteComponent
                options={sexBox}
                label="Sex"
                id="gender"
                inputRef={genderRef}
                value1={gender}
                required={true}
              />
              <AutocompleteComponent
                options={officeDepartmentBox}
                label="Office"
                id="office"
                size={5}
                inputRef={officeRef}
                value1={office}
                required={true}
              />
              <AutocompleteComponent
                options={statusBox}
                label="Status"
                id="status"
                inputRef={statusRef}
                value1={status}
                required={true}
              />
            </Grid>
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
    </>
  );
};

export default UserNew;

const roleBox = [{ label: "Admin" }, { label: "Endcoder" }];
const sexBox = [{ label: "Male" }, { label: "Female" }];
const officeDepartmentBox = [
  {
    label: "Provincial Engineering Office",
    officeAbbrv: "PEO",
  },
  {
    label: "Provincial Planning Development Office",
    officeAbbrv: "PPDO",
  },
];
const statusBox = [{ label: "Active" }, { label: "Banned" }];
