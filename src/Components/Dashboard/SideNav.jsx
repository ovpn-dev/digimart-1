import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Image,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  Container,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import { FiUser, FiSettings, FiMenu, FiLogOut } from "react-icons/fi";
import { BiSolidDashboard, BiSolidNotepad } from "react-icons/bi";
import { FaBitcoin, FaPaypal, FaGift } from "react-icons/fa";

const LinkItems = [
  { name: "Overview", icon: BiSolidDashboard, link: "/overview" },
  { name: "Crypto", icon: FaBitcoin, link: "/crypto" },
  { name: "Giftcards", icon: FaGift, link: "/giftcards" },
  { name: "Paypal", icon: FaPaypal, link: "/paypal" },
  { name: "Transaction", icon: BiSolidNotepad, link: "/transactions" },
  { name: "Profile", icon: FiUser, link: "/profile" },
  { name: "Setting", icon: FiSettings, link: "/settings" },
  { name: "Logout", icon: FiLogOut, link: "/logout" },
];

export default function SideNav({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="100%"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        mb={"5"}
        justifyContent="space-between"
      >
        <Image
          alignItems={"center"}
          justifyContent={"space-between"}
          src={
            colorMode === "light"
              ? "./images/digimartExch.png"
              : "./images/logoWhite.png"
          }
          width="150px"
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => navigate(link.link)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Link
      // onClick={() => navigate(rest.href)}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="8"
        borderRadius="xl"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#E8E6F6",
          color: "#1808A3",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "#1808A3",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="space-between"
      {...rest}
    >
      <Image
        justifyContent={"space-between"}
        src={
          colorMode === "light"
            ? "./images/digimartExch.png"
            : "./images/logoWhite.png"
        }
        width="150px"
      />

      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
