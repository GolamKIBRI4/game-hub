
import { Icon } from "@chakra-ui/react";

//importing react icons from font awesome
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  ParentPlatformSlug: string;
}

const ParentPlatformIcon = ({ ParentPlatformSlug }: Props) => {
  const ParentIconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  const selectedIcon = ParentIconMap[ParentPlatformSlug] || BsGlobe;

  return <Icon as={selectedIcon} color={"gray.500"} boxSize={"32px"} />;
};

export default ParentPlatformIcon;
