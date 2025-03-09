import {
  CardBody,
  CardRoot,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <CardRoot >
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platform={game.parent_platforms.map((e) => e.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </CardRoot>
  );
};

export default GameCard;
