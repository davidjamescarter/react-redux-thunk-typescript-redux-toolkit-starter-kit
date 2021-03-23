import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

interface Props {
  size?: string;
}

function WindIcon({ size = "15px" }: Props) {
  return (
    <FontAwesomeIcon
      icon={faWind}
      fixedWidth
      style={{ width: size, height: "auto" }}
    />
  );
}

WindIcon.defaultProps = {
  size: "15px",
};

export default WindIcon;
