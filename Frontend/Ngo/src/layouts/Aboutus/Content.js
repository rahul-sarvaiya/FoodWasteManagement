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
export default function Content() {

    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    return (
        <MDBox>
            <div style={{
                textAlign: "center",

            }}>
                <MDTypography variant="h3" style={{ margin: "35px 0px 10px 0px", }}>SOCIOLOGY</MDTypography>
            </div>
            <Grid container spacing={2} style={{
                padding: "0px 30px 30px 30px",
                
            }}>
                <Grid item xs={12} md={7} sm={12}>
                    <Card>

                        <div style={{
                            textAlign: "center",

                        }}>
                            <MDTypography variant="h6" fontWeight="light" >
                                <p style={{ margin: "20px 30px 15px 30px", textAlign: "justify" }}>
                                    A lot of food is thrown away at social gatherings and restaurants. In a country like India, where 40% of produce is wasted, millions of people sleep on an empty stomach. So there must be a system in place to make use of this unused food in order to feed hungry. According to research, the majority of food waste consists of leftovers. If this food is donated, it will not only feed the needy but will also reduce the burden on dumping grounds.. 
                                </p>
                                <p style={{ margin: "10px 30px 15px 30px", textAlign: "justify" }}>
                                    Americans throw away more than 25 percent of the food we prepare, about 96 billion pounds of food waste each year according to the US Department of Agriculture's Estimating and Addressing America's Food Losses PDF). See US EPA’s Basic Information about Food Waste Page.    
                                </p>
                                <p style={{ margin: "10px 30px 25px 30px", textAlign: "justify" }}>
                                    We can save a lot of food if we have a website where we simply post about food availability and people in need receive it on their own. People can also post about their unutilized waste and we collect that waste and fertilize it and grow vegis/fruits using that fertilizer and sell it on low price. 
                                </p>
                            </MDTypography>
                        </div>

                    </Card>
                </Grid>

                <Grid item xs={12} md={5} sm={12}>
                    <Card>
                        {miniSidenav
                            ? <MDBox component="img" src={process.env.PUBLIC_URL + "Architecture.png"} alt="img" style={{
                                width: "auto"
                            }} /> :
                            <MDBox component="img" src={process.env.PUBLIC_URL + "Architecture.png"} alt="img" style={{
                                marginTop:"15px",
                                marginBottom:"15px",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: "80%",
                            }} />
                        }
                    </Card>
                </Grid>
                
            </Grid>

            {
                miniSidenav
                    ?
                    <MDTypography variant="h6">
                        <p style={{ margin: "0px 30px 30px 30px", textAlign: "center" }}>MEET THE TEAM</p>
                    </MDTypography>
                    :
                    <MDTypography variant="h5">
                        <p style={{ margin: "0px 30px 30px 30px", textAlign: "center" }}>MEET THE TEAM</p>
                    </MDTypography>
            }

            <Grid container spacing={2} style={{
                padding: "0px 30px 30px 30px",
            }}>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "3rd.jpeg"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h5" style={{ textAlign: "center" }}>
                                    Rahul Sarvaiya
                                </MDTypography>
                                <MDTypography variant="caption" fontWeight="regular">Project Designer</MDTypography><br />
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "2nd.jpeg"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h5" style={{ textAlign: "center" }}>
                                    Viraj Gavas
                                </MDTypography>
                                <MDTypography variant="caption" fontWeight="regular">Project Designer</MDTypography><br />
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "1st.jpg"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h5" style={{ textAlign: "center" }}>
                                    Aditi Changan
                                </MDTypography>
                                <MDTypography variant="caption" fontWeight="regular">Project Manager</MDTypography><br />
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                    <Card>
                        <MDBox component="img" src={process.env.PUBLIC_URL + "2nd.jpg"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <MDTypography variant="button" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <MDTypography variant="h5" style={{ textAlign: "center" }}>
                                    Aayush Salvi
                                </MDTypography>
                                <MDTypography variant="caption" fontWeight="regular">Backend Designer</MDTypography><br />
                            </div>
                        </MDTypography>
                    </Card>
                </Grid>
            </Grid>
        </MDBox >
    );
}

