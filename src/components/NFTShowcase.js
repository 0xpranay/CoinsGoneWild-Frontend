import { Flex } from "@chakra-ui/react";
import React from "react";
import NFTCard from "./NFTCard";
const tokenIds = [1, 2, 3, 4, 5, 6, 7, 8];
export default function NFTShowcase() {
  return (
    <Flex
      flexWrap={"wrap"}
      flexDirection={["column", "column", "row"]}
      boxSize={"7xl"}
    >
      {tokenIds.map(function (value, index, array) {
        return <NFTCard tokenId={1000 + value} key={index}></NFTCard>;
      })}
    </Flex>
  );
}
