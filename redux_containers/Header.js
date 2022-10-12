import { connect } from "react-redux"
import Header from "../components/Header"
import { clearUserScore, endGame } from "../redux/actions"

const mapDispatch  = dispatch => ({
    endGame: () => dispatch(endGame()),
    clearUserScore: () => dispatch(clearUserScore()),
  })

export default connect(null, mapDispatch)(Header);