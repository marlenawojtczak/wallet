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
  ModalPosition,
  SectionDate,
  SectionInput,
  SectionDateWrapper,
  SectionContainer,
  ButtonWrapper,
} from "./ModalAddTransaction.styled";

import { useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import "react-datetime/css/react-datetime.css";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { addTransaction } from "../../redux/finance/operations";
import { fetchTotals, fetchTransactions } from "../../redux/finance/operations";
import {
  setType,
  setCategory,
  setAmount,
  setDate,
  setComment,
} from "../../redux/finance/financeSlice";

import { ReactComponent as DateRange } from "../../assets/icons/date_range.svg";

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  const addedTransaction = useSelector(
    (state) => state.finance.addedTransaction
  );

  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

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

  const formik = useFormik({
    initialValues: addedTransaction || {
      type: "Expense",
      category: "Income",
      amount: "",
      date: new Date(),
      comment: "",
    },

    onSubmit: async (values) => {
      try {
        await dispatch(
          addTransaction({
            type: values.type,
            category: values.category,
            amount: values.amount,
            date: values.date,
            comment: values.comment,
          })
        );

        dispatch(setType(values.type));
        dispatch(setCategory(values.category));
        dispatch(setAmount(values.amount));
        dispatch(setDate(values.date));
        dispatch(setComment(values.comment));
        dispatch(fetchTotals());
        dispatch(fetchTransactions());
      } catch (error) {
        return console.log(error.message);
      }
    },
  });

  const handleCategoryChange = (selectedOption) => {
    if (!checked) {
      formik.setFieldValue("category", selectedOption.label);
      dispatch(setCategory(selectedOption.label));
    } else {
      formik.setFieldValue("category", "");
      dispatch(setCategory(""));
    }
  };

  const handleButtonChange = (e) => {
    formik.setFieldValue(
      "type",
      formik.values.type === "Expense" ? "Income" : "Expense"
    );
    formik.setFieldValue("category", "Income");
  };

  return (
    <>
      <ModalPosition>
        <ModalBackground
          onRequestClose={onClose}
          shouldCloseOnOverlayClick={true}
          style={{ overlay: { backgroundColor: "var(--bg-modal-overlay)" } }}
          isOpen={isOpen}
          // onClick={onClose}
        >
          <ModalContent isHidden={checked} onClick={(e) => e.stopPropagation()}>
            <ModalWrapper>
              <CloseButton onClick={onClose} />
              <ModalHeader>Add transaction</ModalHeader>

              <SwitchButton
                name="type"
                checked={formik.values.type === "Expense"}
                onChange={handleButtonChange}
              />

              {formik.values.type === "Expense" ? (
                <StyledCategoryInput
                  name="category"
                  placeholder="Select a category"
                  value={options.find(
                    (option) => option.value === formik.values.category
                  )}
                  onChange={handleCategoryChange}
                  onBlur={formik.handleBlur}
                  options={options}
                />
              ) : (
                <></>
              )}

              <SectionWrapper>
                <SectionContainer>
                  <SectionInput>
                    <ValueInput
                      name="amount"
                      placeholder="0.00"
                      onChange={formik.handleChange}
                      amount={formik.values.amount}
                    />
                  </SectionInput>
                  <SectionDateWrapper>
                    <StyledDateTime
                      name="date"
                      value={formik.values.date}
                      onChange={(date) =>
                        formik.setFieldValue("date", moment(date).toDate())
                      }
                      onBlur={formik.handleBlur}
                      dateFormat="DD-MM-YYYY"
                      timeFormat={false}
                      closeOnSelect={true}
                    />

                    <SectionDate>
                      <DateRange />
                    </SectionDate>
                  </SectionDateWrapper>
                </SectionContainer>

                <CommentInput
                  name="comment"
                  placeholder="Comment"
                  onChange={formik.handleChange}
                  value={formik.values.comment}
                />
              </SectionWrapper>
              <ButtonWrapper>
                <AddButton type="button" onClick={formik.handleSubmit}>
                  Add
                </AddButton>
                <CancelButton onClick={onClose}>Cancel</CancelButton>
              </ButtonWrapper>
            </ModalWrapper>
          </ModalContent>
        </ModalBackground>
      </ModalPosition>
    </>
  );
};
