import { connect } from "react-redux";
import ScreenshotArrow from "../components/styled-components/Screenshot"

const mapState = state => ({
    game_is_started: state.game_status.isStarted,
})
  
export default connect(mapState)(ScreenshotArrow);
