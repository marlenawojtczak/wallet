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
// import * as Yup from "yup";
import { useDispatch } from "react-redux";
import "react-datetime/css/react-datetime.css";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { addTransaction } from "../../redux/finance/operations";

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

export const ModalAddTransaction = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

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

  const formik = useFormik({
    initialValues: {
      category: "",
      value: "",
      date: moment(new Date()).format("DD.MM.YYYY"),
      comment: "",
    },
    // validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(
          addTransaction({
            category: values.category,
            value: values.value,
            date: values.date,
            comment: values.comment,
          })
        );
        console.log("Test");
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

  console.log(formik.values);
  return (
    <>
      <ModalBackground isOpen={isOpen} onClick={onClose}>
        <ModalContent isHidden={checked} onClick={(e) => e.stopPropagation()}>
          <ModalWrapper>
            <CloseButton onClick={onClose} />
            <ModalHeader>Add transaction</ModalHeader>

            <SwitchButton checked={!checked} onChange={handleChange} />

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
                name="value"
                placeholder="0.00"
                onChange={formik.handleChange}
                value={formik.values.value}
              />

              <StyledDateTime
                name="date"
                value={formik.values.date}
                onChange={(date) =>
                  formik.setFieldValue(
                    "date",
                    moment(date, "DD.MM.YYYY").format("DD.MM.YYYY")
                  )
                }
                onBlur={formik.handleBlur}
                dateFormat="DD.MM.YYYY"
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

            <AddButton type="submit" onClick={formik.handleSubmit}>
              Add
            </AddButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ModalWrapper>
        </ModalContent>
      </ModalBackground>
    </>
  );
};
