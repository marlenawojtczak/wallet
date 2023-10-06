import {
  ModalWrapper,
  ModalContent,
  CloseButton,
} from "./ModalAddTransaction.styled";
import { Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";
import Select from "react-select";

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <ModalWrapper isOpen={isOpen}>
        <ModalContent>
          <p>Add transaction</p>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label={checked ? "Expense" : "Income"}
          />
          <Select
            placeholder="Select a category"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
          <CloseButton onClick={onClose} />
        </ModalContent>
      </ModalWrapper>
    </>
  );
};
