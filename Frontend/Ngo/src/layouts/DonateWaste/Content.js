

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
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useState } from "react";
import { getValue, Stack } from "@mui/system";
import { Container } from "@mui/system";
import { whitespace } from "stylis";
import { ListItem, ListItemText } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {
    useMaterialUIController,
    setMiniSidenav,
    setTransparentSidenav,
    setWhiteSidenav,
    setDarkMode,
} from "context";
import InputAdornment from "@mui/material/InputAdornment";
import { Label, Merge } from "@mui/icons-material";
import { add } from "date-fns";
import { Link } from "react-router-dom";

export default function Content(props) {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    const current = new Date();
    const [wasteitem,setwasteitem]=useState("");
    const [wasteitemErr,setwasteitemErr]=useState(false);
    const [final,setfinal]=useState(false);
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
     
    function GetFood(e){
        e.preventDefault();
            if(wasteitem.trim()==="")
            {
                setwasteitemErr(true);
            }
            else{
                setwasteitemErr(false);
                setfinal(false)
                props.onSubmit(final)
                //get
            }
        

    }
    return (

        <form onSubmit={GetFood} onChange={()=>setwasteitemErr(false)}>
          <MDTypography>
            {
                miniSidenav 
                ?
                <MDTypography variant="h6">
                    <p style={{ margin: "0px 0px 20px 0px",}}>TO GIVE US YOUR UNUTILIZED WASTE <Icon style={{padding:"2.2px 10px 0px 0px"}}>delete</Icon> FILL BELOW FORM</p>
                </MDTypography>
                :
                <MDTypography variant="h5">
                    <p style={{ margin: "0px 0px 20px 0px",}}>TO GIVE US YOUR UNUTILIZED WASTE <Icon style={{padding:"2.2px 0px 0px 0px"}}>delete</Icon> FILL BELOW FORM</p>
                </MDTypography>
            }
                <TextField
                    id="sendername"
                    label="Hotel Name"
                    variant="outlined"
                    defaultValue="ABC"
                />

                <TextField
                    id="date"
                    label="Pickup Date"
                    variant="outlined"
                    value={date} />

                <TextField
                    id="pickupadd"
                    label="Pickup Address"
                    variant="outlined"
                    defaultValue="borivali" />

                <TextField
                    id="state"
                    label="State"
                    variant="outlined"
                    defaultValue="maha" />

                <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    defaultValue="maha" />

                <TextField
                    id="contact"
                    label="Contact"
                    variant="outlined"
                    defaultValue="7438478" />
                
                    <TextField
                        error={wasteitemErr}
                        id="waste"
                        label="Approx how much KG waste you want to give us?"
                        variant="outlined"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><MDTypography><span style={{fontSize:"14px"}}>Kg</span></MDTypography></InputAdornment>,
                          }}
                        required
                        onChange={(val)=>setwasteitem(val.target.value)}
                    />

                {wasteitemErr?<p style={{color:"red",fontSize:"12px"}}>Please Fill The Inputbox**</p>:null}
                
               
            </MDTypography>

            <MDButton 
                type="submit" 
                color="info"
                style={{margin:"18px 0px 10px 0px",width:"200px"}} 
            >
                Submit
            </MDButton>

            {
                miniSidenav 
                ?
                <MDTypography variant="h6">
                    <p style={{ margin: "0px 0px 20px 0px",fontSize:"13px"}}>If you want to know what we are going to do with this waste, then check out &nbsp;
                    <Link to="/aboutus" style={{borderBottom:"solid 1px"}}>aboutus</Link>
                    </p>
                </MDTypography>
                :
                <MDTypography variant="h5">
                    <p style={{ margin: "0px 0px 20px 0px",fontSize:"13px"}}>If you want to know what we are going to do with this waste, then check out &nbsp;
                    <Link to="/aboutus" style={{borderBottom:"solid 1px"}}>aboutus</Link>
                    </p>
                </MDTypography>
            }
        </form>


    )
}