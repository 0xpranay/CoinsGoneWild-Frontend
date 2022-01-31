import { Flex } from "@chakra-ui/react";
import React from "react";
import NFTCard from "./NFTCard";
const tokenIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export default function NFTShowcase() {
  return (
    <Flex flexWrap={"wrap"} flexDirection={["column", "column", "row"]}>
      {/* {tokenIds.map(function (value, index, array) {
        return <NFTCard tokenId={1000 + value}></NFTCard>;
      })} */}
      <NFTCard tokenId={1000 + 0}></NFTCard>
      <NFTCard tokenId={1000 + 1}></NFTCard>
      <NFTCard tokenId={1000 + 2}></NFTCard>
      <NFTCard tokenId={1000 + 3}></NFTCard>
      <NFTCard tokenId={1000 + 4}></NFTCard>
      <NFTCard tokenId={1000 + 5}></NFTCard>
      <NFTCard tokenId={1000 + 6}></NFTCard>
      <NFTCard tokenId={1000 + 7}></NFTCard>
      <NFTCard tokenId={1000 + 8}></NFTCard>
    </Flex>
  );
}
