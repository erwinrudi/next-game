import { useState, useEffect } from "react";
import Container from "../components/styled-components/Container";
import Typography from "../components/styled-components/Typography";
import Layout from "../layout/Layout";
import {
  ScoreRow,
  ScoreColumn,
  Table,
} from "../components/styled-components/ScoresTable";
import { connect } from "react-redux";
import { loadHistoryPoints } from "../redux/actions";
import PropTypes from "prop-types";
import Wallet from 'qp-walletprovider';



const mapState = (state) => ({
  history_score: state.history_score,
  history_score_loader: state.history_score_loader,
});

const mapDispatch = (dispatch) => ({
  loadHistoryPoints: (address) => dispatch(loadHistoryPoints(address)),
});

const Profile = ({
  history_score,
  history_score_loader,
  loadHistoryPoints,
}) => {
  const [client, setclient] = useState({
    isConnected: false,
    address: "",
  });

  const [haveMetamask, sethaveMetamask] = useState(true);

  const checkConnection = async () => {
    let wallet = new Wallet();
    wallet.getAccount().then((res) => {
      connect_wallet(res[0].address);
      setclient({
        isConnected: true,
        address: res[0].address,
      });
    }).catch((e) => {
      setclient({
        isConnected: false,
        address: "",
      });
    })
  };

  useEffect(() => {
    checkConnection();
  }, []);

  useEffect(() => {
    if (client.address) {
      loadHistoryPoints(client.address);
    }
  }, [client]);

  return (
    <Layout title="Profile">
      <Container profile>
        <div
          style={{
            padding: "30px 10px",
            border: "1px grey solid",
            borderRadius: 6,
            marginBottom: 40,
          }}
        >
          <Typography p>Address : {client.address}</Typography>
          <Typography p>Total Points : {history_score.total}</Typography>
        </div>
        <div>
          <Typography h1>History</Typography>
          {history_score_loader ? (
            <div>Loading new data...</div>
          ) : (
            <Table>
              <thead>
                <ScoreRow>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Points</th>
                </ScoreRow>
              </thead>
              <tbody>
                {history_score.history.map((score, i) => (
                  <ScoreRow key={i}>
                    <ScoreColumn>{i + 1}</ScoreColumn>
                    <ScoreColumn>{score.name}</ScoreColumn>
                    <ScoreColumn>
                      <span>{score.score}</span> points
                    </ScoreColumn>
                  </ScoreRow>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default connect(mapState, mapDispatch)(Profile);

Profile.propTypes = {
  history_score: PropTypes.object,
  history_score_loader: PropTypes.bool,
  loadHistoryPoints: PropTypes.func,
};
