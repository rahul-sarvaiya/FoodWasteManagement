import { Grid, Card, Box, Typography } from "@mui/material"
import Content2 from "./Content2"
export const Header = (props) => {
  return (
    <div className='text-center'>
    <div style={{margin: "90px 0px 0px 0px",}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid spacing={1}>
          <Grid item xs={12}>
            <Box component="img" src="img/donationimg.png" alt="img" style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }} />
            <Box>
              <Typography variant="" fontWeight="regular">
                <div style={{
                  textAlign: "center",
                  margin: "10px 20px 20px 20px",
                }}>
                  <Typography variant="h4" fontWeight="bold">OUR VISION</Typography>
                  <p style={{
                  margin: "10px 20px 20px 20px",
                  fontWeight:"bold",
                  color:"gray"
                }}>
                    When they had all had enough to eat, God said to his disciples, "Gather the pieces that are left over. Let nothing be wasted."
                  </p>
                </div>
                <div style={{
                  margin: "20px",
                  textAlign: "center"
                }}>
                  <Typography variant="h4" style={{ textAlign: "center" }} fontWeight="bold">OUR MISSION</Typography>
                  <ul style={{
                    margin: "10px 20px 40px 20px",
                    display: "inline-block",
                    textAlign: "left",
                  fontWeight:"bold",
                  color:"gray"
                  }}>
                    <li style={{ textAlign: "justify" }}>
                     1. Expand our network linking available sources of surplus food to those in need through existing charitable organizations.
                    </li>
                    <li style={{ textAlign: "justify" }}>
                     2.  Grow our company in a manner that provides a level of profitability necessary to carry out our vision.
                    </li>
                  </ul>
                </div>
              </Typography>
              <Content2 />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  </div>
  )
}
