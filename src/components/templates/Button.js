import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.fontColor};
  padding: 0.5em 1em;
  border: 2px solid;
  border-color: ${({ theme }) => theme.fontColor};
  border-radius: 0.8em;
  font-size: clamp(0.75rem, 1rem + 0.5vw, 2.5rem);
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBackgroundColor};
    color: ${({ theme }) => theme.hoverFontColor};
  }
`;
