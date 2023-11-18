import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ActionButton = ({
  component,
  to,
  size,
  variant,
  startIcon,
  color,
  label,
  onClick,
}) => {
  return (
    <>
      <Stack>
        <Button
          component={component}
          to={to}
          size={size}
          variant={variant}
          startIcon={startIcon}
          color={color}
          onClick={onClick}
        >
          {label}
        </Button>
      </Stack>
    </>
  );
};

export default ActionButton;
