import styled from "styled-components";
import { motion } from "framer-motion";

export const GameTitle = styled(motion.h1)`
  text-align: center;
  font-size: clamp(2rem, 1.15rem + 2vw, 4rem);
`;
