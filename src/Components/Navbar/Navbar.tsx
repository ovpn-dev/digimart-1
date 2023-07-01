import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px" margin={6}>
      <Flex align="center">
        <Image src="./images/digimartExch.png" width="150px" />
        {/* <Heading as="h1" fontSize={{ base: "md", sm: "xl" }} mr={"1"}>
          BugbyBug
        </Heading> */}
      </Flex>
    </Flex>
  );
};
export default Navbar;
