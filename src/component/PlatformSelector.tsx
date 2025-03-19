import { Button, Menu, MenuItem, Portal } from "@chakra-ui/react";

import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data } = usePlatforms();

  return (
    <>
      <Menu.Root>
        <Menu.Trigger>
          <Button
            as={Button}
            bg="gray.800" // Background color black
            color="white" // Text color white
            _hover={{ bg: "gray.900" }} // Slightly lighter on hover
            _active={{ bg: "gray.800" }} // Even lighter on click
            variant="solid"
            size="sm"
          >
            Platforms
          </Button>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((eachParentPlatform) => (
                <MenuItem>{eachParentPlatform.name}</MenuItem>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default PlatformSelector;
