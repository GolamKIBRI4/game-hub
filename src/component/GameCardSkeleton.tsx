import { Box, CardBody, CardRoot, Skeleton } from "@chakra-ui/react";

import React from "react";
import { SkeletonText } from "../components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <CardRoot borderRadius={10} width={"300px"} overflow={"hidden"}>
      <Skeleton height={"200px"} />

      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
