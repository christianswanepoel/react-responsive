import React from "react";
import { Desktop, DesktopLarge, Tablet, Mobile, MobileSmall } from "./lib/media-query";

const App = () => {
  return (
    <div>
      <h1>Device Test!</h1>
      <DesktopLarge>Desktop - Large</DesktopLarge>
      <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
      <MobileSmall>Mobile - Small </MobileSmall>
    </div>
  );
};

export default App;
