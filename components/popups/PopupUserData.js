import { useState, useEffect, Fragment } from "react"
import { WelcomeText, TextInput, TextInputHint, PlayButton } from "../styled-components/Popups"
import { game_difficulty } from "../../redux/const"
import PropTypes from 'prop-types'

export default function PopupUserData({ gameIsReadyToStart, user }) {
  const [username, setUsername] = useState(false)
  const [warning, setWarning] = useState(false)
  const [difficulty, setDifficulty] = useState(false)
  const [usernamePanel, showUsernamePanel] = useState(true)
  const handleTyping = (e) => {
    (0 < e.target.value.length && e.target.value.length < 3) 
      ? setWarning(true)
      : setWarning(false)
    setUsername(e.target.value)
  }
  const validateUserName = (e) => {
    (e.target.id === "play" || e.keyCode == 13) && (
      (warning || !username) 
        ? alert('Wrong username! Try different one!') 
        : showUsernamePanel(false)
    )
  }
  useEffect(() => {
    if(difficulty) {
      gameIsReadyToStart(difficulty)
    }
  },[difficulty])
  useEffect(() => {
    !usernamePanel && user(username)
  }, [usernamePanel])
  return (
    <Fragment>
    {usernamePanel ? (
      <Fragment>
        <WelcomeText>Let’s see how good you are! Starting from your name...</WelcomeText>
        <TextInput type="text" onKeyUp={(e) => validateUserName(e)} onChange={(e) => handleTyping(e)} />
        <TextInputHint visible={warning}>Wrong nickname</TextInputHint>
        <PlayButton id="play" onClick={(e) => validateUserName(e)}>Let's Play!</PlayButton>
      </Fragment>
    ) : (
      <Fragment>
        <WelcomeText center>Set game difficulty...</WelcomeText>
        {game_difficulty.map((diff_lvl, i) => (
          <PlayButton key={"key0011" + i} onClick={() => setDifficulty(diff_lvl)}>
            {diff_lvl}
          </PlayButton>
        ))}
      </Fragment>
    )}
    </Fragment>
  )
}

PopupUserData.propTypes = {
  gameIsReadyToStart: PropTypes.func,
  user: PropTypes.func,
}