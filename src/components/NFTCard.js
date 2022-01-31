import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ethers } from "ethers";
const abi = new ethers.utils.Interface([
  "function tokenURI(uint256 tokenId) public view returns(string memory)",
]);
const contractAddress = "0xBc4377668BB685d737Ff66be2F5700A68c4b2635";
const provider = new ethers.providers.AlchemyProvider("rinkeby", "");
async function fetchNFT(tokenId) {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  console.log("Querying for ", tokenId);
  const metadataURI = await contract.tokenURI(tokenId);
  const metadata = await fetch(metadataURI);
  const metadataJson = await metadata.json();
  return [metadataJson.name, metadataJson.image];
}
export default function NFTCard(props) {
  let nftName = "";
  let imageURI = "";
  useEffect(async function () {
    [nftName, imageURI] = await fetchNFT(props.tokenId);
  }, []);

  return (
    <Flex borderColor="red.900">
      <Image src={imageURI}></Image>
      <Flex>
        <Text padding={10} color="black" fontSize={"xl"}>
          {nftName}
        </Text>
      </Flex>
    </Flex>
  );
}
