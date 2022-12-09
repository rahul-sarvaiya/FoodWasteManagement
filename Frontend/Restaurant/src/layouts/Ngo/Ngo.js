import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Maps from "./Maps";
import { Card, Grid } from "@mui/material";
export function Ngo(props){
    return(
        <DashboardLayout >
        <DashboardNavbar iconname={props.iconname} style={{ overflowX:"hidden"}} />
        <MDBox sx={{ flexGrow: 1 }}>
        <Grid spacing={1}>
          <Grid item xs={12}>
            <Maps/>
          </Grid>
        </Grid>
      </MDBox>
      </DashboardLayout>
    );
}