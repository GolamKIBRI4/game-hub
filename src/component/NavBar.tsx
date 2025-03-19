import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/webpage.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize={"60px"} margin={"5px"} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
