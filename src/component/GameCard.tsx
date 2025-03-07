import { CardRoot, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <CardRoot borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <VStack padding={"5px"}>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platform={game.parent_platforms.map((e) => e.platform)}
        />
      </VStack>
    </CardRoot>
  );
};

export default GameCard;
