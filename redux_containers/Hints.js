import { connect } from "react-redux";
import Hints from "../components/Hints"

const mapState = state => ({
    hints_array: state.hints_array,
})


export default connect(mapState)(Hints);
