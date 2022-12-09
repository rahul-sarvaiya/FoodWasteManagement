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
import Content from "./Content"

function Dashboard(props) {

  return (
    <DashboardLayout>
      <DashboardNavbar iconname={props.iconname} />
      <Content/>

      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
