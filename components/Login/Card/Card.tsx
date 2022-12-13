import styled from "styled-components";
import MuiCard from "@mui/material/Card";

const Card = styled(MuiCard)`
  padding: 1.5rem;
  border-radius: 6px;
  position: relative;
  width: 100%;
  max-width: 578px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Card;
