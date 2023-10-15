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
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import "react-datetime/css/react-datetime.css";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { addTransaction } from "../../redux/finance/operations";
import { fetchTotals, fetchTransactions } from "../../redux/finance/operations";

export const ModalAddTransaction = ({ isOpen, onClose }) => {
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
    initialValues: {
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
    } else {
      formik.setFieldValue("category", "");
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
      <ModalBackground isOpen={isOpen} onClick={onClose}>
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
              <ValueInput
                name="amount"
                placeholder="0.00"
                onChange={formik.handleChange}
                amount={formik.values.amount}
              />

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
              <CalendarIcon />
            </SectionWrapper>

            <CommentInput
              name="comment"
              placeholder="Comment"
              onChange={formik.handleChange}
              value={formik.values.comment}
            />

            <AddButton type="button" onClick={formik.handleSubmit}>
              Add
            </AddButton>

            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ModalWrapper>
        </ModalContent>
      </ModalBackground>
    </>
  );
};
