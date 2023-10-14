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
import { Notiflix } from "notiflix";
import moment from "moment";
// import { object, string, date, bool, mixed, number } from "yup";
import { useDispatch } from "react-redux";
import "react-datetime/css/react-datetime.css";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import {
  addTransaction,
  fetchTransactions,
} from "../../redux/finance/operations";
// const validationSchema = Yup.object().shape({
//   name: Yup.string().required("First name is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .max(12, "Password must be at most 12 characters")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

const formatDate = (inputString) =>
  moment(inputString, "DD MM YYYY HH:mm:ss GMTZZ").format("DD-MM-YYYY");

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
      category: "",
      amount: "",
      date: `${formatDate(new Date())}`,
      comment: "",
    },
    // validationSchema: validationSchema,
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
        await fetchTransactions();
      } catch (error) {
        Notiflix.Notify.failure("Cannot add transaction");
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
                  formik.setFieldValue(
                    "date",
                    moment(date, "DD-MM-YYYY").format("DD-MM-YYYY")
                  )
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

            <AddButton onClick={formik.handleSubmit}>Add</AddButton>

            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ModalWrapper>
        </ModalContent>
      </ModalBackground>
    </>
  );
};
