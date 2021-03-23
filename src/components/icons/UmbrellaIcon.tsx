import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrella } from "@fortawesome/free-solid-svg-icons";

interface Props {
  size?: string;
}

function UmbrellaIcon({ size = "15px" }: Props) {
  return (
    <FontAwesomeIcon
      icon={faUmbrella}
      fixedWidth
      style={{ width: size, height: "auto" }}
    />
  );
}

UmbrellaIcon.defaultProps = {
  size: "15px",
};

export default UmbrellaIcon;
