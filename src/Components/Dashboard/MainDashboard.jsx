import React from "react";
import "./css/dashboard.css";
import SideNav from "./SideNav";
import Dash from "./Dash";
import Sidebar from "./Sidebar/Sidebar";
import { Flex, Stack } from "@chakra-ui/react";

const MainDashboard = () => {
  return (
    <>
      <Stack>
        <SideNav /> <Dash />
      </Stack>
    </>
    // <div className="dash-cont">
    //   {/* <Sidebar /> */}

    // </div>
  );
};

export default MainDashboard;
