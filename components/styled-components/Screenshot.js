import styled from "styled-components"

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

const ArrowContainer = styled.div`
    position: relative;
    width: 4rem;
    display: ${props => props.game_is_started ? `block` : `none`};
    &:hover {
        cursor: pointer;
    }
    `
const Top = styled.div`
    height: 2px;
    width: 4rem;
    background-color: var(--font-color);
    position: absolute;
    top: 50%;
    ${props => props.left && (`
        transform: translateY(-800%) rotate(-56deg);
        `
    )}
    ${props => props.right && (`
        transform: translateY(-800%) rotate(56deg);
        `
    )}
    `
const Bottom = styled.div`
    height: 2px;
    width: 4rem;
    background-color: var(--font-color);
    position: absolute;
    top: 50%;
    ${props => props.left && (`
        transform: translateY(800%) rotate(56deg);
        `
    )}
    ${props => props.right && (`
        transform: translateY(800%) rotate(-56deg);
        `
    )}
    `

export default function ScreenshotArrow(props) {
    return (
        <ArrowContainer {...props}>
            <Top {...props} />
            <Bottom {...props} />
        </ArrowContainer>
    )
}