import React from "react";

import NetflixOriginals from "../NetflixOriginalsComponent/NetflixOriginals";
import Treding from "../TrendingComponent/Trending";

const Layout = () => {
  return (
    <div className="LayoutContainer">
      <NetflixOriginals />
      <Treding />
    </div>
  );
};

export default Layout;
