import GameInterfaceContainer from "./styled-components/GameInterfaceContainer"
import Typography from "./styled-components/Typography"
import { useState, useEffect, Fragment } from "react"
import { useMediaQuery } from '@react-hook/media-query'
import PropTypes from 'prop-types'

export default function GameNavigatorTop({ 
  game_is_started, 
  game_is_loading,
  showPopup,
  endGame, 
  showHint, 
  loadNewQuestion,
  startLoading,
  random_game,
  setHintCounter,
  hintCounter,
  pushNewAnswer,
  last_users_answer,
 }) {
  const mobile = useMediaQuery('(max-width: 700px)')
  const [hints, setHints] = useState(false)
  const handleClickHint = () => {
    showHint(...hints.splice(Math.floor(Math.random() * hints.length), 1))
    setHintCounter()
  }
  const handleClickSkip = () => {
    pushNewAnswer({
      score: 0,
      hints_used: hintCounter,
      skip: true,
    })
    startLoading()
    loadNewQuestion()
  }
  useEffect(() => {
    Object.keys(random_game).length > 0  && setHints(random_game.hints)
  }, [random_game])
  useEffect(() => {
    if(Object.keys(random_game).length > 0 && !game_is_started) {
      pushNewAnswer({
        score: 0,
        hints_used: hintCounter,
      })
      showPopup('summary')
    }
  }, [game_is_started])
  return (
      <GameInterfaceContainer top>    
        {
        !game_is_started 
          ? <Typography link onClick={() => showPopup('userdata')}>start a new challenge</Typography>
          : game_is_loading 
            ? <Typography link>
              {mobile 
                ? last_users_answer.correct
                  ? last_users_answer.score
                  : last_users_answer.title
                    ? `Wrong`
                    : ``
                : "loading"
              }
              {(last_users_answer.score && mobile) ? " points" : ""}
              </Typography>
            : (
              <Fragment>
                {hintCounter < 3 && 
                <Typography link onClick={() => handleClickHint()}>get a hint</Typography>}
                <Typography link onClick={() => handleClickSkip()}>skip</Typography>
                <Typography link onClick={() => endGame()}>quit</Typography>
              </Fragment>
            )
        }
      </GameInterfaceContainer>
  )
}

GameNavigatorTop.propTypes = {
  game_is_started: PropTypes.bool,
  game_is_loading: PropTypes.bool,
  showPopup: PropTypes.func,
  endGame: PropTypes.func,
  showHint: PropTypes.func, 
  loadNewQuestion: PropTypes.func,
  startLoading: PropTypes.func,
  random_game: PropTypes.object,
  setHintCounter: PropTypes.func,
  hintCounter: PropTypes.number,
  pushNewAnswer: PropTypes.func,
  last_users_answer: PropTypes.object,
}