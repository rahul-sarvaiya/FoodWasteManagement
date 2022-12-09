import { useState, useEffect } from "react";
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";
import {useMaterialUIController} from "context";

function Configurator() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
  } = controller;
  const [disabled, setDisabled] = useState(false);

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}> 
    </ConfiguratorRoot>
  );
}

export default Configurator;
