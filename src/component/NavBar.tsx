import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/webpage.svg";
import { px } from "framer-motion";
import { ColorMode, ColorModeButton } from "../components/ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
