import { HStack, ListItem, Skeleton } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem>
      <HStack>
        <Skeleton boxSize={"32px"} borderRadius={8} />
        <Skeleton height={"20px"} width={"80px"} borderRadius={8} />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
