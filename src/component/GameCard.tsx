import { CardBody, CardRoot, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <CardRoot>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platform={game.parent_platforms.map((e) => e.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name} <Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
