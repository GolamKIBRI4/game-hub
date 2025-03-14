("use client");

import { Portal, Select, createListCollection } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";

const SelectPlatform = () => {
  const { data } = usePlatforms();
  return (
    <>
      <Select.Root size="sm" width="320px">
        <Select.HiddenSelect />
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText>Select Platforms</Select.ValueText>
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              {data.map((ParentPlatforms) => (
                <Select.Item>
                  {ParentPlatforms.name}
                  <Select.ItemIndicator />
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Portal>
      </Select.Root>
    </>
  );
};

export default SelectPlatform;
