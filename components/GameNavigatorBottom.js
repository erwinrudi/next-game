import GameInterfaceContainer from "./styled-components/GameInterfaceContainer";
import Typography from "./styled-components/Typography";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

export default function GameNavigatorBottom({
  game_is_started, 
  game_is_loading, 
  hintCounter, 
  random_game, 
  pushNewAnswer,
  loadNewQuestion,
  startLoading }) {
  const [answerTimeStart, setAnswerTimeStart] = useState(false)
  const checkAnswer = async (answer) => {
    const answerTimeEnd = new Date().getTime()
    const user_answer = answer === random_game.name
        ? {
            title: random_game.name,
            time: answerTimeEnd - answerTimeStart,
            score: Number((1000/(answerTimeEnd - answerTimeStart)*10000*((10-hintCounter)/10)).toFixed()),
            correct: true,
            hints_used: hintCounter,
          }
        : {
            title: random_game.name,
            time: answerTimeEnd - answerTimeStart,
            score: 0,
            correct: false,
            hints_used: hintCounter,
          };
    startLoading()
    pushNewAnswer(user_answer)
    loadNewQuestion()
  }
  useEffect(() => {
    !game_is_loading && setAnswerTimeStart(new Date().getTime())
  }, [game_is_loading])
  return (
    <GameInterfaceContainer bottom>
      {(game_is_started && !game_is_loading && random_game.answers) 
        ? random_game.answers.map((answer, i) => (
          <Typography 
            key={"key0021"+i} 
            answer 
            onClick={(answer) => checkAnswer(answer.target.innerText)}>{answer}
          </Typography>))
        : ``}
    </GameInterfaceContainer>
  )
}

GameNavigatorBottom.propTypes = {
  game_is_started: PropTypes.bool,
  game_is_loading: PropTypes.bool,
  hintCounter: PropTypes.number,
  random_game: PropTypes.object,
  pushNewAnswer: PropTypes.func,
  loadNewQuestion: PropTypes.func,
  startLoading: PropTypes.func,
}