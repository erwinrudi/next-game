import Layout from "../layout/Layout";
import Container from "../components/styled-components/Container";
import {
  ScoreRow,
  ScoreColumn,
  Table,
} from "../components/styled-components/ScoresTable";
import { connect } from "react-redux";
import { useEffect } from "react";
import { replaceGlobalScore } from "../redux/actions";
import PropTypes from "prop-types";

const mapState = (state) => ({
  global_score: state.global_score,
  global_score_loader: state.global_score_loader,
});

const mapDispatch = (dispatch) => ({
  replaceGlobalScore: () => dispatch(replaceGlobalScore()),
});

const LeaderboardPage = ({
  global_score,
  global_score_loader,
  replaceGlobalScore,
}) => {
  useEffect(() => {
    replaceGlobalScore();
  }, []);
  return (
    <Layout title="Help">
      <Container leaderboard>
        {global_score_loader ? (
          <div>Loading new data...</div>
        ) : (
          <Table>
            <thead>
              <ScoreRow>
                <th>No.</th>
                <th>Name</th>
                <th>Address</th>
                <th>Date</th>
                <th>Score</th>
              </ScoreRow>
            </thead>
            <tbody>
              {global_score.map((score, i) => (
                <ScoreRow key={i}>
                  <ScoreColumn>{i + 1}</ScoreColumn>
                  <ScoreColumn>{score.name}</ScoreColumn>
                  <ScoreColumn>
                    {score.address
                      ? score.address.slice(0, 4) +
                        "..." +
                        score.address.slice(38, 42)
                      : "No Data"}
                  </ScoreColumn>
                  <ScoreColumn>
                    {new Date(score.created_at).toLocaleDateString()}
                  </ScoreColumn>
                  <ScoreColumn>
                    <span>{score.score}</span> points
                  </ScoreColumn>
                </ScoreRow>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </Layout>
  );
};

export default connect(mapState, mapDispatch)(LeaderboardPage);

LeaderboardPage.propTypes = {
  global_score: PropTypes.array,
  global_score_loader: PropTypes.bool,
  replaceGlobalScore: PropTypes.func,
};
