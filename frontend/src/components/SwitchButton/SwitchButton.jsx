import {
  Input,
  Label,
  Minus,
  Plus,
  Switch,
  SwitchLabel,
  SwitchWrapper,
  Wrapper,
} from "./SwitchButton.styled";

const SwitchInput = ({ checked }) => {
  return (
    <div>
      <Wrapper>{checked ? <Minus /> : <Plus />}</Wrapper>
    </div>
  );
};

export const SwitchButton = ({ checked, onChange }) => {
  return (
    <div>
      <SwitchWrapper>
        <SwitchLabel isChecked={!checked} isHidden={checked}>
          Income
        </SwitchLabel>

        <Label>
          <Input type="checkbox" checked={checked} onChange={onChange} />
          <Switch>
            <SwitchInput checked={checked} />
          </Switch>
        </Label>

        <SwitchLabel isChecked={!checked} isHidden={!checked}>
          Expense
        </SwitchLabel>
      </SwitchWrapper>
    </div>
  );
};
