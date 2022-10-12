import { ScreenshotContainer, SingleScreenshot } from "./styled-components/Screenshot"
import Logo from "../redux_containers/Logo";
import { useState, useEffect, Fragment } from "react";
import PropTypes from 'prop-types'

export default function Screenshot({
  game_is_started,
  game_is_loading,
  index,
  screenshots,
  resumeGame,
}) {
  const [loading, setLoading] = useState(0);
  const [time_counter, set_time_counter] = useState(0);
  const resume_game = (time) => {
    time < 1500 
        ? setTimeout(() => {
                resumeGame()
            }, 1500)
        : resumeGame()
    setLoading(0);
  };
  useEffect(() => {
    switch (loading) {
      case 1: {
        set_time_counter(new Date().getTime());
        break;
      }
      case 3: {
        const end = new Date().getTime();
        resume_game(end - time_counter);
        break;
      }
    }
  }, [loading]);
  return (
    <ScreenshotContainer>
      {game_is_started ? (
        <Fragment>
          {Array.isArray(screenshots) &&
            screenshots.map((img, i) => (
              <SingleScreenshot
                key={i}
                src={img}
                alt="screenshot_img"
                onLoad={() => setLoading(loading + 1)}
                status={game_is_loading}
                index={index}
              />
            ))}
          {game_is_loading && <Logo big />}
        </Fragment>
      ) : (
        <Logo big />
      )}
    </ScreenshotContainer>
  );
}

Screenshot.propTypes = {
  game_is_started: PropTypes.bool,
  game_is_loading: PropTypes.bool,
  index: PropTypes.number,
  screenshots: PropTypes.array,
  resumeGame: PropTypes.func,
}