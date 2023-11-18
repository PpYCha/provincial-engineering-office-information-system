import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Tooltip,
  Badge,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { Brightness4, Brightness7, Home, Menu } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideList from "./SideList";
import CircleNotifications from "@mui/icons-material/CircleNotifications";
import { AccountCircle, Settings } from "@material-ui/icons";
import { useValue } from "../context/ContextProvider";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

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
        is_active,
        role,
      },
    },
    dispatch,
  } = useValue();

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? "dark" : "light",
          type: "light",

          primary: {
            main: "#e65100",
          },
          secondary: {
            main: "#e85611",
          },
        },
      }),
    [dark]
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleEdit = () => {};

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              PEO Information System
            </Typography>
            <IconButton size="medium" color="inherit" onClick={handleEdit}>
              <AccountCircle />
            </IconButton>
            <IconButton size="medium" color="inherit">
              <Settings />
            </IconButton>
          </Toolbar>
        </AppBar>
        <SideList {...{ open, setOpen }} />
      </Box>
    </ThemeProvider>
  );
}
