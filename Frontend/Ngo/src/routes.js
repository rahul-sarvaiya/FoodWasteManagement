import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Notifications from "layouts/notifications";
import Icon from "@mui/material/Icon";
import { Activities } from "layouts/Activites/Activites";
import { DonateFood } from "layouts/DonateLeftFood/DonateLeftFood";
import { DonateWaste } from "layouts/DonateWaste/DonateWaste";
import { Donor } from "layouts/Donor/Donor";
import { Aboutus } from "layouts/Aboutus/Aboutus";
import { Ngo } from "layouts/Ngo/Ngo";
import Login from "layouts/login/Login";
import Signup from "layouts/signup/Signup";
import { Protected } from "layouts/Protected";
import Token from "layouts/signup/Token";
import Reset from "layouts/ResetPass/Reset";
import Reset2 from "layouts/ResetPass/Reset2";
import { Food } from "layouts/Available/Food";
import { Waste } from "layouts/Available/Waste";
import { Sell } from "layouts/Sell/Sell";

const routes   = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Protected Cmp={Dashboard} iconname="home"/>,
  },
  // {
  //   type: "collapse",
  //   name: "Donate Food",
  //   key: "donatefood",
  //   icon: <Icon fontSize="small">local_dining</Icon>,
  //   route: "/donatefood",
  //   component: <Protected Cmp={DonateFood} iconname="local_dining"/>,
  // },
  // {
  //   type: "collapse",
  //   name: "Donate Wet Waste",
  //   key: "donatewaste", 
  //   icon: <Icon fontSize="small">delete</Icon>,
  //   route: "/donatewaste",
  //   component: <Protected Cmp={DonateWaste} iconname="delete"/>,
  // },

  {
    name: "Donor",
    key: "donor",
    route: "/donor",
    component: <Protected Cmp={Donor} iconname="share"/>,
  },
  {
    name: "Map",
    key: "map",
    route: "/map",
    component: <Protected Cmp={Ngo} iconname="location_on"/>,
  },
  {
    name: "About us",
    key: "aboutus",
    route: "/aboutus",
    component: <Protected Cmp={Aboutus} iconname="people"/>,
  },
  {
    route: "/login",
    component: <Login iconname="people"/>,
  },
  {
    route: "/signup",
    component: <Signup iconname="people"/>,
  },
  {
    route: "/token",
    component: <Token iconname="token"/>,
  },
  {
    route: "/resetreq",
    component: <Reset iconname="reset"/>,
  },
  {
    route: "/reset",
    component: <Reset2 iconname="reset"/>,
  },
  {
    type: "collapse",
    name: "Available Food",
    key: "availableFood",
    icon: <Icon fontSize="small">local_dining</Icon>,
    route: "/availableFood",
    component: <Protected Cmp={Food} iconname="local_dining"/>,
  },
  {
    type: "collapse",
    name: "Available Wet Waste",
    key: "availableWetWaste", 
    icon: <Icon fontSize="small">delete</Icon>,
    route: "/availableWetWaste",
    component: <Protected Cmp={Waste} iconname="delete"/>,
  },
  {
    type: "collapse",
    name: "Sell Vegetables",
    key: "sellVegetables", 
    icon: <Icon fontSize="small">sell</Icon>,
    route: "/sellVegetables",
    component: <Protected Cmp={Sell} iconname="sell"/>,
  },
  {
    type: "collapse",
    name: "Your Activities",
    key: "activites",
    icon: <Icon fontSize="small">manage_accounts</Icon>,
    route: "/activites",
    component: <Protected Cmp={Tables} iconname="manage_accounts"/>,
  },
  
];
export default routes;
