import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card"
import MDTypography from "components/MDTypography";
export function Activities(props){
    return(
        <DashboardLayout>
         <DashboardNavbar iconname={props.iconname} />
        <MDBox sx={{ flexGrow: 1 }}>
        <Grid spacing={1}>
          <Grid item xs={12}>
            <Card>
              
            </Card>
          </Grid>
        </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    )
}