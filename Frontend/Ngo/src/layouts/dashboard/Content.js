// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/system/box";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Container } from "@mui/system";
import { whitespace } from "stylis";
import { ListItem, ListItemText } from "@mui/material";
import {
    useMaterialUIController,
    setMiniSidenav,
    setTransparentSidenav,
    setWhiteSidenav,
    setDarkMode,
} from "context";
import Content2 from "./Content2";
export default function Content() {

    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    return (

        <MDBox sx={{ flexGrow: 1 }}>
            <Grid spacing={1}>
                <Grid item xs={12}>
                    <Card>
                        {miniSidenav
                            ? <MDBox component="img" src={process.env.PUBLIC_URL + "donationimg.png"} alt="img" style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "75%",
                            }}/> :
                            <MDBox component="img" src={process.env.PUBLIC_URL + "donationimg.png"} alt="img" style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "46%",
                            }} />}
                        <MDBox sx={({ palette: { light }, typography: { size } }) => ({ fontSize: size.sm })}>
                            <MDTypography variant="" fontWeight="regular">
                                <div style={{
                                    textAlign: "center",
                                    margin: "0px 20px 20px 20px",
                                }}>
                                    <MDTypography variant="h6">OUR VISION</MDTypography>
                                    <p>
                                        When they had all had enough to eat, God said to his disciples, "Gather the pieces that are left over. Let nothing be wasted."
                                    </p>
                                </div>
                                <div style={{
                                    margin: "20px",
                                    textAlign: "center"
                                }}>
                                    <MDTypography variant="h6" style={{ textAlign: "center" }}>OUR MISSION</MDTypography>
                                    <ul style={{
                                        margin: "0px 20px 20px 20px",
                                        display: "inline-block",
                                        textAlign: "left",
                                    }}>
                                        <li style={{textAlign:"justify"}}>
                                            Expand our network linking available sources of surplus food to those in need through existing charitable organizations.
                                        </li>
                                        <li style={{textAlign:"justify"}}>
                                            Grow our company in a manner that provides a level of profitability necessary to carry out our vision.
                                        </li>
                                    </ul>
                                </div>
                            </MDTypography>
                            <Content2/>
                        </MDBox>
                    </Card>
                </Grid>
            </Grid>
        </MDBox>

    );
}