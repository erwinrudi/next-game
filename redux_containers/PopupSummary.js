import { connect } from "react-redux";
import PopupSummary from "../components/popups/PopupSummary"

const mapState = state => ({
    user_score: state.user_score,
  })

export default connect(mapState)(PopupSummary);
