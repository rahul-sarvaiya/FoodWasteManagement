import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import swal from 'sweetalert';
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import { useState } from "react";
import { useEffect } from "react";
function Cover() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
      navigate('/home')
    }
  },[])
  async function data(e){
    
    e.preventDefault();

    if(name==="")
    {
      setnameErr(true);
    }else if(pass==="")
    {
      setpassErr(true);
    }else if(email==="")
    {
      setemailErr(true);
    }else if(add==="")
    {
      setaddErr(true);
    }
    else if(state==="")
    {
      setstateErr(true);
    }else if(city==="")
    {
      setcityErr(true);
    }
    else if(pin==="")
    {
      setpinErr(true);
    }
    else if(contact==="")
    {
      setcontactErr(true);
    }
    else if(contact.length<10 || contact.length>10)
    {
      setcontactErr(true);
    }else if(img==="")
    {
      setimgErr(true);
    }
    else{
    const img2 = img.replace(/^.*[\\/]/, '');
    let item={name,pass,add,state,city,pin,contact,email,img2,lat,lon}
    let result = await fetch("http://127.0.0.1:8000/api/register2",{
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
    if(result.Result)
    {
    swal({
      text: "For Security Purpose enter any digits from 100-1000 here",
      button: "okay?"
    });
    localStorage.setItem("email",email);
    navigate('/token');
  }
    
  }
}
  
  const [name,setname]=useState("");
  const [pass,setpass]=useState("");
  const [email,setemail]=useState("");
  const [add,setadd]=useState("");
  const [state,setstate]=useState("");
  const [city,setcity]=useState("");
  const [pin,setpin]=useState("");
  const [contact,setcontact]=useState("");
  const [lat,setlat]=useState("");
  const [lon,setlon]=useState("");
  const [img,setimg]=useState("");
  const [print,setPrint]=useState(false);

  const [nameErr,setnameErr]=useState(false);
  const [passErr,setpassErr]=useState(false);
  const [emailErr,setemailErr]=useState(false);
  const [addErr,setaddErr]=useState(false);
  const [stateErr,setstateErr]=useState(false);
  const [cityErr,setcityErr]=useState(false);
  const [pinErr,setpinErr]=useState(false);
  const [contactErr,setcontactErr]=useState(false);
  const [latErr,setlatErr]=useState(false);
  const [lonErr,setlonErr]=useState(false);
  const [imgErr,setimgErr]=useState(false);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={0}>
          <MDBox component="img"  src={process.env.PUBLIC_URL + "logoname.png"} alt="Brand" width="10rem" />
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your or your organizations basic details to donate food
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <form onSubmit={data} onChange={()=>{setimgErr(false);setnameErr(false);setemailErr(false);setpassErr(false);setemailErr(false);setaddErr(false);setcityErr(false);setstateErr(false);setpinErr(false)}}>
          <MDBox mb={2}  style={{display:"flex",}}>
          <TextField
                    id="name"
                    label="Enter your or your organization Name"
                    variant="outlined"
                    fullWidth
                    style={{marginRight:"5px"}}
                    onChange={(e)=>setname(e.target.value)}
                    error={nameErr}
                    value={name}
                    
                />
                <TextField
                    type="password"
                    id="pass"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    style={{marginLeft:"5px"}}
                    onChange={(e)=>setpass(e.target.value)}
                    error={passErr}
                    value={pass}
                    
                />
                </MDBox>
                <MDBox mb={2}  style={{display:"flex",}}>
          <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    onChange={(e)=>setemail(e.target.value)}
                    error={emailErr}
                    style={{marginRight:"5px"}}
                    value={email}
                    required
                />
                <TextField
                    id="add"
                    label="Enter your or your organization address"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setadd(e.target.value)}
                    error={addErr}
                    style={{marginLeft:"5px"}}
                    value={add}
                    
                />
                </MDBox>
                <MDBox mb={2}  style={{display:"flex",}}>
          <TextField
                    id="state"
                    label="State"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=>setstate(e.target.value)}
                    error={stateErr}
                    style={{marginRight:"5px"}}
                    value={state}
                    
                />
                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    fullWidth
                    style={{marginLeft:"5px"}}
                    onChange={(e)=>setcity(e.target.value)}
                    error={cityErr}
                    
                    value={city}
                />
                </MDBox>
                <MDBox mb={2}  style={{display:"flex",}}>
          <TextField
                    id="pin"
                    label="Pincode"
                    variant="outlined"
                    fullWidth
                    style={{marginRight:"5px"}}
                    onChange={(e)=>setpin(e.target.value)}
                    error={pinErr}
                    
                    value={pin}
                />
                <TextField
                    id="phone"
                    label="Contact NO."
                    variant="outlined"
                    
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                    fullWidth
                    style={{marginLeft:"5px"}}
                    onChange={(e)=>setcontact(e.target.value)}
                    error={contactErr}
                    value={contact}
                />
                </MDBox>
                <MDBox mb={2}  style={{display:"flex",}}>
          <TextField
                    id="lat"
                    label="Enter Latitude of your workstation"
                    variant="outlined"
                    fullWidth
                    style={{marginRight:"5px"}}
                    onChange={(e)=>setlat(e.target.value)}
                    error={latErr}
                    value={lat}
                />
                <TextField
                    id="lon"
                    label="Enter Longitude  of your workstation"
                    variant="outlined"
                    fullWidth
                    style={{marginLeft:"5px"}}
                    onChange={(e)=>setlon(e.target.value)}
                    error={lonErr}
                    value={lon}
                />
                </MDBox>

                <MDBox mb={2}  style={{display:"flex",}}>
                <MDButton variant="gradient" color="info">
                  <label htmlFor="img" >upload your organization's Image</label>
                  </MDButton>
                  {imgErr? <p style={{margin:"10px",fontSize:"15px",color:"red"}}>please enter image*</p>:<p style={{margin:"10px",fontSize:"15px"}}>{img}</p>}
          <TextField
                    type="file"
                    id="img"
                    variant="outlined"
                    fullWidth
                    style={{marginRight:"5px",display:"none"}}
                    onChange={(e)=>setimg(e.target.value)}
                    error={imgErr}
                />
                 
                </MDBox>
                
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/login"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </form>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Cover;
