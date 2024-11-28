import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "@mui/material";
import styled from "styled-components";

export default function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled(MUIButton)``;
