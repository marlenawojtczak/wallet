import {
  ModalContent,
  ValueInput,
  CommentInput,
  StyledDateTime,
  ModalHeader,
  StyledCategoryInput,
  AddButton,
  CancelButton,
  CloseButton,
  CalendarIcon,
  ModalBackground,
  SectionWrapper,
  ModalWrapper,
} from "./ModalAddTransaction.styled";

import { useState } from "react";

import "react-datetime/css/react-datetime.css";
import { SwitchButton } from "../SwitchButton/SwitchButton";

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const options = [
    { value: "main expenses", label: "Main expenses" },
    { value: "products", label: "Products" },
    { value: "car", label: "Car" },
    { value: "self care", label: "Self care" },
    { value: "child care", label: "Child care" },
    { value: "household products", label: "Household products" },
    { value: "education", label: "Education" },
    { value: "leisure", label: "Leisure" },
    { value: "other expenses", label: "Other expenses" },
  ];

  return (
    <>
      <ModalBackground isOpen={isOpen} onClick={onClose}>
        <ModalContent isHidden={checked} onClick={(e) => e.stopPropagation()}>
          <ModalWrapper>
            <CloseButton onClick={onClose} />
            <ModalHeader>Add transaction</ModalHeader>

            <SwitchButton checked={checked} onChange={handleChange} />

            {checked ? (
              <StyledCategoryInput
                placeholder="Select a category"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
              />
            ) : (
              <></>
            )}
            <SectionWrapper>
              <ValueInput />

              <StyledDateTime
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
              />
              <CalendarIcon />
            </SectionWrapper>

            <CommentInput placeholder="Comment" />

            <AddButton>Add</AddButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ModalWrapper>
        </ModalContent>
      </ModalBackground>
    </>
  );
};
