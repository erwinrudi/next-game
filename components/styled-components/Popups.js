import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  ${(props) =>
    props.is_visible
      ? `opacity: 1; visibility: visible;`
      : `opacity: 0; visibility: hidden;`}
`;
export const PopupContainer = styled.div`
  width: min(75rem, 95%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--light-black);
  border-radius: 3px;
  font-family: "Ruda";
  font-weight: bold;
`;
export const TopBar = styled.div`
  position: relative;
  padding: 2rem;
  text-align: center;
  background: var(--dark-grey);
  border-radius: 3px 3px 0 0;
`;
export const Close = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate(0, -50%);
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 3rem;
  &:hover {
    transform: translate(0, -50%) rotate(90deg);
  }
`;
export const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: opacityAnim 0.3s;
`;
export const TextInput = styled.input`
  background: black;
  color: white;
  width: min(350px, 95%);
  font-size: 3rem;
  padding: 1rem;
  border: none;
  text-align: center;
  border-radius: 3px;
  font-family: "Ruda";
  font-weight: bold;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px black;
  }
`;
export const TextInputHint = styled.p`
  color: var(--light-red);
  font-size: 1.4rem;
  padding: 1rem 1rem 5rem;
  opacity: ${(props) => (props.visible ? `1` : `0`)};
`;
export const WelcomeText = styled.div`
  color: var(--white);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  text-align: ${(props) => (props.center ? `center` : `left`)};
  width: 100%;
  padding-bottom: 3rem;
`;
export const PlayButton = styled.a`
  color: var(--black);
  background-color: var(--light-grey);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  text-transform: uppercase;
  text-align: center;
  width: 60%;
  padding: 1rem;
  border: 0;
  &:hover {
    background-color: var(--dark-grey);
    color: var(--white);
    cursor: pointer;
  }
  ${props => props.summary && `
    display: block;
    width: 100%;
  `}
`;
export const TD = styled.td`
  padding: 0 1rem;
  &:last-child {
    font-weight: 800;
    color: var(--white);
  }
`
export const ScoreText = styled.div`
  padding: 0 1rem 1rem;
  font-weight: 400;
  font-size: 4.5rem;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
  color: var(--white);
  border-bottom: 2px solid var(--white);
  border-right: 2px solid var(--white);
  box-shadow: 5px 5px 0 var(--dark-grey);
  & span {
    font-size: 2rem;
  }
`
export const SummaryContainer = styled.div`
  display: flex;
  width: 95%;
  padding: 2rem 0;
  justify-content: space-between;
  flex-direction: ${props => props.mobile ? `column` : `row`};
  & > div {
    width: ${props => props.mobile ? `100%` : `50%`};
    margin: 1rem;
  }
`