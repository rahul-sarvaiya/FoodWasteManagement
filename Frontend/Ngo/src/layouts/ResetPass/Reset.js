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

function Reset() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate()
  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState(false);
  const [finalErr, setfinalErr] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/home')
    }
  }, [])
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  async function data(e) {
    e.preventDefault();
    if (email === "") {
      setemailErr(true);
    }else {
        let item = {email}
        let result = await fetch("http://127.0.0.1:8000/api/emailver2", {
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

        if(result.Result)
        {
            setfinalErr(true);
        }
        else
        {
            localStorage.setItem('email',email);
            swal({
              text: "We have Mailed you the Token for reset the password",
              button: "Open Your mail"
            })
            navigate('/reset');
        }

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
            Enter Your Email to Reset the Password
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <form onSubmit={data} onChange={() => { setemailErr(false);setfinalErr(false) }}>
            <MDBox mb={2}>
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                onChange={(e) => setemail(e.target.value)}
                error={emailErr}
                value={email}
                required
              />
              {
                emailErr ?
                  <p style={{ color: "red", fontSize: "12px" }}>Please enter your email correctly*</p>
                  :
                  null
              }
            </MDBox>
        
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" fullWidth>
                Reset Password
            </MDButton>
              
            </MDBox>
            
            <MDBox mt={2} mb={1} textAlign="center">
            {
                finalErr ?
                  <p style={{ color: "red", fontSize: "13px", textAlign:"center"}}>This Email doen't tie-up with our site*</p>
                  :
                  null
              }
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/signup"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </form>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}


export default Reset;
