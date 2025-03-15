import usePlatforms, { ParentPlatforms } from "../hooks/usePlatforms";
import { Button, HStack, ListItem, ListRoot } from "@chakra-ui/react";
import GenreListItemContainer from "./GenreListItemContainer";
import GenreListSkeleton from "./GenreListSkeleton";
import getCroppedImage from "../services/image-url";
import ParentPlatformIcon from "./ParentPlatformIcon";

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
