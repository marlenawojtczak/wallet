import {
  ModalContent,
  ValueInput,
  CommentInput,
  StyledDateTime,
  ModalHeader,
  StyledCategoryInput,
  AddButton,
  CloseButton,
  CalendarIcon,
  ModalBackground,
  SectionWrapper,
  ModalWrapper,
  TransactionType,
  ModalPosition,
} from "./ModalEditTransaction.styled";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Notiflix } from "notiflix";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import "react-datetime/css/react-datetime.css";
import {
  fetchTotals,
  fetchTransactions,
  updateTransaction,
} from "../../redux/finance/operations";
import { selectTransactions } from "../../redux/finance/selectors";

const getTransaction = (transactions, id) => {
  const transaction = transactions.find(
    (transaction) => transaction._id === id
  );
  return transaction;
};

export const ModalEditTransaction = ({ isOpen, onClose, id }) => {
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

  const dispatch = useDispatch();
  const [checked] = useState(false);
  const transactions = useSelector(selectTransactions);
  const transaction = getTransaction(transactions, id);

  const [initialValueDisplayed, setInitialValueDisplayed] = useState(false);
  const [categoryChanged, setCategoryChanged] = useState(false);

  const INITIAL_VALUES = { ...transaction };

  useEffect(() => {
    setInitialValueDisplayed(true);
  }, [id]);

  const formik = useFormik({
    initialValues: {
      type: "Expense",
      ...transaction,
    },

    onChange: (values) => {
      formik.setValues({
        ...values,
      });
    },

    onSubmit: async (values) => {
      console.log("Submitting values:", values);
      const formattedDate = moment(values.date).format(
        "YYYY-MM-DDTHH:mm:ss.SSSZ"
      );

      try {
        dispatch(
          updateTransaction({
            id,
            values: {
              type: values.type,
              category: values.category,
              amount: values.amount,
              date: formattedDate,
              comment: values.comment,
            },
          })
        );
        dispatch(fetchTotals());
        dispatch(fetchTransactions());
        formik.resetForm();
      } catch (error) {
        Notiflix.Notify.failure("Cannot edit transaction");
      }
    },
  });

  const handleCategoryChange = (selectedOption) => {
    setInitialValueDisplayed(false);
    setCategoryChanged(true);
    formik.setFieldValue("category", selectedOption.label);
  };

  const formated = (date) => {
    if (date) {
      return date.slice(0, 10);
    } else {
      return "";
    }
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
              <ModalHeader>Edit transaction</ModalHeader>

              <TransactionType type={formik.values.type}>
                <span
                  className="income"
                  onClick={() => formik.setFieldValue("type", "Income")}
                >
                  Income
                </span>
                <span>/</span>
                <span
                  className="expense"
                  onClick={() => formik.setFieldValue("type", "Expense")}
                >
                  Expense
                </span>
              </TransactionType>

              <StyledCategoryInput
                name="category"
                defaultValue={{ label: INITIAL_VALUES.category }}
                onChange={handleCategoryChange}
                onBlur={formik.handleBlur}
                options={options}
              />

              <SectionWrapper>
                <ValueInput
                  name="amount"
                  placeholder="0.00"
                  onChange={formik.handleChange}
                  value={formik.values.amount}
                  defaultValue={INITIAL_VALUES.amount}
                />
                <StyledDateTime
                  name="date"
                  value={formated(INITIAL_VALUES.date)}
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
                defaultValue={INITIAL_VALUES.comment}
              />
              <AddButton type="button" onClick={formik.handleSubmit}>
                Save
              </AddButton>
              {/* <CancelButton onClick={onClose}>Cancel</CancelButton> */}
            </ModalWrapper>
          </ModalContent>
        </ModalBackground>
      </ModalPosition>
    </>
  );
};
