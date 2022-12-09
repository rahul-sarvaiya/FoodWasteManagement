
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Table } from "react-bootstrap";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDBadge from "components/MDBadge";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useEffect } from "react";
import { useState } from "react";
import swal from "sweetalert";
import MDAvatar from "components/MDAvatar";

import TableContainer from '@mui/material/TableContainer';
function Tables(props) {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const current = new Date();
  const [date, setDate] = useState(`${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`)
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user-info'));
    let url = "http://127.0.0.1:8000/api/getfood3/" + user.Name
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    let url2 = "http://127.0.0.1:8000/api/getwaste3/" + user.Name
    let result2 = await fetch(url2);
    result2 = await result2.json();
    setData2(result2)
  }, []);
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={process.env.PUBLIC_URL + image} name={name} size="sm"  />
      <MDTypography variant="button" fontWeight="small"  ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar iconname={props.iconname} />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDTypography>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={2}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Accepted Food History
                  </MDTypography>
                </MDBox>
                <MDBox mx={2} py={3} px={2} pt={3}>
                  <TableContainer>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th><MDTypography variant="h6">ID</MDTypography></th>
                        <th><MDTypography variant="h6">Food Items</MDTypography></th>
                        <th><MDTypography variant="h6">Date</MDTypography></th>
                        <th><MDTypography variant="h6">Amount</MDTypography></th>
                        <th><MDTypography variant="h6">Food Doner</MDTypography></th>
                        <th><MDTypography variant="h6">Food Doner Email</MDTypography></th>
                        <th><MDTypography variant="h6">Food Doner ContactNo</MDTypography></th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        (Array.isArray(data)) ?
                          <>
                            {
                            data.map((i) =>
                              <tr>
                                <td><MDTypography variant="button" fontWeight="small" >{i.t_id}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{i.t_fooditem1}
                                  {i.t_fooditem2 === null ? null : ", "}
                                  {i.t_fooditem2}
                                  {i.t_fooditem3 === null ? null : ", "}
                                  {i.t_fooditem3}
                                  {i.t_fooditem4 === null ? null : ", "}
                                  {i.t_fooditem4}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{i.t_date}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{(i.paid === null || i.paid === "") ? 'Free' : <>{i.paid} &#8377; </>}  </MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{(i.sender === null || i.sender === "") ? '-' : <><Project image={i.s_img} name={i.sender} /></>}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{(i.s_email === null || i.s_email === "") ? '-' : <>{i.s_email}</>}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{(i.s_phone === null || i.s_phone === "") ? '-' : <>{i.s_phone}</>}</MDTypography></td>
                              </tr>
                              )
                            }
                          </>

                          :
                          null
                      }
                    </tbody>

                  </Table>
                </TableContainer>
                </MDBox>
              </MDTypography>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDTypography>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={2}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Accepted Waste History
                  </MDTypography>
                </MDBox>
                <MDBox mx={2} py={3} px={2} pt={3}>
                  <TableContainer>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th><MDTypography variant="h6">ID</MDTypography></th>
                        <th><MDTypography variant="h6">Weight of waste</MDTypography></th>
                        <th><MDTypography variant="h6">Date</MDTypography></th>
                        <th><MDTypography variant="h6">Waste Doner</MDTypography></th>
                        <th><MDTypography variant="h6">Waste Doner Email</MDTypography></th>
                        <th><MDTypography variant="h6">Waste Doner ContactNo</MDTypography></th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        (Array.isArray(data2)) ?
                          <>
                            {
                            data2.map((i) =>
                              <tr>
                                <td><MDTypography variant="button" fontWeight="small" >{i.t_id}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{i.t_waste}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{i.t_date}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{(i.sender === null || i.sender === "") ? '-' : <><Project image={i.s_img} name={i.sender} /></>}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{(i.s_email === null || i.s_email === "") ? '-' : <>{i.s_email}</>}</MDTypography></td>
                                <td><MDTypography variant="button" fontWeight="small" >{(i.s_phone === null || i.s_phone === "") ? '-' : <>{i.s_phone}</>}</MDTypography></td>
                              </tr>
                              )
                            }
                          </>

                          :
                          null
                      }
                    </tbody>

                  </Table>
                </TableContainer>
                </MDBox>
              </MDTypography>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
