import { HStack, Image, ListItem, ListRoot, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <>
      <ListRoot>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />

              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </ListRoot>
    </>
  );
};

export default GenreList;
