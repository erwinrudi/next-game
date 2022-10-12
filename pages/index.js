import { connect } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import GamePage from "./game";
import Connect from "./connect_wallet";

const mapState = (state) => ({
  popup_to_show: state.popup_to_show,
});

const HomePage = ({ popup_to_show }) => {
  const [client, setclient] = useState({
    isConnected: false,
  });

  const [address, setAddress] = useState("");

  const applyAddress = (address) => {
    setclient({ isConnected: true });
    setAddress(address);
  };

  return (
    <div>
      {client.isConnected ? (
        <GamePage popup_to_show={popup_to_show} address={address} />
      ) : (
        <Connect
          connect_wallet={(address) => {
            applyAddress(address)
          }}
        />
      )}
    </div>
  );
  // return (
  //   <Layout title="Challenge">
  //     <Container flex>
  //       <ScreenshotArrow left onClick={previousClick} />
  //       <Screenshot index={screenshotIndex} />
  //       <ScreenshotArrow right onClick={nextClick} />
  //     </Container>
  //     <GameNavigatorTop />
  //     <GameNavigatorBottom />
  //     {popup_to_show && <Popup />}
  //   </Layout>
  // );
};

export default connect(mapState)(HomePage);

HomePage.propTypes = {
  popup_to_show: PropTypes.string,
};
