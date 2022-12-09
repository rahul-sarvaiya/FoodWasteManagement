import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer({ company, links }) {
  const { size } = typography;

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      style={{padding:"20px 0px 0px 0px"}}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
         Made with
        <MDBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" style={{color:"red"}} fontSize="inherit">
            favorite
          </Icon>
        </MDBox>
        by
          <MDTypography variant="button" fontWeight="medium">
            &nbsp;Rahul, Aditi, Aayush, Viraj &nbsp;
          </MDTypography>
      </MDBox>
    </MDBox>
  );
}
export default Footer;
