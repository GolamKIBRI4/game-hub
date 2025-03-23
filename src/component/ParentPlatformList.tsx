import usePlatforms, { ParentPlatforms } from "../hooks/usePlatforms";
import { Button, HStack, ListItem, ListRoot } from "@chakra-ui/react";
import GenreListItemContainer from "./GenreListItemContainer";
import GenreListSkeleton from "./GenreListSkeleton";

import ParentPlatformIcon from "./ParentPlatformIcon";
import { Heading } from "@chakra-ui/react";

interface Props {
  onSelectedParentPlatforms: (Parentplatform: ParentPlatforms) => void;
  selectedParentPlatform: ParentPlatforms | null;
}

const ParentPlatformList = ({
  onSelectedParentPlatforms,
  selectedParentPlatform,
}: Props) => {
  const { data, IsLoading } = usePlatforms();
  const SkeletonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
    <Heading fontSize={'3xl'} marginBottom={3} marginTop={3}>Platforms</Heading>
      <ListRoot>
        {IsLoading &&
          SkeletonList.map((item) => (
            <GenreListItemContainer key={item}>
              <GenreListSkeleton />
            </GenreListItemContainer>
          ))}
        {data.map((eachParentPlatform) => (
          <GenreListItemContainer key={eachParentPlatform.id}>
            <ListItem>
              <HStack>
                <ParentPlatformIcon
                  ParentPlatformSlug={eachParentPlatform.slug}
                />
                <Button 
                whiteSpace={'normal'}
                textAlign={'left'}
                  fontWeight={
                    eachParentPlatform.id === selectedParentPlatform?.id
                      ? "extrabold"
                      : "normal"
                  }
                  fontSize={"lg"}
                  variant={"ghost"}
                  onClick={() => {
                    onSelectedParentPlatforms(eachParentPlatform);
                  }}
                >
                  {eachParentPlatform.name}
                </Button>
              </HStack>
            </ListItem>
          </GenreListItemContainer>
        ))}
      </ListRoot>
    </>
  );
};

export default ParentPlatformList;
