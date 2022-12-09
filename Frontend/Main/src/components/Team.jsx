import React from "react";
import swal from "sweetalert";
import { Typography, Card, Box, Grid, Button } from "@mui/material";
import { useState } from "react";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
export const Team = (props) => {
  const Razorpay = useRazorpay();
  const [name1,setName]=useState("");
  const [email1,setEmail]=useState("");
  const [phone1,setPhone]=useState("");
  async function getData(e){
    let filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let filter2=/^\d{10}$/;
    swal({
      title: "Give Your Basic Details",
      text: "Enter Your Name:",
      content: "input",
      inputPlaceholder: "Write something"
    }).then(name => {
      if (!name){
        swal({
        text: "You need to Enter your Name for Buying this Fertilizer",
        icon:"error"
      })
      }
      else{
        setName(name);
        swal({
          title: "Give Your Basic Details",
          text: "Enter Your Email:",
          content: "input",
          inputPlaceholder: "Write something"
        }).then(email => {
          if (!email || !filter.test(email)){
            swal({
            text: "You need to Enter correct Email for Buying this Fertilizer",
            icon:"error"
          })
          }
          else{
            setEmail(email);
            swal({
              title: "Give Your Basic Details",
              text: "Enter Your Contact No:",
              content: "input",
              inputPlaceholder: "Write something"
            }).then(phone => {
              if (!phone || !filter2.test(phone)){
                swal({
                text: "You need to Enter your contact No. for Buying this Fertilizer",
                icon:"error"
              })
              }
              else{
                setPhone(phone);
              }
              var options = {
                key: "rzp_test_HPMA0OSvhjMIDs",
                key_secret:"6UJL2lrjvDCn3ou6HVE3EqW2",
                amount: e *100,
                currency:"INR",
                name:"SOCIOLOGY",
                description:"for testing purpose",
                handler: function(response){
                  swal({
                    icon:"success",
                    text:"Payment sucessfully completed",
                    button:"we will contact you for delivery"
                  })
                },
                prefill: {
                  name:name,
                  email:email,
                  contact:phone
                },
                notes:{
                  address:"Razorpay Corporate office"
                },
                theme: {
                  color:"#3399cc"
                }
              };
              var pay = new window.Razorpay(options);
              pay.open();
            });
          }
        });
      }
    });
    
  }
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Fertilizer</h2>
        </div>
        <div id='row'>
        <Box>
            <Grid container spacing={2} style={{
              padding: "0px 0px 0px 0px",
            }}>
              <Grid item xs={12} md={4} sm={12}>
                <Card>
                  <Box component="img" src="img/packet.png" alt="img" style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    borderRadius: "4%"
                  }} />
                  <Typography variant="button" fontWeight="regular">
                    <div style={{
                      textAlign: "center",margin: "-60px 20px 40px 20px",
                    }}>
                      <Typography variant="h5" style={{ textAlign: "center" }}>
                        <Typography variant="regular" fontWeight="bold" style={{color:"black",}}>1 Kg - 20&#8377;</Typography><br />
                        <Button style={{margin: "25px 0px 0px 0px",width:"40%"}}variant="contained" size="large" onClick={()=>{getData(20)}}><b style={{fontSize:"13px"}}>Buy</b></Button>
                      </Typography>
                    </div>
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <Card>
                  <Box component="img" src="img/packet.png" alt="img" style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    borderRadius: "4%"
                  }} />
                  <Typography variant="button" fontWeight="regular">
                    <div style={{
                      textAlign: "center",margin: "-60px 20px 40px 20px",
                    }}>
                      <Typography variant="h5" style={{ textAlign: "center" }}>
                        <Typography variant="regular" fontWeight="bold" style={{color:"black",}}>5 Kg - 80&#8377;</Typography><br />
                        <Button style={{margin: "25px 0px 0px 0px",width:"40%"}}variant="contained" size="large"  onClick={()=>{getData(80)}}><b style={{fontSize:"13px"}}>Buy</b></Button>
                      </Typography>
                    </div>
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} sm={12}>
                <Card>
                  <Box component="img" src="img/packet.png" alt="img" style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    borderRadius: "4%"
                  }} />
                  <Typography variant="button" fontWeight="regular">
                    <div style={{
                      textAlign: "center",
                      margin: "-60px 20px 40px 20px",
                    }}>
                      <Typography variant="h5" style={{ textAlign: "center" }}>
                        <Typography variant="regular" fontWeight="bold" style={{color:"black",}}>10 Kg - 100&#8377;</Typography><br />
                        <Button style={{margin: "25px 0px 0px 0px",width:"40%"}}variant="contained" size="large"  onClick={()=>{getData(100)}}><b style={{fontSize:"13px"}}>Buy</b></Button>
                      </Typography>
                    </div>
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box >
        </div>
      </div>
    </div>
  )
}
