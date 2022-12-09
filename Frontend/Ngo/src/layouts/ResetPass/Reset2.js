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

function Reset2() {
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()
    const [pass, setpass] = useState("");
    const [token, settoken] = useState("");
    const [passErr, setpassErr] = useState(false);
    const [tokenErr, settokenErr] = useState(false);
    const [finalErr, setfinalErr] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate('/home')
        }
        if (!localStorage.getItem('email')) {
            navigate('/login')
        }
    }, []);
    const handleSetRememberMe = () => setRememberMe(!rememberMe);
    async function data(e) {
        e.preventDefault();
        if (token === "" && pass === "") {
            settokenErr(true);
            setpassErr(true);
        }
        else if (token === "") {
            settokenErr(true);
        }
        else if (pass === "") {
            setpassErr(true);
        } else {
            let item = { token, pass }
            let result = await fetch("http://127.0.0.1:8000/api/updatepass2", {
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
            if (result.Result) {
                setfinalErr(true);
            }
            else {
                localStorage.removeItem("email");
                swal({
                    text: "Password has been changed",
                    icon: "success",
                    button: "Login"
                })
                navigate('/login');
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
                        Enter The Token and New password
                    </MDTypography>
                </MDBox>

                <MDBox pt={4} pb={3} px={3}>
                    <form onSubmit={data} onChange={() => { settokenErr(false); setpassErr(false); setfinalErr(false) }}>
                        <MDBox mb={2}>
                            <TextField
                                id="token"
                                label="Token"
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
                        <MDBox mb={2}>
                            <TextField
                                id="pass"
                                label="New Password"
                                variant="outlined"
                                type="pass"
                                fullWidth
                                onChange={(e) => setpass(e.target.value)}
                                error={passErr}
                                value={pass}
                            />
                            {
                                passErr ?
                                    <p style={{ color: "red", fontSize: "12px" }}>Please enter your New password correctly*</p>
                                    :
                                    null
                            }
                        </MDBox>

                        <MDBox mt={4} mb={1}>
                            <MDButton variant="gradient" color="info" type="submit" fullWidth>
                                Reset Password
                            </MDButton>
                            {
                                finalErr ?
                                    <p style={{ marginTop:"18px",color: "red", fontSize: "13px", textAlign: "center" }}>Please Enter Correct Token* / Your new password is same as your old password*</p>
                                    :
                                    null
                            }
                        </MDBox>
                    </form>
                </MDBox>
            </Card>
        </BasicLayout>
    );
}

export default Reset2;
