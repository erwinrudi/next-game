import { Background, PopupContainer, TopBar, Close, Content, } from "./styled-components/Popups"
import PopupUserData from "./popups/PopupUserData"
import PopupSummary from "../redux_containers/PopupSummary"
import Typography from "./styled-components/Typography"
import PropTypes from 'prop-types'

export default function Popup({ 
    showPopup, 
    startGame, 
    clearUserScore, 
    loadNewQuestion,
    popup_to_show,
    startLoading,
    user_name,
    user_score,
    newUserName,
    walletAddress
   }) {
  const addRecordToMongo = async () => {
      showPopup(false)
      if(user_score.length > 0) {
        const res = await fetch('https://geek.cerassus.usermd.net/addNewScore', {
          headers: {
            "Content-Type": "application/json",
          },
          method: 'POST',
          body: JSON.stringify({ 
            Name: user_name,
            Date: new Date().getTime(),
            Score: user_score.map(score => score = score.score).reduce((acc,score) => acc + score),
          })
        })
      }
  }
  const getNewDatabase = async (difficulty) => {
    showPopup(false)
    clearUserScore()
    startGame()
    startLoading()
    await loadNewQuestion(difficulty)
  }
  return (
    <Background is_visible={true}>
      <PopupContainer>
        <TopBar>
          <Close onClick={() => addRecordToMongo()}>&times;</Close>
          <Typography hint popup uppercase gamefont>
            {popup_to_show === 'userdata'
              ? `Hello gamergeek!`
              : popup_to_show === 'summary'
                ? `Summary`
                : null}
          </Typography>
        </TopBar>
        <Content>
          {popup_to_show === 'userdata'
            ? <PopupUserData 
                gameIsReadyToStart={(difficulty) => getNewDatabase(difficulty)} 
                user={(username) => newUserName(username)}/>
            : popup_to_show === 'summary'
              ? <PopupSummary 
                  close_summary_popup={() => addRecordToMongo()} 
                  walletAddress={walletAddress} />
              : null}
        </Content>
      </PopupContainer>
    </Background>
  );
}

Popup.propTypes = {
  showPopup: PropTypes.func, 
  startGame: PropTypes.func, 
  clearUserScore: PropTypes.func, 
  loadNewQuestion: PropTypes.func, 
  popup_to_show: PropTypes.string, 
  startLoading: PropTypes.func, 
  user_name: PropTypes.string, 
  user_score: PropTypes.array, 
  newUserName: PropTypes.func, 
  walletAddress: PropTypes.string, 
}
