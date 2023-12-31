import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonLoading = () => {
  return (
    <Card className="rounded-md overflow-hidden">
      <Skeleton w="15.5rem" h="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonLoading;
