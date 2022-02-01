import { Flex, Button, useDisclosure, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import { ethers } from "ethers";
import NFTCard from "./NFTCard";
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();
async function throwConfetti() {
  await jsConfetti.addConfetti({
    emojis: ["🌈", "🦄"],
  });
}
const abi = new ethers.utils.Interface([
  "function mintWildCoin() external payable",
  "function balanceOf(address owner) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId)",
]);
export default function MintButton() {
  const { account, active, library } = useWeb3React();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loadState, changeLoadState] = useState(false);
  const [tokenId, setTokenId] = useState(1009);
  async function mintNFT() {
    if (!active) {
      alert("Connect wallet first");
      return;
    }
    changeLoadState(true);
    const signer = library.getSigner();
    const contractAddress = "0xBc4377668BB685d737Ff66be2F5700A68c4b2635";
    const coinsContract = new ethers.Contract(contractAddress, abi, signer);
    const mintTxn = await coinsContract.mintWildCoin({
      value: ethers.utils.parseEther("0.008"),
    });
    await mintTxn.wait();
    console.log(mintTxn.hash);
    const balance = await coinsContract.balanceOf(account);
    const tokenId = await coinsContract.tokenOfOwnerByIndex(
      account,
      balance - 1
    );
    return tokenId;
  }

  async function mintAndShow() {
    try {
      const tokenId = await mintNFT();
      setTokenId(tokenId);
      onOpen();
      changeLoadState(false);
      throwConfetti();
    } catch (error) {
      console.log(error);
      changeLoadState(false);
    }
  }
  return (
    <>
      <Flex>
        <Button
          isLoading={loadState}
          colorScheme={"teal"}
          size="lg"
          padding={7}
          onClick={mintAndShow}
          isDisabled={!active}
          loadingText={"Minting"}
        >
          Mint a Wild Coin
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>
            <Text align={"center"}>Here's your Wild Coin!</Text>
          </ModalHeader>
          <ModalBody>
            <Box width={"100%"} height={"100%"}>
              <NFTCard tokenId={tokenId} fullCard={true}></NFTCard>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
