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
export default function Content2() {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    return (
        <Grid>
            <Grid container spacing={2} style={{
                padding: "0px 20px 20px 20px",
            }}>
                <Grid item xs={12} md={4} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "donate.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6">OUR BUSINESS</MDTypography>
                                <p style={{textAlign:"justify",padding:"10px 0px 0px 0px"}}>
                                Food Donation Connection provides an alternative to discarding surplus wholesome food by linking food service donors with surplus food to local hunger relief agencies. We do this by creating and maintaining an efficient communication and reporting network that links available sources of food to those in need through these existing charitable organizations. The LAX Harvest Food Donation Program is a shining example of how the Los Angeles International Airport community came together to make a tangible, positive difference in the lives of those around them.
                                </p>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "happy.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6">THE NEED</MDTypography>
                                <p style={{textAlign:"justify",padding:"10px 0px 0px 0px"}}>
                                FDC addressed the need for hunger relief in a Statement for the Record to the House Ways and Means Subcommittee on Oversight Joint Hearing on Food Banks and Front-Line Charities: Unprecedented Demand and Unmet Need (November 19, 2009). Some of the biggest restaurant chains in California and the nation are stepping up their food recovery efforts. But hunger relief agencies and food recovery groups want to see more of the 90,000 eateries stop discarding and start donating. Hunger in the Golden State website launched by University of Southern California / Annenberg School for Communication and Journalism.
                                </p>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6">THE WATSE</MDTypography>
                                <p style={{textAlign:"justify",padding:"10px 0px 0px 0px"}}>
                                Americans throw away more than 25 percent of the food we prepare, about 96 billion pounds of food waste each year according to the US Department of Agriculture's Estimating and Addressing America's Food Losses PDF). See US EPA’s Basic Information about Food Waste Page.
                                </p>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>

            </Grid>
        </Grid>

    )
}
