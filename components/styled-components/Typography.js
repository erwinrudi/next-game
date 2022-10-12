import styled from "styled-components";
import { useMediaQuery } from '@react-hook/media-query'

const H1 = styled.h1`
  text-transform: uppercase;
  font-weight: 900;
  font-size: clamp(3.8rem, 2.5vw, 4.8rem);
  margin: 0 4vw;
`;

const H2 = styled.h2`
  font-weight: 600;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: var(--white);
`;

const P = styled.p`
  color: var(--white);
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  text-align: justify;
  ${(props) => props.padding && `padding: ${props.padding};`}
`;

const HintText = styled.div`
  font-family:  ${props => props.gamefont ? `Ruda` : 'Montserrat'};
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  letter-spacing: 0.05em;
  text-align: center;
  width: ${props => props.popup ? `100%` : `25%`};
  text-transform: ${props => props.uppercase ? `uppercase` : 'capitalize'};
  & span {
    font-weight: 600;
  }
`;

const SiteLink = styled.a`
  &,
  &:link,
  &:active,
  &:visited {
    position: relative;
    bottom: 0;
    transition: all .2s;
    z-index: 10000;
    /* ${(props) => !props.answer && `animation: fromAbove .2s 1;`} */
    animation: fromAbove .2s 1;
    font-weight: normal;
    font-size: clamp(1.6rem, 2.5vw, 2rem);
    letter-spacing: 0.05em;
    text-align: center;
    line-height: clamp(2rem, 2.5vw, 2.2rem);
    max-width: 20%;
    border-bottom: 2px solid transparent;
    ${(props) => props.link && `text-transform: uppercase`};
    ${(props) => props.answer && `
      font-family: Montserrat; 
    `};
    ${(props) => props.mobile && `
      margin-bottom: ${props.mobileHeight ? `1rem` : `2.5rem`};
      max-width: 98%;
    `};
  }
  &:hover {
    color: var(--white);
    border-bottom: 2px solid var(--font-color);
    cursor: pointer;
  }
`;

export default function Typography(props) {
  const mobile = useMediaQuery('(max-width: 700px)')
  const mobileHeight = useMediaQuery('(max-height: 700px)')
  return (
    (props.h1 && <H1>{props.children}</H1>) ||
    (props.h2 && <H2>{props.children}</H2>) ||
    (props.p && <P {...props}>{props.children}</P>) ||
    (props.hint && <HintText {...props}>{props.children}</HintText>) ||
    (props.answer && <SiteLink mobileHeight={mobileHeight} mobile={mobile} {...props}>{props.children}</SiteLink>) ||
    (props.link ? <SiteLink mobile={mobile} {...props}>{props.children}</SiteLink> : <div />)
  );
}
