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
} from "./ModalEditTransaction.styled";

import { useState } from "react";
import { useFormik } from "formik";
import { Notiflix } from "notiflix";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import "react-datetime/css/react-datetime.css";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import {
  fetchTotals,
  fetchTransactions,
  updateTransaction,
} from "../../redux/finance/operations";

export const ModalEditTransaction = ({
  isOpen,
  onClose,
  transactionToEdit,
}) => {
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
    initialValues: transactionToEdit || {
      type: "Expense",
      category: "",
      amount: "",
      date: new Date(),
      comment: "",
    },

    onSubmit: async (values) => {
      try {
        if (transactionToEdit) {
          await dispatch(
            updateTransaction({
              id: transactionToEdit.id,
              ...values,
            })
          );
        }

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

  const handleButtonChange = (e) => {
    formik.setFieldValue(
      "type",
      formik.values.type === "Expense" ? "Income" : "Expense"
    );
  };

  // const TransactionsUpdateHandler = async () => {
  //   if (!transactionToEdit) return;
  //   await dispatch(updateTransaction(transactionToEdit.id, formik.values));
  //   await dispatch(fetchTransactions());
  //   await dispatch(fetchTotals());
  //   Notiflix.Notify.info("Transaction updated successfully!");
  // };

  return (
    <>
      <ModalBackground isOpen={isOpen} onClick={onClose}>
        <ModalContent isHidden={checked} onClick={(e) => e.stopPropagation()}>
          <ModalWrapper>
            <CloseButton onClick={onClose} />
            <ModalHeader>Edit transaction</ModalHeader>

            <SwitchButton
              name="type"
              checked={formik.values.type === "Expense"}
              onChange={handleButtonChange}
            />

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
              {/* <AddButton
              type="button"
              onClick={() => {
                formik.handleSubmit();
              }}
            > */}
              Save
            </AddButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ModalWrapper>
        </ModalContent>
      </ModalBackground>
    </>
  );
};
