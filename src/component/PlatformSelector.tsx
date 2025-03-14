import { Button, Menu, MenuItemGroup, Portal } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Parentheses } from "lucide-react";
const PlatformSelector = () => {
  const { data } = usePlatforms();

  return (
    <>
      <Menu.Root>
        <Menu.Trigger>
          <Button as={Button} variant="outline" size="sm" color={"gray"}>
            Platforms
          </Button>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((ParentPlatforms) => (
                <Menu.Item>{ParentPlatforms.name}</Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default PlatformSelector;
