import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SignIn from "./pages/admin/auth/SignIn";
import Dashboard from "./pages/Dashboard";

import UserPage from "./pages/admin/dashboard/user/UserPage";
import HomePage from "./pages/admin/dashboard/main/HomePage";
import ProjectPage from "./pages/admin/dashboard/project/ProjectPage";
import InfrastructurePage from "./pages/admin/dashboard/infrastructures/InfrastructurePage";
import MaterialPage from "./pages/admin/dashboard/material/MaterialPage";
import ProgressReportPage from "./pages/admin/dashboard/progressReport/ProgressReportPage";
import RoadPage from "./pages/admin/dashboard/road/RoadPage";
import EmployeePage from "./pages/admin/dashboard/employee/EmployeePage";
import TaskPage from "./pages/admin/dashboard/task/TaskPage";

const routes = () => {
  const RequireAuth = ({ children }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route path="home" element={<HomePage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="infrastructures" element={<InfrastructurePage />} />
        <Route path="materials" element={<MaterialPage />} />
        <Route path="progressReport" element={<ProgressReportPage />} />
        <Route path="roads" element={<RoadPage />} />
        <Route path="employee" element={<EmployeePage />} />
        <Route path="task" element={<TaskPage />} />
      </Route>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default routes;
