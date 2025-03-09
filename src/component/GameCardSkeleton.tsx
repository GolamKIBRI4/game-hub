import { Box, CardBody, CardRoot, Skeleton } from "@chakra-ui/react";

import { SkeletonText } from "../components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <CardRoot>
      <Skeleton height={"200px"} />

      <CardBody>
        <SkeletonText />
      </CardBody>
    </CardRoot>
  );
};

export default GameCardSkeleton;
