import { Button, Heading, HStack, Image, ListItem, ListRoot } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListItemContainer from "./GenreListItemContainer";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, IsLoading } = useGenre();
  const SkeletonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
    <Heading fontSize={'3xl'} marginBottom={3}>Genres</Heading>
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
                  objectFit={"cover"}
                  boxSize={"32px"}
                  borderRadius={8}
                  src={getCroppedImage(genre.image_background)}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "extrabold" : "normal"
                  }
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
