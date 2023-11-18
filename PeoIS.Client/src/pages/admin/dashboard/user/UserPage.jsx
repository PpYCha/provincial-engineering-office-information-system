import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Userlist from "./Userlist";

const User = () => {
  useEffect(() => {
    console.log("user ");
  }, []);

  return (
    <Box flex={1}>
      <Userlist />
    </Box>
  );
};

export default User;
