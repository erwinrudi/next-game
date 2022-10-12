import styled from "styled-components";
import { useMediaQuery } from '@react-hook/media-query'

const GameInterfaceBackground = styled.div`
  position: relative;
  border-radius: 5px;
  ${(props) => props.top && `
    background: linear-gradient(0deg, rgba(80, 80, 80, 0.25) 15%, rgba(196, 196, 196, 0) 88%);
    height: ${props.mobileHeight ? `10vh` : `15vh`};
    clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
  `}
  ${(props) => props.bottom && `
    background: linear-gradient(180deg, rgba(80, 80, 80, 0.25) 15%, rgba(196, 196, 196, 0) 88%);
    height: ${props.mobileHeight ? `15vh` : `20vh`};
  `}
  /* ${(props) => props.mobileWidth && `
    height: 20vh;
  `} */
`

const GameInterfaceContainer = styled.div`
    position: absolute;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    ${props => props.top && (props.mobileWidth 
      ? `bottom: -1rem;
         width: 70%;
         left: 50%;
         transform: translateX(-50%);
        ` 
      : `bottom: 0`
    )};
    ${props => props.bottom && (props.mobileWidth 
      ? `flex-direction: column;
         top: 25%; 
         align-items: center;`
      : `top: 25%; 
         align-items: center;`
      )};
    `

export default function GameInterface({ ...props }) {
  const mobileWidth = useMediaQuery('(max-width: 700px)')
  const mobileHeight = useMediaQuery('(max-height: 650px)')
  return (
    <GameInterfaceBackground mobileWidth={mobileWidth} mobileHeight={mobileHeight} {...props}>
      <GameInterfaceContainer mobileWidth={mobileWidth} {...props}>
        {props.children}
      </GameInterfaceContainer>
    </GameInterfaceBackground>
    )
}
