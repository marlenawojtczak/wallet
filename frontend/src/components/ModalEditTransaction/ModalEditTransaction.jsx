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
  TransactionType,
  ModalPosition,
} from "./ModalEditTransaction.styled";

import { useState } from "react";
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
  const dispatch = useDispatch();
  const [checked] = useState(false);
  const transactions = useSelector(selectTransactions);
  const transaction = getTransaction(transactions, id);

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

  const INITIAL_VALUES = { ...transaction };
  console.log("transaction:", INITIAL_VALUES);

  const formik = useFormik({
    initialValues: INITIAL_VALUES,

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
      } catch (error) {
        Notiflix.Notify.failure("Cannot edit transaction");
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

              {!checked ? (
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
                  value={formik.values.amount}
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
