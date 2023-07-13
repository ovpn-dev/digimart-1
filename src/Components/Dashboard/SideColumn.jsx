import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Icon,
  IconButton,
  Link,
  Image,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Button,
  CloseButton,
  HStack,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FiUser, FiSettings, FiMenu, FiLogOut } from "react-icons/fi";
import { BiSolidDashboard, BiSolidNotepad } from "react-icons/bi";
import { FaBitcoin, FaPaypal, FaGift } from "react-icons/fa";

export default function SideColumn() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        borderRight="1px"
        bg={useColorModeValue("white", "gray.900")}
        color={useColorModeValue("#000", "gray.200")}
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          {" "}
          {/* Desktop */}
          <Flex flexDir="column" as="nav">
            <HStack
              mt={25}
              mb={[25, 50, 100]}
              justifyContent={"space-between"}
              // alignItems={{ base: "center" }}
            >
              <Image
                src={
                  colorMode === "light"
                    ? "./images/digimartExch.png"
                    : "./images/logoWhite.png"
                }
                width="150px"
                mr={"1"}
              />
              {/* Mobile */}
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"outline"}
                aria-label={"Toggle Navigation"}
                display={{ md: "none" }}
                ml={"100px"}
              />
            </HStack>

            <Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Flex
                className="sidebar-items"
                mr={[2, 6, 0, 0, 0]}
                onClick={() => navigate("/dashboard")}
              >
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon
                    as={BiSolidDashboard}
                    fontSize="2xl"
                    className="active-icon"
                  />
                  <Text
                    className="active"
                    display={["none", "none", "none", "flex", "flex"]}
                  >
                    Overview
                  </Text>
                </Link>
              </Flex>

              <Flex
                className="sidebar-items"
                mr={[2, 6, 0, 0, 0]}
                onClick={() => navigate("/crypto")}
              >
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon as={FaBitcoin} fontSize="2xl" />
                  <Text display={["none", "none", "none", "flex", "flex"]}>
                    Crypto
                  </Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon as={FaGift} fontSize="2xl" />
                  <Text display={["none", "none", "none", "flex", "flex"]}>
                    Giftcards
                  </Text>
                </Link>
              </Flex>
              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon as={FaPaypal} fontSize="2xl" />
                  <Text display={["none", "none", "none", "flex", "flex"]}>
                    Paypal
                  </Text>
                </Link>
              </Flex>

              <Flex
                className="sidebar-items"
                mr={[2, 6, 0, 0, 0]}
                onClick={() => navigate("/transactions")}
              >
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon as={BiSolidNotepad} fontSize="2xl" />
                  <Text
                    fontSize="18"
                    display={["none", "none", "none", "flex", "flex"]}
                  >
                    Transaction
                  </Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon as={FiUser} fontSize="2xl" />
                  <Text display={["none", "none", "none", "flex", "flex"]}>
                    Profile
                  </Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon as={FiSettings} fontSize="2xl" />
                  <Text display={["none", "none", "none", "flex", "flex"]}>
                    Setting
                  </Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["none", "none", "flex", "flex", "flex"]}
                >
                  <Icon as={FiLogOut} fontSize="2xl" />
                  <Text display={["none", "none", "none", "flex", "flex"]}>
                    Logout
                  </Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* Mobile Content */}
        <Flex
          w="100vw"
          display={display}
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          zIndex={20}
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>

            <Link href="/about" passHref>
              <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
                About
              </Button>
            </Link>

            <Link href="/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
