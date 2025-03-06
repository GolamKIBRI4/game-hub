import { CardRoot, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <CardRoot borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Heading fontSize={"2xl"}>{game.name}</Heading>
    </CardRoot>
  );
};

export default GameCard;
