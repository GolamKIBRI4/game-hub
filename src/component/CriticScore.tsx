import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 89 ? "green" : score < 90 ? "yellow" : "";
  return (
    <Badge
      fontSize={"14px"}
      colorPalette={color}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
