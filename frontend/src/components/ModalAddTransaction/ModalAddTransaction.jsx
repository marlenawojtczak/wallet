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
import Notiflix from "notiflix";
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
        Notiflix.Notify.success("Successs! Transaction added to your list", {
          width: "300px",
          position: "center-top",
          distance: "18px",
          svgSize: "120px",
          timeout: 2200,
          borderRadius: "20px",
          fontFamily: "Poppins",
          fontSize: "16px",
        });
      } catch (error) {
        Notiflix.Notify.failure("Cannot add transaction", {
          width: "300px",
          position: "center-top",
          distance: "18px",
          svgSize: "120px",
          timeout: 2200,
          borderRadius: "20px",
          fontFamily: "Poppins",
          fontSize: "16px",
        });
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
