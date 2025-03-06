import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import { navItems } from "../utils/utils";

function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const path = location.pathname;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ececec",
          color: "#393939",
        }}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,

              display: { xs: "none", sm: "block" },
            }}
          >
            CRM
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", gap: "32px" },
            }}
          >
            {navItems?.map((item) => (
              <Link
                style={{
                  fontWeight: path === item.path && "500",
                  color: path === item.path && "#1565c0",
                }}
                key={item.title}
                to={item.path}
              >
                {item.title}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <NavDrawer
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          props={props}
        />
      </nav>
    </Box>
  );
}
export default DrawerAppBar;
