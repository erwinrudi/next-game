import { connect } from "react-redux";
import GameNavigatorBottom from "../components/GameNavigatorBottom"
import { startLoading, pushNewAnswer, loadNewQuestion } from "../redux/actions"

const mapState = state => ({
  game_is_started: state.game_status.isStarted,
  game_is_loading: state.game_status.isLoading,
  hintCounter: state.hint_counter,
  random_game: state.random_game,
})

const mapDispatch  = dispatch => ({
  pushNewAnswer: (answer) => dispatch(pushNewAnswer(answer)),
  loadNewQuestion: (db) => dispatch(loadNewQuestion(db)),
  startLoading: () => dispatch(startLoading()),
})

export default connect(mapState, mapDispatch)(GameNavigatorBottom);
