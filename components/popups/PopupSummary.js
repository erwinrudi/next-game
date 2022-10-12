import { Fragment } from "react";
import {
  SummaryContainer,
  TD,
  WelcomeText,
  ScoreText,
  PlayButton,
} from "../styled-components/Popups";
import { useMediaQuery } from "@react-hook/media-query";
import PropTypes from "prop-types";
import axios from "axios";
import { loadUsername } from "../../redux/actions";

export default function PopupSummary({ close_summary_popup, user_score, walletAddress }) {
  const mobile = useMediaQuery("(max-width: 700px)");

  const inputLeaderBoard = (name, score, address) => {
    const requestUrl = `https://gamegeek.frackment.id/api/leaderboard`;
    const formRequestData = new FormData();
    formRequestData.append("name", name);
    formRequestData.append("address", address);
    formRequestData.append("score", score);

    axios.post(requestUrl, formRequestData).then(function (response) {
      console.log(response);
      close_summary_popup();
    });
  };

  const getUsername = async () => {
    let user_name = await loadUsername()
    return user_name
  };

  return (
    <Fragment>
      {user_score && user_score.length > 0 && (
        <SummaryContainer mobile={mobile}>
          <div>
            <WelcomeText>The Game</WelcomeText>
            <table>
              <tr>
                <TD>Correct answers:</TD>
                <TD>{user_score.filter((x) => x.correct).length}</TD>
              </tr>
              <tr>
                <TD>Wrong answers:</TD>
                <TD>{user_score.filter((x) => !x.correct && x.time).length}</TD>
              </tr>
              <tr>
                <TD>Skipped answers:</TD>
                <TD>{user_score.filter((x) => x.skip).length}</TD>
              </tr>
              <tr>
                <TD>Hints used:</TD>
                <TD>
                  {user_score
                    .map((x) => (x = x.hints_used))
                    .reduce((acc, y) => acc + y, 0)}
                </TD>
              </tr>
              <tr>
                <TD>Quickest response:</TD>
                <TD>
                  {(user_score
                    .map((x) => (x = x.time))
                    .sort((a, b) => a - b)[0] / 1000 || 0) + " sec"}
                </TD>
              </tr>
              <tr>
                <TD>Slowest response:</TD>
                <TD>
                  {(user_score
                    .filter((x) => x.time)
                    .map((x) => (x = x.time))
                    .sort((a, b) => a - b)[
                    user_score.filter((x) => x.time).length - 1
                  ] / 1000 || 0) + " sec"}
                </TD>
              </tr>
              <tr>
                <TD>Average time response:</TD>
                <TD>
                  {(
                    user_score
                      .filter((x) => x.time)
                      .map((x) => (x = x.time))
                      .reduce((acc, x) => acc + x, 0) /
                    user_score.length /
                    1000
                  ).toFixed(3) + " sec"}
                </TD>
              </tr>
            </table>
          </div>
          <div>
            <WelcomeText>Score:</WelcomeText>
            <ScoreText>
              {user_score
                .map((score) => (score = score.score))
                .reduce((acc, score) => acc + score)
                .toLocaleString()}{" "}
              <span>points</span>
            </ScoreText>
            <PlayButton
              summary
              onClick={async () => {
                let score = user_score
                  .map((score) => (score = score.score))
                  .reduce((acc, score) => acc + score);
                const user_name = await getUsername();
                inputLeaderBoard(user_name, score, walletAddress);
              }}
            >
              Finish
            </PlayButton>
          </div>
        </SummaryContainer>
      )}
    </Fragment>
  );
}

PopupSummary.propTypes = {
  close_summary_popup: PropTypes.func,
  user_score: PropTypes.array,
  walletAddress: PropTypes.string,
};
