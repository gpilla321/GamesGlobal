import styled from "styled-components";
import MUITextField, { TextFieldProps } from "@mui/material/TextField";

export default function Input({ ...props }: TextFieldProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled(MUITextField)`
  background-color: #fff;
`;
