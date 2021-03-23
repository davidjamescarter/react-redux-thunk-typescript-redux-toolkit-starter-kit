import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerThreeQuarters } from "@fortawesome/free-solid-svg-icons";

interface Props {
  size?: string;
}

function ThermoIcon({ size = "15px" }: Props) {
  return (
    <FontAwesomeIcon
      icon={faThermometerThreeQuarters}
      fixedWidth
      style={{ width: size, height: "auto" }}
    />
  );
}

export default ThermoIcon;
