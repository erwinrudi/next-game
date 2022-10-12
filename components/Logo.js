import { LogoContainer, BigBall, MiddleBall, SmallBall, Icon,} from "./styled-components/Logo";
import { Fragment } from "react";
import { useMediaQuery } from '@react-hook/media-query'
import PropTypes from 'prop-types'

export default function Logo({ big, game_status, last_users_answer }) {
  const mobile = useMediaQuery('(max-width: 700px)')
  return (
    <LogoContainer big={big}>
      <BigBall big={big}>
        <MiddleBall big={big} status={game_status.isLoading}>
          <SmallBall
            big={big}
            colorize={big && last_users_answer ? last_users_answer.correct : false}
            status={game_status.isLoading}
          >
            {game_status.isLoading && big && (
              <Fragment>
                <Icon>
                  {!mobile 
                    ? last_users_answer.correct
                      ? last_users_answer.score
                      : last_users_answer.title
                        ? `Wrong`
                        : ``
                    : ``
                  }
                </Icon>
                <Icon>{!mobile && (last_users_answer.score > 0 ? `points` : ``)}</Icon>
              </Fragment>
            )}
          </SmallBall>
        </MiddleBall>
      </BigBall>
    </LogoContainer>
  );
}

Logo.propTypes = {
  big: PropTypes.bool,
  last_users_answer: PropTypes.object,
  game_status: PropTypes.object,
}