// Correct import for Chakra's color mode hook
import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode(); //Built in Hook Provided by chakra

  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"} // ✅ Use colorMode to control switch state
        onCheckedChange={toggleColorMode} // ✅ Correctly toggle dark/light mode
        padding="10px"
        colorPalette={"green"}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>
          {colorMode === "dark" ? "Dark Mood" : "Light Mood"}{" "}
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
