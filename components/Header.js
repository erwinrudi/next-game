import Logo from "../redux_containers/Logo"
import Typography from "./styled-components/Typography"
import Container from "./styled-components/Container"
import { HeaderContainer } from "./styled-components/Container"
import Navigation from "./Navigation"
import Link from "next/link"
import MainCounter from "../redux_containers/MainCounter"
import PropTypes from 'prop-types'

export default function Header({ clearUserScore, endGame }) {
  const handleClick = () => {
    clearUserScore()
    endGame()
  }
  return (
    <HeaderContainer>
      <Container inline>
        <Logo />
        <Link href="/">
          <a><Typography h1>gamergeek</Typography></a>
        </Link>
      </Container>
      <Navigation>
        <Link href={`/leaderboard`}>
          <a onClick={handleClick} >score leaderboard</a>
        </Link>
        <Link href={`/profile`}>
          <a onClick={handleClick}>profile</a>
        </Link>
        <Link href={`/help`}>
          <a onClick={handleClick}>help</a>
        </Link>
        <MainCounter />
      </Navigation>
    </HeaderContainer>
  );
}

Header.propTypes = {
  clearUserScore: PropTypes.func,
  endGame: PropTypes.func,
}