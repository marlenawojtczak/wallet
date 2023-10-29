import {
  ModalContent,
  ValueInput,
  CommentInput,
  StyledDateTime,
  ModalHeader,
  StyledCategoryInput,
  AddButton,
  CloseButton,
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
import { useDispatch } from "react-redux";
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
  resetFinance,
  resetAddedTransaction,
} from "../../redux/finance/financeSlice";
import Notiflix from "notiflix";

import { ReactComponent as DateRange } from "../../assets/icons/date_range.svg";

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [checked] = useState(false);

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

  const INITIAL_VALUES = {
    type: "Expense",
    category: "Income",
    amount: "",
    date: new Date(),
    comment: "",
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUES,

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

        onClose();
        formik.resetForm();
        dispatch(resetFinance());
        dispatch(resetAddedTransaction());
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

  const notify = (message) => {
    Notiflix.Notify.failure(message, {
      width: "300px",
      position: "center-top",
      distance: "18px",
      svgSize: "120px",
      timeout: 2200,
      borderRadius: "20px",
      fontFamily: "Poppins",
      fontSize: "16px",
    });
  };

  const handleAddClick = () => {
    if (
      formik.values.type === "Expense" &&
      formik.values.category === "Income" &&
      !formik.values.amount
    ) {
      notify("Please choose a category and amount");
      return;
    } else if (
      formik.values.type === "Expense" &&
      formik.values.category === "Income"
    ) {
      notify("Please select a category");
      return;
    } else if (!formik.values.amount) {
      notify("Please enter the amount");
      return;
    }
    if (!/^\d+(\.\d{1,2})?$/.test(formik.values.amount)) {
      notify("Please type only numbers");
      return;
    }
    formik.handleSubmit();
  };

  return (
    <>
      <ModalPosition>
        <ModalBackground
          onRequestClose={onClose}
          shouldCloseOnOverlayClick={true}
          style={{ overlay: { backgroundColor: "var(--bg-modal-overlay)" } }}
          isOpen={isOpen}
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
                <>
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
                </>
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
                <AddButton type="button" onClick={handleAddClick}>
                  Add
                </AddButton>
              </ButtonWrapper>
            </ModalWrapper>
          </ModalContent>
        </ModalBackground>
      </ModalPosition>
    </>
  );
};
