import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
`;
export const Text = styled.h2`
  margin-top: 0;
  padding: 1em 0.5em;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: block;
  width: -webkit-fill-available;
  text-align: center;
  font-size: clamp(1rem, 1.5rem + 1.5vw, 3rem);
`;

export const WordList = styled.ul`
  padding: 1em 0.5em;
  width: -webkit-fill-available;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Word = styled.li`
  font-size: clamp(1rem, 1.5rem + 1.5vw, 3rem);
`;

export const Loading = styled.p`
  text-align: center;
  margin-top: 2em;
  font-size: clamp(1rem, 1.5rem + 1vw, 3rem);
`;

export const CategoryList = styled.ul`
  overflow-y: scroll;
  /* height: 500px; */
  margin-top: 2em;
  padding: 1.5em;
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  align-items: center;
  justify-items: center;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.fontColor};
  }
`;

export const Category = styled(motion.li)`
  opacity: 0;
  border: 2px solid grey;
  border-color: ${({ theme }) => theme.borderColor};
  padding: 2em 0;
  border-radius: 0.8em;
  text-align: center;
  width: clamp(150px, 100%, 200px);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackgroundColor};
  }

  &:hover button {
    cursor: pointer;
    color: ${({ theme }) => theme.hoverFontColor};
  }

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.fontColor};
    border: none;
    font-size: clamp(1rem, 1rem + 0.75vw, 2rem);
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0.75em 1.75em;
  text-align: right;
`;
