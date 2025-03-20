import { Input, InputGroup } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <Input
        borderRadius={20}
        placeholder="Search Games..."
        variant={"subtle"}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
