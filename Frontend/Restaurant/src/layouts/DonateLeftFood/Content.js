

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

export default function Content(props) {
    const [controller, dispatch] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    const [data1, setdata1] = useState("Free");
    const [count, setcount] = useState(1);
    const current = new Date();
    const [amount,setamout]=useState("");
    const [amountErr,setamoutErr]=useState(false);
    const [fooditem1,setFooditem1]=useState("");
    const [fooditem2,setFooditem2]=useState("");
    const [fooditem3,setFooditem3]=useState("");
    const [fooditem4,setFooditem4]=useState("");
    const [fooditemErr,setFooditemErr]=useState(false);
    const [final,setfinal]=useState(false);
    function GetFoodItems(index,val){
        if(index===0){
            setFooditem1(val.target.value)
        }else if(index===1){
            setFooditem2(val.target.value)
        }else if(index===2){
            setFooditem3(val.target.value)
        }else if(index===3){
            setFooditem4(val.target.value)
        }   
    }
    const aa= `fooditem${count}`;
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    function addText() {
        if(count===1){
            if(fooditem1.trim()===""){
                setFooditemErr(true)
            }
            else{
                if (count < 4) {
                    setcount(count + 1);
                }
                setFooditemErr(false)
            }
        }else if(count===2){
            if(fooditem2.trim()===""){
                setFooditemErr(true)
            }
            else{
                if (count < 4) {
                    setcount(count + 1);
                }
                setFooditemErr(false)
            }
           
        }else if(count===3){
            if(fooditem3.trim()===""){
                setFooditemErr(true)
            }
            else{
                if (count < 4) {
                    setcount(count + 1);
                }
                setFooditemErr(false)
            }
            
        }
        
    }
    function removeText() {
        if (count > 1) {
            setcount(count - 1)
        }
        if(count===4){
            setFooditemErr(false)
            setFooditem4("")
        }else if(count===3){
            setFooditemErr(false)
            setFooditem3("")
        }else if(count===2){
            setFooditemErr(false)
            setFooditem2("")
        }
    }
    function GetFood(e){
        e.preventDefault();
        if(count===4){
            if(fooditem1.trim()==="" || fooditem2.trim()==="" || fooditem3.trim()==="" || fooditem4.trim()==="")
            {
                setFooditemErr(true);
            }
            else if(data1=="Paid" && amount.trim()==="" )
            {
                setamoutErr(true);
            }
            else{
                setFooditemErr(false);
                setamoutErr(false);
                // alert("thanks")
                setfinal(false)
                props.onSubmit(final)
            }
        }else if(count===3){
            if(fooditem1.trim()==="" || fooditem2.trim()==="" || fooditem3.trim()==="")
            {
                setFooditemErr(true);
            }
            else if(data1=="Paid" && amount.trim()==="" )
            {
                setamoutErr(true);
            }
            else{
                setFooditemErr(false);
                setamoutErr(false);
                // alert("thanks")
                setfinal(false)
                props.onSubmit(final)
            }
        }else if(count===2){
            if(fooditem1.trim()==="" || fooditem2.trim()==="")
            {
                setFooditemErr(true);
            }
            else if(data1=="Paid" && amount.trim()==="" )
            {
                setamoutErr(true);
            }
            else{
                setFooditemErr(false);
                setamoutErr(false);
                // alert("thanks")
                setfinal(false)
                props.onSubmit(final)
            }
        }else if(count===1){
            if(fooditem1.trim()==="")
            {
                setFooditemErr(true);
            }
            else if(data1=="Paid" && amount.trim()==="" )
            {
                setamoutErr(true);
            }
            else{
                setFooditemErr(false);
                setamoutErr(false);
                
                setfinal(false)
                props.onSubmit(final)
            }
        }

    }
    return (

        <form onSubmit={GetFood} onChange={()=>{setamoutErr(false);setFooditemErr(false)}}>
          {/* {fooditem1}/
          {fooditem2}/
          {fooditem3}/
          {fooditem4}/
          {amount} */}
          <MDTypography>
            {
                miniSidenav 
                ?
                <MDTypography variant="h6">
                    <p style={{ margin: "0px 0px 20px 0px",}}>TO DONATE PLEASE FILL BELOW DETAILS</p>
                </MDTypography>
                :
                <MDTypography variant="h5">
                    <p style={{ margin: "0px 0px 20px 0px",}}>TO DONATE PLEASE FILL BELOW DETAILS</p>
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
                
                {[...Array(count)].map((elementInArray, index) => (
                
                    <TextField
                        error={fooditemErr}
                        id={aa}
                        label={"Food Item " + (index+1)}
                        variant="outlined"
                        onChange={(val)=>GetFoodItems(index,val)}
                    />

                )
                )}
                 {
                    count < 4 ?
                         <IconButton style={{backgroundColor:"green",margin:"10px 0px 0px 3px"}} color="white" onClick={addText} >
                         <Icon >add</Icon>
                       </IconButton>
                        : null
                }
                {
                    count > 1 ?
                         <IconButton style={{backgroundColor:"red",margin:"10px 0px 0px 5px"}} color="white" onClick={removeText} >
                         <Icon>close</Icon>
                       </IconButton>
                        : null
                }

                {fooditemErr?<p style={{color:"red",fontSize:"12px"}}>Please Fill All The Inputbox**</p>:null}
            
                {
                    miniSidenav
                        ?
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Free"
                            name="radio-buttons-group"
                            onChange={(e) => setdata1(e.target.value)}>
                            <FormControlLabel value="Free" control={<Radio />} label="Free" />
                            <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                        </RadioGroup>
                        :
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Free"
                            name="radio-buttons-group"
                            style={{ padding: "0px 0px 0px 10px" }}
                            onChange={(e) => setdata1(e.target.value)}>
                            <FormControlLabel value="Free" control={<Radio />} label="Free" />
                            <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                        </RadioGroup>
                }
                {
                    data1 === "Paid" ?
                    <>
                        <TextField
                            id="charge"
                            label="How much amount?"
                            variant="outlined"
                            value={amount}
                            onChange={(e)=>setamout(e.target.value)}
                            error={amountErr}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><MDTypography><span style={{fontSize:"14px"}}>&#8377;</span></MDTypography></InputAdornment>,
                              }}/>
                            {
                            amountErr?
                            <p style={{color:"red",fontSize:"12px"}}>
                                Please Fill Ammount Correctly**
                            </p>:
                            null
                            }
                    </>
                        :
                        null
                }
                
               
            </MDTypography>

            <MDButton 
                type="submit" 
                color="info"
                style={{margin:"18px 0px 20px 0px",width:"200px"}}
            >
                Submit
            </MDButton>
            
        </form>

    )
}