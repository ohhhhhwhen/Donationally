import React from "react";
import "./index.css";

function SaveBtn(props) {

  return (
    <span
      className="btn btn-warning btn-save"
      {...props}
      role="button"
      tabIndex="0"
    >
      Favorite

    </span>
  );
}

export default SaveBtn;
