import Layout from "../layout/Layout";
import Container from "../components/styled-components/Container";
import Screenshot from "../redux_containers/Screenshot";
import ScreenshotArrow from "../redux_containers/ScreenshotArrow";
import GameNavigatorTop from "../redux_containers/GameNavigatorTop";
import GameNavigatorBottom from "../redux_containers/GameNavigatorBottom";
import Popup from "../redux_containers/Popup";
import { useState } from "react";


const GamePage = ({popup_to_show, address}) => {
  const [screenshotIndex, setIndex] = useState(0);
  const previousClick = () => screenshotIndex === 0 ? setIndex(2) : setIndex(screenshotIndex - 1);
  const nextClick = () => screenshotIndex === 2 ? setIndex(0) : setIndex(screenshotIndex + 1);

  return (
    <Layout title="Challenge" walletAddress={address}>
      <Container flex>
        <ScreenshotArrow left onClick={previousClick} />
        <Screenshot index={screenshotIndex} />
        <ScreenshotArrow right onClick={nextClick} />
      </Container>
      <GameNavigatorTop />
      <GameNavigatorBottom />
      {popup_to_show && <Popup walletAddress={address} />}
    </Layout>
  );
};

export default GamePage;