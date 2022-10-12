import { connect } from "react-redux"
import Popup from "../components/Popup"
import { 
    showPopup, 
    loadNewQuestion, 
    startGame,
    clearUserScore,
    startLoading,
    newUserName,
 } from "../redux/actions"

const mapState = state => ({
    popup_to_show: state.popup_to_show,
    user_score: state.user_score,
    user_name: state.user_name,
  })

const mapDispatch = dispatch => ({
    showPopup: (popup_name) => dispatch(showPopup(popup_name)),
    startGame: () => dispatch(startGame()),
    startLoading: () => dispatch(startLoading()),
    loadNewQuestion: (db) => dispatch(loadNewQuestion(db)),
    clearUserScore: () => dispatch(clearUserScore()),
    newUserName: (name) => dispatch(newUserName(name)),
})

export default connect(mapState, mapDispatch)(Popup);
