import styled from "styled-components";

export const Navigation = styled.nav`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkList = styled.ul`
  padding: 0;

  li {
    padding: 1em;
    border-bottom: 3px solid transparent;

    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      transform: scale(0);
      background-color: ${({ theme }) => theme.fontColor};
      transition: all 0.3s ease-in;
    }

    &:hover::after {
      transform: scale(1);
    }
  }

  a {
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;
    font-size: clamp(2rem, 1.15rem + 2.75vw, 4rem);
  }
`;
