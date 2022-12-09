import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {
    useMaterialUIController,
    setMiniSidenav,
    setTransparentSidenav,
    setWhiteSidenav,
    setDarkMode,
} from "context";


import Typography from '@mui/material/Typography'
export default function Content(){

    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    return (
        <MDBox>
            {
                miniSidenav 
                ?
                <MDTypography variant="h6">
                    <p style={{ margin: "30px",textAlign:"center"}}>TIE-UP FOOD DONORS ARE,</p>
                </MDTypography>
                :
                <MDTypography variant="h5">
                    <p style={{ margin: "30px",textAlign:"center"}}>TIE-UP FOOD DONORS ARE,</p>
                </MDTypography>
            }
            <Grid container spacing={2} style={{
                padding: "0px 30px 30px 30px",
            }}>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
            </Grid>
            {
                miniSidenav 
                ?
                <MDTypography variant="h6">
                    <p style={{ margin: "0px 30px 30px 30px",textAlign:"center"}}>TIE-UP NGO'S ARE,</p>
                </MDTypography>
                :
                <MDTypography variant="h5">
                    <p style={{ margin: "0px 30px 30px 30px",textAlign:"center"}}>TIE-UP NGO'S ARE,</p>
                </MDTypography>
            }
            <Grid container spacing={2} style={{
                padding: "0px 30px 30px 30px",
            }}>

                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "waste.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "left",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h6" style={{ textAlign: "left" }}>
                                    NAME : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    STATE : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CITY : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography><br />
                                    CONTECT : <MDTypography variant="button" fontWeight="regular">Rahul</MDTypography>
                                </MDTypography>
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
            </Grid>
        

        </MDBox >
    );
}

