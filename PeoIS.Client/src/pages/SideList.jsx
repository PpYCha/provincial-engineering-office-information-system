import React, { useContext, useMemo, useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import {
  AssignmentInd,
  Badge,
  BarChart,
  ChevronLeft,
  Construction,
  CorporateFare,
  Dashboard,
  ExpandLess,
  ExpandMore,
  Groups,
  Hardware,
  Home,
  HowToReg,
  Inbox,
  Logout,
  Mail,
  People,
  Psychology,
  Task,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  styled,
  Tooltip,
  Avatar,
  Typography,
  Collapse,
  Paper,
} from "@mui/material";
import {
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomePage from "./admin/dashboard/main/HomePage";

import ProjectPage from "./admin/dashboard/project/ProjectPage";
import Userlist from "./admin/dashboard/user/Userlist";
import { AuthContext } from "../context/AuthContext";
import RouteIcon from "@mui/icons-material/Route";
import RoadPage from "./admin/dashboard/road/RoadPage";
import ProgressReportList from "./admin/dashboard/progressReport/ProgressReportList";
import ProgressReportPage from "./admin/dashboard/progressReport/ProgressReportPage";
import MaterialPage from "./admin/dashboard/material/MaterialPage";
import UserPage from "./admin/dashboard/user/UserPage";
import InfrastructurePage from "./admin/dashboard/infrastructures/InfrastructurePage";
// import "../app.css";
import TaskPage from "./admin/dashboard/task/TaskPage";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideList = ({ open, setOpen }) => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const [selectedLink, setSelectedLink] = useState("");
  const [expand, setExpand] = useState(false);
  const location = useLocation();

  const list = useMemo(
    () => [
      {
        id: 1,
        label: "Dashboard",
        to: "/dashboard/home",
        icon: <Dashboard />,
        component: <HomePage />,
      },

      {
        id: 2,
        label: "User Management",
        to: "users",
        icon: <Groups />,
        component: <Userlist />,
      },
      {
        id: 3,
        label: "Projects",
        to: "projects",
        icon: <Psychology />,
        component: <ProjectPage />,
      },
      {
        id: 4,
        label: "Infrastructures",
        to: "infrastructures",
        icon: <Construction />,
        component: <InfrastructurePage />,
      },

      {
        id: 5,
        label: "Material",
        to: "materials",
        icon: <Hardware />,
        component: <MaterialPage />,
      },
      {
        id: 6,
        label: "Progress Report",
        to: "progressReport",
        icon: <CorporateFare />,
        component: <ProgressReportPage />,
      },
      {
        id: 5,
        label: "Road",
        to: "roads",
        icon: <RouteIcon />,
        component: <RoadPage />,
      },
      {
        id: 5,
        label: "Employee",
        to: "employee",
        icon: <Badge />,
        component: <RoadPage />,
      },
      {
        id: 5,
        label: "Task",
        to: "task",
        icon: <Task />,
        component: <TaskPage />,
      },
    ],
    []
  );

  const navigate = useNavigate();

  const handleLinkClick = (to) => {
    setSelectedLink(to);
    navigate(to);
  };

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List component="nav">
          {list.map((item) => (
            <ListItemButton
              key={item.label}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                borderRadius: 3,
                marginLeft: 1,
                marginRight: 1,

                "&.Mui-selected": {
                  backgroundColor: "#ff6a00",
                  fontWeight: "bold",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#ff6a00", // Set the desired hover color for the selected ListItem
                  },
                },
                "&:hover": {
                  backgroundColor: "#ff7b00",
                  fontWeight: "bold",
                  color: "white",
                },
                "&:hover > .MuiListItemIcon-root": {
                  color: "white",
                },
              }}
              selected={location.pathname.includes(item.to)}
              to={item.to}
              component={NavLink}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(location.pathname.includes(item.to) && {
                    color: "white",
                  }),
                  transform: "scale(0.8)",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  opacity: open ? 1 : 0,
                }}
              />
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <Box sx={{ mx: "auto", mt: 3, mb: 1 }}>
          <Tooltip title={currentUser.name}>
            <Avatar {...(open && { sx: { width: 100, height: 100 } })}>
              {currentUser.name.charAt(0)}
            </Avatar>
          </Tooltip>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          {open && <Typography>{currentUser.name}</Typography>}
          <Typography variant="body2">
            {currentUser.office
              .split(" ")
              .map((word) => word[0])
              .join("")}
          </Typography>
          {open && <Typography variant="body2">{currentUser.email}</Typography>}
          <Tooltip title="Logout" sx={{ mt: 1 }}>
            <IconButton
              onClick={() => {
                navigate("/");
                dispatch({ type: "LOGOUT" });
              }}
            >
              <Logout />
            </IconButton>
          </Tooltip>
        </Box>
      </Drawer>
      <Paper component="main" sx={{ flexGrow: 1, m: 1, mt: 10 }} elevation={3}>
        <Outlet />
      </Paper>
    </>
  );
};

export default SideList;
