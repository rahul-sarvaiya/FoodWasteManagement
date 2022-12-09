import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useEffect } from "react";
import { TextField } from "@mui/material";
import swal from "sweetalert";

function Token() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()
  const [token, settoken] = useState("");
  const [tokenErr, settokenErr] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/home')
    }
    if(!localStorage.getItem('email'))
    {
        navigate('/login')
    }
  }, [])
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  async function data(e) {
    e.preventDefault();
    const email=localStorage.getItem('email');
    if (token === "") {
      settokenErr(true);
    }else {
        let item = {email,token}
        let result = await fetch("http://127.0.0.1:8000/api/tokenStore2", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(item)
        }).catch(rejected => {
          swal({
            text: "Oops!! Server is down",
            icon: "error",
            dangerMode: true,
          })
        });
        result = await result.json();
          localStorage.setItem("user-info", JSON.stringify(result[0]));
          swal({
            text: "Successfully Signup",
            icon: "success",
            button: result[0].Name+" Thankyou for joining"
          })
          localStorage.removeItem('email');
          navigate('/home');
        }
    }
  
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            <MDBox component="img" src={process.env.PUBLIC_URL + "logoname.png"} alt="Brand" width="10rem" />
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter Token to Signup
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <form onSubmit={data} onChange={() => { settokenErr(false) }}>
            <MDBox mb={2}>
              <TextField
                id="token"
                label="token"
                variant="outlined"
                type="token"
                fullWidth
                onChange={(e) => settoken(e.target.value)}
                error={tokenErr}
                value={token}
              />
              {
                tokenErr ?
                  <p style={{ color: "red", fontSize: "12px" }}>Please enter your token correctly*</p>
                  :
                  null
              }
            </MDBox>
            
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" fullWidth>
                Submit
            </MDButton>
              
            </MDBox>
            
            <MDBox mt={2} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t get the email?{" "}
                <MDTypography
                  component={Link}
                  to="/signup"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Go Back
                </MDTypography>
              </MDTypography>
            </MDBox>
          </form>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}


export default Token;
