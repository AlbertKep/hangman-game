import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div``;
export const Hangman = styled.div`
  padding-left: 1em;
  svg {
    height: clamp(200px, 30%, 373px);
    width: clamp(200px, 40%, 314px);
  }
`;

export const Letters = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  padding: 1em;
`;

export const Letter = styled(motion.li)`
  opacity: 0;
  border: 1px solid grey;
  background-color: ${({ theme, disabled }) =>
    !disabled ? "transparent" : theme.fontColor};
  border-radius: 5px;
  height: auto;
  width: clamp(40px, 40px + 1vw, 50px);
  text-align: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.fontColor};
    border: none;
    font-size: clamp(1rem, 1rem + 1vw, 3rem);
  }
`;

export const Info = styled.div`
  padding-left: 1em;
`;

export const Category = styled(motion.div)`
  font-size: clamp(1rem, 1rem + 1vw, 3rem);
`;

export const Word = styled.div`
  font-size: clamp(1.1rem, 1.5rem + 1vw, 3.5rem);

  span {
    opacity: 0;
  }
`;

export const Buttons = styled.div`
  text-align: center;
  margin-top: 1em;

  * {
    margin-right: 0.5em;
  }

  @media (min-width: 1400px) {
    margin-top: 3em;
  }
`;
export const ModalGameStatus = styled.h3`
  font-size: clamp(1.1rem, 1.5rem + 1vw, 3.5rem);
`;

export const ModalGameData = styled.span`
  display: block;
  font-size: clamp(1.1rem, 1rem + 1vw, 2rem);
  margin-top: 0.25em;
`;
