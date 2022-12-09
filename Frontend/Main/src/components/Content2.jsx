import { Typography, Card, Box, Grid } from "@mui/material";
export default function Content2() {
    return (
        <Grid>
            <Grid container spacing={3} style={{
                padding: "0px 70px 20px 70px",
            }}>
                <Grid item xs={12} md={4} sm={12}>
                    <Card>
                        <Box component="img" src={"img/donate.png"} alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <Typography variant="" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <Typography variant="h5" fontWeight="bold">OUR BUSINESS</Typography>
                                <p style={{ textAlign: "justify", padding: "10px 0px 0px 0px",fontWeight:"regular",color:"black"}}>
                                    Food Donation Connection provides an alternative to discarding surplus wholesome food by linking food service donors with surplus food to local hunger relief agencies. We do this by creating and maintaining an efficient communication and reporting network that links available sources of food to those in need through these existing charitable organizations. The LAX Harvest Food Donation Program is a shining example of how the Los Angeles International Airport community came together to make a tangible, positive difference in the lives of those around them.
                                </p>
                            </div>
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                    <Card>
                        <Box component="img" src="img/happy.png" alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <Typography variant="" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <Typography variant="h5" fontWeight="bold">THE NEED</Typography>
                                <p style={{ textAlign: "justify", padding: "10px 0px 0px 0px",fontWeight:"regular",color:"black"}}>
                                    FDC addressed the need for hunger relief in a Statement for the Record to the House Ways and Means Subcommittee on Oversight Joint Hearing on Food Banks and Front-Line Charities: Unprecedented Demand and Unmet Need (November 19, 2009). Some of the biggest restaurant chains in California and the nation are stepping up their food recovery efforts. But hunger relief agencies and food recovery groups want to see more of the 90,000 eateries stop discarding and start donating. Hunger in the Golden State website launched by University of Southern California / Annenberg School for Communication and Journalism.
                                </p>
                            </div>
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                    <Card>
                        <Box component="img" src="img/waste.png" alt="img" style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "100%",
                            borderRadius: "4%"
                        }} />
                        <Typography variant="" fontWeight="regular">
                            <div style={{
                                textAlign: "center",
                                margin: "15px 20px 20px 20px",
                            }}>
                                <Typography variant="h5" fontWeight="bold">THE WATSE</Typography>
                                <p style={{ textAlign: "justify", padding: "10px 0px 0px 0px",fontWeight:"regular",color:"black" }}>
                                    Americans throw away more than 25 percent of the food we prepare, about 96 billion pounds of food waste each year according to the US Department of Agriculture's Estimating and Addressing America's Food Losses PDF). See US EPA’s Basic Information about Food Waste Page.
                                </p>
                            </div>
                        </Typography>
                    </Card>
                </Grid>

            </Grid>
        </Grid>

    )
}
