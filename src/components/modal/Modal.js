import { Container } from "../templates/Container";
import { ModalBackdrop, ModalContent } from "./Modal.styled";

const Modal = ({ children }) => {
  return (
    <ModalBackdrop>
      <Container>
        <ModalContent>{children}</ModalContent>
      </Container>
    </ModalBackdrop>
  );
};

export default Modal;
