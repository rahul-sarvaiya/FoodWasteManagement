import React from "react";
import { Typography,Card,Box,Grid } from "@mui/material";
export const About = (props) => {
  return (
    <div id="about" className='text-center'>
      <div style={{margin: "0px 70px 0px 70px",}}>
        <div className='section-title' style={{margin: "0px 0px -8px 0px",}} >
          <h2>ABOUT US</h2>
        </div>
        <div className='row'>
            <Box>
              <Grid container spacing={2} style={{
                padding: "20px 0px 30px 0px",
              }}>
                <Grid item xs={12} md={8} sm={12}>
                  <Card>

                    <div style={{
                      textAlign: "center",

                    }}>
                      <Typography variant="h6" fontWeight="light" >
                        <p style={{ margin: "20px 30px 15px 30px", textAlign: "justify" }}>
                          A lot of food is thrown away at social gatherings and restaurants. In a country like India, where 40% of produce is wasted, millions of people sleep on an empty stomach. So there must be a system in place to make use of this unused food in order to feed hungry. According to research, the majority of food waste consists of leftovers. If this food is donated, it will not only feed the needy but will also reduce the burden on dumping grounds..
                        </p>
                        <p style={{ margin: "10px 30px 15px 30px", textAlign: "justify" }}>
                          Americans throw away more than 25 percent of the food we prepare, about 96 billion pounds of food waste each year according to the US Department of Agriculture's Estimating and Addressing America's Food Losses PDF). See US EPA’s Basic Information about Food Waste Page.
                        </p>
                        <p style={{ margin: "10px 30px 25px 30px", textAlign: "justify" }}>
                          We can save a lot of food if we have a website where we simply post about food availability and people in need receive it on their own. People can also post about their unutilized waste and we collect that waste and fertilize it and grow vegis/fruits using that fertilizer and sell it on low price.
                        </p>
                      </Typography>
                    </div>

                  </Card>
                </Grid>

                <Grid item xs={12} md={4} sm={12}>
                  <Card>

                    <Box component="img" src="img/Architecture.png" alt="img" style={{
                      marginTop: "15px",
                      marginBottom: "15px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "50%",
                    }} />

                  </Card>
                </Grid>

              </Grid>

              <Typography variant="h3" fontWeight="bold">
                <h4 style={{ margin: "0px 0px 30px 0px", textAlign: "center",fontWeight:"bold" }}>MEET THE TEAM</h4>
              </Typography>

              <Grid container spacing={2} style={{
                padding: "0px 0px 30px 0px",
              }}>
                <Grid item xs={12} md={3} sm={12}>
                  <Card>
                    <Box component="img" src="img/3rd.jpeg" alt="img" style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                      borderRadius: "4%",
                      marginTop:"0"
                    }} />
                    <Typography variant="button" fontWeight="regular">
                      <div style={{
                        textAlign: "center",
                        margin: "15px 20px 20px 20px",
                      }}>
                        <Typography variant="h5" style={{ textAlign: "center",margin: "0px 0px 5px 0px",  }}>
                          Rahul Sarvaiya
                        </Typography>
                        <Typography variant="button" fontWeight="regular">Project Designer</Typography><br />
                      </div>
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} md={3} sm={12}>
                  <Card>
                    <Box component="img" src="img/2nd.jpeg" alt="img" style={{
                      marginTop:"0",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                      borderRadius: "4%"
                    }} />
                    <Typography variant="button" fontWeight="regular">
                      <div style={{
                        textAlign: "center",
                        margin: "15px 20px 20px 20px",
                      }}>
                        <Typography variant="h5" style={{ textAlign: "center",margin: "0px 0px 5px 0px",  }}>
                          Viraj Gavas
                        </Typography>
                        <Typography variant="button" fontWeight="regular">Project Designer</Typography><br />
                      </div>
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                  <Card>
                    <Box component="img" src="img/1st.jpg" alt="img" style={{
                      marginTop:"0",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                      borderRadius: "4%"
                    }} />
                    <Typography variant="button" fontWeight="regular">
                      <div style={{
                        textAlign: "center",
                        margin: "15px 20px 20px 20px",
                      }}>
                        <Typography variant="h5" style={{ textAlign: "center",margin: "0px 0px 5px 0px",  }}>
                          Aditi Changan
                        </Typography>
                        <Typography variant="button" fontWeight="regular">Project Manager</Typography><br />
                      </div>
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                  <Card>
                    <Box component="img" src="img/2nd.jpg" alt="img" style={{
                      marginTop:"0",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "100%",
                      borderRadius: "4%"
                    }} />
                    <Typography variant="button" fontWeight="regular">
                      <div style={{
                        textAlign: "center",
                        margin: "15px 20px 20px 20px",
                      }}>
                        <Typography variant="h5" style={{ textAlign: "center",margin: "0px 0px 5px 0px", }}>
                          Aayush Salvi
                        </Typography>
                        <Typography variant="button" fontWeight="regular">Backend Designer</Typography><br />
                      </div>
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box >
          </div>
        </div>
      </div>
  );
};
