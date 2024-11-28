import styled from "styled-components";
import MUISelect, { SelectProps } from "@mui/material/Select";
import MUIMenuItem from "@mui/material/MenuItem";

type ComponentProps = {
  options: { key: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
};

type Props = ComponentProps & SelectProps;

export default function Select({ options, value, onChange, ...rest }: Props) {
  if (!options || options.length === 0) return null;

  return (
    <StyledSelect value={value || "default"} onChange={onChange} {...rest}>
      <StyledOption value="default" defaultChecked>No filter</StyledOption>
      {options.map((option) => (
        <StyledOption key={option.key} value={option.value}>
          {option.key}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled(MUISelect)`
  min-width: 200px;
  background-color: #fff;
`;

const StyledOption = styled(MUIMenuItem)``;
