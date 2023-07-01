import React from "react";
import Navbar from "../Navbar/Navbar";
import WithSubnavigation from "../Navbar/WithSubnavigation";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <WithSubnavigation />
      {/* <Navbar /> */}
      <main>{children}</main>
    </>
  );
};
export default Layout;
