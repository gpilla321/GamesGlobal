import { Stack as MUIStack, StackOwnProps, styled } from "@mui/material";

type FlexboxProps = {
  children: React.ReactNode;
};

type Props = FlexboxProps & StackOwnProps;

export default function Flexbox({ children, ...rest }: Props) {
  return <StyledStack {...rest}>{children}</StyledStack>;
}

const StyledStack = styled(MUIStack)``;
