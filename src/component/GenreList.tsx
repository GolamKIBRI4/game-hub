import {
  Button,
  HStack,
  Image,
  Link,
  ListItem,
  ListRoot,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, error, IsLoading } = useGenre();
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
        {data.map((genre) => (
          <GenreListItemContainer key={genre.id}>
            <ListItem>
              <HStack>
                <Image
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImage(genre.image_background)}
                />
                <Button
                  fontSize={"lg"}
                  variant={"ghost"}
                  onClick={() => {
                    onSelectedGenre(genre);
                  }}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </GenreListItemContainer>
        ))}
      </ListRoot>
    </>
  );
};

export default GenreList;
