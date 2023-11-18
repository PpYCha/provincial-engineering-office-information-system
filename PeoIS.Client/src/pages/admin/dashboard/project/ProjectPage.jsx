import { Box, Typography } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";

import ProjectList from "./ProjectList";
import { AuthContext } from "../../../../context/AuthContext";

const Project = () => {
  return (
    <Box>
      <ProjectList />
    </Box>
  );
};

export default Project;
