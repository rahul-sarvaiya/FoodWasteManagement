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
const routes   = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Dashboard iconname="home"/>,
  },
  {
    type: "collapse",
    name: "Donate Left Over Food",
    key: "donatefood",
    icon: <Icon fontSize="small">local_dining</Icon>,
    route: "/donatefood",
    component: <DonateFood iconname="local_dining"/>,
  },
  {
    type: "collapse",
    name: "Donate Wet Waste",
    key: "donatewaste", 
    icon: <Icon fontSize="small">delete</Icon>,
    route: "/donatewaste",
    component: <DonateWaste iconname="delete"/>,
  },
  {
    type: "collapse",
    name: "Your Activities",
    key: "activites",
    icon: <Icon fontSize="small">manage_accounts</Icon>,
    route: "/activites",
    component: <Activities iconname="manage_accounts"/>,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications iconname="notifications"/>,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables iconname="table_view"/>,
  },
  {
    name: "Donor",
    key: "donor",
    route: "/donor",
    component: <Donor iconname="share"/>,
  },
  {
    name: "Map",
    key: "map",
    route: "/map",
    component: <Ngo iconname="location_on"/>,
  },
  {
    name: "About us",
    key: "aboutus",
    route: "/aboutus",
    component: <Aboutus iconname="people"/>,
  },
  
];
export default routes;
