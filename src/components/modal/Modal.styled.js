import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
export const ModalContent = styled.div`
  width: clamp(300px, 100%, 500px);
  border: 2px solid;
  border-color: ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  text-align: center;
  padding: 1em 1.75em;
  margin: 0 0.75em;
`;
