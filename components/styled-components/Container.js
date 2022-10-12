import styled from "styled-components"
import { useMediaQuery } from '@react-hook/media-query'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: baseline;
  padding: 3vw;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const MainContainer = styled.main`
  width: min(120rem, 100%);
  margin: 0 auto;
  //height: ${props => props.challenge ? `65vh` : `75vh`};
  height: 75vh;
`;

export const CounterContainer = styled.div`
  text-transform: lowercase;
  font-weight: 900;
  font-size: 3rem;
  display: inline-block;
  ${(props) => props.counter < 10 && `color: var(--red)`};
  max-width: 9ch;
`;

const HintContainer = styled.footer`
    position: relative;
    border-radius: 5px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, rgba(94, 90, 0, 0.25) 15%, rgba(255, 255, 255, 0) 88%);
    height: 12.5rem;
    width: 100%;
`
const HintElements = styled.div`
    position: absolute;
    left: 0;
    display: flex;
    align-items: ${props => props.mobile ? `center` : `flex-end%`};
    justify-content: space-around;
    width: 100%;
    bottom: ${props => props.mobile ? `10%` : `33%`};
`

const InlineContainer = styled.div`
    &, & > * {
        display: inline-block;
    }`

const Container = styled.div`
    margin: 0 auto;
    width: min(95rem, 95%);

    ${props => props.height && `
        height: ${props.height}
    `};
    ${props => props.flex && `
        display: flex;
        flex-direction: ${props.flex};
    `};
    `
const LeaderboardContainer = styled.div`
    margin: 0 auto;
    width: min(95rem, 95%);
    background: rgba(39, 39, 39, 0.67);
    box-shadow: 4px 4px 10px rgba(255,255,255,0.25);
    border-radius: 3px;
    border-bottom: 2px solid rgb(255 255 255 / 34%);
    border-right: 2px solid rgb(255 255 255 / 34%);
    border-left: 2px solid rgb(255 255 255 / 20%);
    border-top: 2px solid rgb(255 255 255 / 20%);
    padding: 3vw;   
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 100%;
    ${props => props.help && `
        background: rgba(39, 39, 39, 0.55);
        justify-content: space-around;
        align-items: flex-start;
    `};
`
const ProfileContainer = styled.div`
    margin: 0 auto;
    width: min(95rem, 95%);
    background: rgba(39, 39, 39, 0.67);
    box-shadow: 4px 4px 10px rgba(255,255,255,0.25);
    border-radius: 3px;
    border-bottom: 2px solid rgb(255 255 255 / 34%);
    border-right: 2px solid rgb(255 255 255 / 34%);
    border-left: 2px solid rgb(255 255 255 / 20%);
    border-top: 2px solid rgb(255 255 255 / 20%);
    padding: 3vw;   
    flex-direction: column; 
    height: 100%;
    ${props => props.help && `
        background: rgba(39, 39, 39, 0.55);
        justify-content: space-around;
        align-items: flex-start;
    `};
`

export const ScreenshotContainer = styled.div`
  background-color: var(--black);
  width: calc(85% - 4rem);
  padding-bottom: 2vw;
  border-radius: 5px;
  box-shadow: 0 0 25px #fff;
  margin: 0 auto;
  display: flex;
  position: relative;
  & > div {
    margin: 8% auto;
  }
`;

export const SingleScreenshot = styled.img`
  display: ${(props) => (!props.status ? `block` : `none`)};
  width: 97%;
  transform: translate(1.5%, 2%);
  margin: auto;
  position: relative;
  border-radius: 3px;
  transition: all 0.3s;
  z-index: 0;
  opacity: 0;
  min-width: 97%;
  max-height: 420px;
  &:first-child {
    left: 0%;
  }
  &:nth-child(2) {
    left: -97%;
  }
  &:nth-child(3) {
    left: -194%;
  }
  ${(props) =>
    !props.status &&
    (props.index === 0
      ? `
                &:first-child {
                    z-index: 10;
                    opacity: 1;
                }
                &:not(:first-child) {
                    z-index: 0;
                    opacity: 0;
                }
                `
      : props.index === 1
      ? `
                &:nth-child(2) {
                    z-index: 10;
                    opacity: 1;
                }
                &:not(:nth-child(2)) {
                    z-index: 0;
                    opacity: 0;
                }
                `
      : `
                &:nth-child(3) {
                    z-index: 10;
                    opacity: 1;
                }
                &:not(:nth-child(3)) {
                    z-index: 0;
                    opacity: 0;
                }
                `)}
`;

const Containers = ({ children, ...props}) => {
    const mobile = useMediaQuery('(max-width: 700px)')
    return (
        props.inline && <InlineContainer>{children}</InlineContainer> ||
        props.leaderboard && <LeaderboardContainer>{children}</LeaderboardContainer> ||
        props.profile && <ProfileContainer>{children}</ProfileContainer> ||
        props.help && <LeaderboardContainer help>{children}</LeaderboardContainer> ||
        props.hint && <HintContainer><HintElements mobile={mobile}>{children}</HintElements></HintContainer> ||
        <Container {...props}>{children}</Container>
    )
}

export default Containers