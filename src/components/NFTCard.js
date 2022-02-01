import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
const abi = new ethers.utils.Interface([
  "function tokenURI(uint256 tokenId) public view returns(string memory)",
]);
const contractAddress = "0xBc4377668BB685d737Ff66be2F5700A68c4b2635";
const provider = new ethers.providers.AlchemyProvider(
  "rinkeby",
  "u2bJ_xZxEmOoNkHS8X8nGxn8qDMXe27-"
);
async function fetchNFT(tokenId) {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const metadataURI = await contract.tokenURI(tokenId);
  const metadata = await fetch(metadataURI);
  const metadataJson = await metadata.json();
  return [metadataJson.name, metadataJson.image];
}
export default function NFTCard(props) {
  const [nftName, setNftName] = useState("");
  const [imageURI, setImageURI] = useState("");
  useEffect(
    function () {
      async function fetchItems() {
        let a, b;
        [a, b] = await fetchNFT(props.tokenId);
        setNftName(a);
        setImageURI(b);
      }
      fetchItems();
    },
    [props.tokenId]
  );

  return (
    <>
      {props.fullCard ? (
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={2}
        >
          <Image src={imageURI} borderRadius={"20px"}></Image>
          <Flex justifyContent={"center"}>
            <Text color="black" fontSize={20}>
              {nftName}
            </Text>
          </Flex>
        </Flex>
      ) : (
        <Flex
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={2}
          maxW={"25%"}
          width={"25%"}
          maxH={"30%"}
          height={"30%"}
        >
          <Image src={imageURI} borderRadius={"20px"}></Image>
          <Flex justifyContent={"center"}>
            <Text color="black" fontSize={20}>
              {nftName}
            </Text>
          </Flex>
        </Flex>
      )}
    </>
  );
}
