import { CardBody, CardRoot, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

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
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
