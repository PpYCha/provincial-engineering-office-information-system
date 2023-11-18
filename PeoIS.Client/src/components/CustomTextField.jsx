import { Grid, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  id,
  label,
  name,
  handleChange,
  // value,
  inputRef,

  ...props
}) => {
  return (
    <Grid item md={props.md ? props.md : 3}>
      <TextField
        sx={{ marginBottom: 1 }}
        id={id}
        label={label}
        name={name}
        onChange={handleChange}
        // value={value}
        {...props}
        inputRef={inputRef}
        fullWidth
        size="small"
      />
    </Grid>
  );
};

export default CustomTextField;
