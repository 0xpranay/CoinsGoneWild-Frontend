import { Flex, Box } from "@chakra-ui/react";
import TitleComponent from "./components/TitleComponent";
import MintProgressBar from "./components/MintProgressBar";
import MintButton from "./components/MintButton";
import NFTShowcase from "./components/NFTShowcase";
import "./App.css";
function App() {
  return (
    <Flex
      className="App"
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={"center"}
      padding={40}
      backgroundColor={"black"}
      backgroundImage={
        "linear-gradient( 109.6deg,  rgba(204,228,247,1) 11.2%, rgba(237,246,250,1) 100.2% )"
      }
    >
      <div>
        <TitleComponent></TitleComponent>
        <MintProgressBar></MintProgressBar>
      </div>
      <div>
        <MintButton></MintButton>
        <NFTShowcase></NFTShowcase>
      </div>
    </Flex>
  );
}

export default App;
