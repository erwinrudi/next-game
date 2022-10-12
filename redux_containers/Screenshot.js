import { connect } from "react-redux"
import Screenshot from "../components/Screenshot"
import { resumeGame } from "../redux/actions"

const mapState = state => ({
    game_is_started: state.game_status.isStarted,
    game_is_loading: state.game_status.isLoading,
    screenshots: state.random_game
        ? state.random_game.screenshots
        : [],
})

const mapDispatch  = dispatch => ({
    resumeGame: () => dispatch(resumeGame()),
})

export default connect(mapState, mapDispatch)(Screenshot)
