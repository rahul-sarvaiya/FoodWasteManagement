

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
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Content from "./Content";
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setDarkMode,
} from "context";

export function DonateWaste(props) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [dataa,setdata]=useState(true);
  const getdata=(final)=>{
    setdata(final)
    setTimeout(() => {
      setdata(true)
    },9100);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar iconname={props.iconname} />
      <MDBox sx={{ flexGrow: 1 }}>
        <Grid spacing={1}>
          <Grid item xs={12}>
            <Card>
              {
                miniSidenav ?
                  <MDBox style={{ textAlign: "center", margin: "35px 20px 20px 20px", }}
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}>
                      {
                        dataa
                        ?
                      <Content onSubmit={getdata}/>:
                      <MDBox component="img" src={process.env.PUBLIC_URL + "sended.gif"} alt="img" style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                    }}/>
                      }   
                  </MDBox> :
                  <MDBox style={{ textAlign: "center", margin: "40px 20px 20px 20px",}}
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '60%' },
                    }}>
                      {
                        dataa
                        ?
                      <Content onSubmit={getdata}/>:
                      <img src={process.env.PUBLIC_URL + "sended.gif"} alt="img" style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "60%",
                    }}/>
                      } 
                  </MDBox>
              }
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  )
}