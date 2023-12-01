import { Grid, TextField } from "@mui/material";
import React, { useCallback, useMemo, useState } from "react";
import { useValue } from "../../context/ContextProvider";

let timer;

const FormInput = ({ params }) => {
  const { dispatch } = useValue();

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_USER_PROFILE",
      payload: { [e.target.name]: params.inputRef.current.value },
    });
  };

  return (
    <>
      <Grid item md={params.md}>
        <TextField
          {...params}
          id={params.id}
          name={params.name}
          label={params.label}
          value={params.value}
          onChange={handleChange}
          inputRef={params.inputRef}
          type={params.type}
          fullWidth
          size="small"

          // onMouseLeave={handleChange}
        />
      </Grid>
    </>
  );
};

export default FormInput;
