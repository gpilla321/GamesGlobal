import { Container as MUIContainer } from "@mui/material";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled(MUIContainer)`
  padding: 1rem;
`;
