import React from "react";

import Spinner from "../../resources/images/loader.gif";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="l-container">
      <img src={Spinner} className="l-loader" alt="Spinner" />
    </div>
  );
};

export default PageLoader;
