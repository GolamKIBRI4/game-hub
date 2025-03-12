import { HStack, Image, ListItem, ListRoot, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";

const GenreList = () => {
  const { data, error, IsLoading } = useGenre();
  const SkeletonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <ListRoot>
        {IsLoading &&
          SkeletonList.map((item) => (
            <GenreListItemContainer>
              <GenreListSkeleton />
            </GenreListItemContainer>
          ))}
        {data.map((genre) => (
          <GenreListItemContainer>
            <ListItem key={genre.id}>
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImage(genre.image_background)}
                />
                <Text fontSize={"lg"}>{genre.name}</Text>
              </HStack>
            </ListItem>
          </GenreListItemContainer>
        ))}
      </ListRoot>
    </>
  );
};

export default GenreList;
