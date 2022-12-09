
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Table } from "react-bootstrap";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button, TableContainer } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
import { IconButton } from "@mui/material";
import MDAvatar from "components/MDAvatar";
export function Food(props) {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const current = new Date();
  const [date, setDate] = useState(`${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`)
  const [data, setData] = useState([]);
  const user=JSON.parse(localStorage.getItem('user-info'))
  async function getfood(){
    const user = JSON.parse(localStorage.getItem('user-info'));
    let url = "http://127.0.0.1:8000/api/getfood/"
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect( () => {
    getfood()
  }, []);
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={process.env.PUBLIC_URL + image} name={name} size="sm"  />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );
  async function acceptdata(id){
    const name=user.Name;
    const email=user.email;
    const phone=user.phone;
    const action="true";
    const img=user.image;
    let item={name,email,phone,action,img,id}
    let result = await fetch("http://127.0.0.1:8000/api/acceptfood",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    }).catch(rejected=>{
      swal({
        text: "Oops!! Server is down",
        icon: "error",
        dangerMode: true,
      })
    });
    result= await result.json();
    if(result.Result==="updated")
    {
    swal({
      icon:"success",
      text: "Contact to Recipient for pickup the food",
      button: "okay"
    });
    getfood()

  }
  
    
  }
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
                    Available Food
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
                        <th><MDTypography variant="h6">Food Doner Name</MDTypography></th>
                        <th><MDTypography variant="h6">Food Doner Email</MDTypography></th>
                        <th><MDTypography variant="h6">Food Doner ContactNo</MDTypography></th>
                        <th><MDTypography variant="h6">Status</MDTypography></th>
                        <th><MDTypography variant="h6">Action</MDTypography></th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        (Array.isArray(data)) ?
                          <>
                            {
                              data.map((i) =>
                                <tr>
                                  {
                                    !(i.t_date != date && i.action === "false")
                                      ?
                                      (i.action != "true") ?
                                        <>
                                          <td><MDTypography variant="button" fontWeight="small">{i.t_id}</MDTypography></td>
                                          <td><MDTypography variant="button" fontWeight="small">{i.t_fooditem1}
                                            {i.t_fooditem2 === null ? null : ", "}
                                            {i.t_fooditem2}
                                            {i.t_fooditem3 === null ? null : ", "}
                                            {i.t_fooditem3}
                                            {i.t_fooditem4 === null ? null : ", "}
                                            {i.t_fooditem4}</MDTypography></td>
                                          <td><MDTypography variant="button" fontWeight="small">{i.t_date}</MDTypography></td>
                                          <td><MDTypography variant="button" fontWeight="small">{(i.paid === null || i.paid === "") ? 'Free' : <>{i.paid} &#8377; </>}  </MDTypography></td>
                                          <td><MDTypography variant="button" fontWeight="small">{(i.sender === null || i.sender === "") ? '-' : <><Project image={i.s_img} name={i.sender} /></>}</MDTypography></td>
                                          <td><MDTypography variant="button" fontWeight="small">{(i.s_email === null || i.s_email === "") ? '-' : <>{i.s_email}</>}</MDTypography></td>
                                          <td><MDTypography variant="button" fontWeight="small">{(i.s_phone === null || i.s_phone === "") ? '-' : <>{i.s_phone}</>}</MDTypography></td>
                                          <td><MDTypography variant="button" fontWeight="small">
                                            {
                                              (i.t_date != date && i.action === "false") ?
                                                <>
                                                  <MDBadge badgeContent="Rejected" color="error" variant="gradient" size="sm" />
                                                </>
                                                :
                                                i.action === "false"
                                                  ?

                                                  <>
                                                    <MDBadge badgeContent="Ongoing" color="warning" variant="gradient" size="sm" />
                                                  </>
                                                  : i.action === "true" ?
                                                    <>
                                                      <MDBadge badgeContent="Accepted" color="success" variant="gradient" size="sm" />
                                                    </>
                                                    :
                                                    null

                                            }
                                          </MDTypography></td>
                                          <td>
                                            <IconButton onClick={()=>{acceptdata(i.t_id)}} style={{backgroundColor:"#1A73E8", borderRadius:"10px"}} color="white" size="small">
                                              <AddShoppingCartIcon />
                                            </IconButton>
                                          </td>
                                        </>
                                        :
                                        null
                                      :
                                      null
                                  }
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

