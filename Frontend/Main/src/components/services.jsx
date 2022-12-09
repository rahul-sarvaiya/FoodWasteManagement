import React from "react";
import { Typography, Card, Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
export const Services = (props) => {
  const [rest, setrest] = useState([]);
    const [ngo, setngo] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/getrest").then((result) => {
            result.json().then((resp) => {
                setrest(resp)
            })
        })
        fetch("http://127.0.0.1:8000/api/getngo").then((result) => {
            result.json().then((resp) => {
                setngo(resp)
            })
        })
    }, [])
  return (
    <div id='services' className='text-center'>
      <div style={{margin: "0px 80px 0px 80px",}}>
        <div className='section-title'>
          <h2>TIE-UP FOOD DONORS ARE,</h2>
        </div>
        <div className='row'>
          <Box>
            <Grid container spacing={2} style={{
              padding: "0px 0px 0px 0px",
            }}>
              {
                    rest.map((i) =>
              <Grid item xs={12} md={3} sm={12}>
                <Card>
                  <Box component="img" src={"img/"+i.image} alt="img" style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                    borderRadius: "4%"
                  }} />
                  <Typography variant="button" fontWeight="regular">
                    <div style={{
                      textAlign: "left",
                      margin: "15px 20px 20px 20px",
                    }}>
                      <Typography variant="h5" style={{ textAlign: "left" }}>
                        NAME : <Typography variant="regular" fontWeight="" style={{color:"gray"}}>{i.Name}</Typography><br />
                        STATE : <Typography variant="regular" fontWeight="" style={{color:"gray"}}>{i.state}</Typography><br />
                        CITY : <Typography variant="regular" fontWeight="" style={{color:"gray"}}>{i.city}</Typography><br />
                        CONTECT : <Typography variant="regular" fontWeight="" style={{color:"gray"}}>{i.phone}</Typography>
                      </Typography>
                    </div>
                  </Typography>
                </Card>
              </Grid>
               )
              }
            </Grid>
          </Box >
        </div>
      </div>
    </div>
  )
}
