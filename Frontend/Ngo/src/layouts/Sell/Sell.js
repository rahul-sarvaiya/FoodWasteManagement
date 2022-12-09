import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';

import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setDarkMode,
} from "context";
export function Sell(props){

  
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  return(
      <DashboardLayout>
      <DashboardNavbar iconname={props.iconname} />
      <MDBox sx={{ flexGrow: 1 }}>
        <Card >
          <MDTypography>
          <Stack spacing={2} style={{textAlign:"center"}}>
          <MDBox component="img" src={process.env.PUBLIC_URL + "working.gif"} alt="img" style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "55%",
                    }}/>
          </Stack>
          </MDTypography>
        </Card>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}