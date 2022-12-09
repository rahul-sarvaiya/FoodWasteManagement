import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Content from "./Content";
import { useEffect } from "react";
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setDarkMode,
} from "context";
export function Aboutus(props){
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  return(
      <DashboardLayout>
      <DashboardNavbar iconname={props.iconname} />
      <MDBox sx={{ flexGrow: 1 }}>
        <Card >
          <MDTypography>
          <Content/>
          </MDTypography>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}