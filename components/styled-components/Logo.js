import styled from "styled-components";

export const LogoContainer = styled.div`
  width: ${(props) => (props.big ? `min(300px, 20vw)` : `50px`)};
  height: ${(props) => (props.big ? `min(300px, 20vw)` : `50px`)};
  position: relative;
`;
export const BigBall = styled.div`
  width: ${(props) => (props.big ? `min(300px, 20vw)` : `50px`)};
  height: ${(props) => (props.big ? `min(300px, 20vw)` : `50px`)};
  position: absolute;
  background: rgba(196, 196, 196, 0.5);
  border-radius: 50%;
  top: 8px;
`;
export const SmallBall = styled.div`
  width: ${(props) => (props.big ? `min(230px, 15vw)` : `33px`)};
  height: ${(props) => (props.big ? `min(230px, 15vw)` : `33px`)};
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 12.5%;
  background: ${(props) =>
    !props.colorize ? `rgba(230, 63, 63, 0.85)` : `rgba(40, 170, 50, 0.85)`};
  border-radius: 50%;
  ${(props) =>
    props.status &&
    props.big &&
    `
        animation: resizeBall 1s linear 0s infinite;
        animation-play-state: running;
    `};
`;
export const MiddleBall = styled.div`
  width: 100%;
  height: 100%;
  animation: rolling 1s ease-in-out 0s infinite;
  animation-play-state: ${(props) =>
    props.status && props.big ? `running` : `paused`};
`;
export const Icon = styled.div`
  font-size: 3rem;
  font-weight: 600;
  &:last-child {
    font-size: 2rem;
  }
`;
