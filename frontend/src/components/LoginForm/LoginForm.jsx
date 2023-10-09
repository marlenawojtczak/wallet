import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/session/selectors";
import { signIn } from "../../redux/session/operations";

import { ReactComponent as WalletLogoMobile } from "../../assets/icons/logo-mobile.svg";
import { ReactComponent as WalletLogo } from "../../assets/icons/logo.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/icons/eyeOpen.svg";
import { ReactComponent as EyeCloseIcon } from "../../assets/icons/eyeClose.svg";

import {
  StyledInputContainer,
  StyledWrapper,
  StyledForm,
  StyledLogoMobile,
  StyledLogo,
  StyledInput,
  StyledIcon,
  StyledButtonIcon,
  StyledButtons,
  StyledButton,
} from "./LoginForm.styled";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();
  const location = useLocation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await dispatch(signIn(values)).unwrap();
        console.log("Sign in result:", result);
      } catch (error) {
        console.log("Sign in error:", error.message);
        Notiflix.Notify.failure(error.message);
      }
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const registerButton = () => {
    navigate("/register");
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledLogoMobile>
          <WalletLogoMobile />
        </StyledLogoMobile>
        <StyledLogo>
          <WalletLogo />
        </StyledLogo>

        <StyledInputContainer>
          <StyledIcon>
            <EmailIcon />
          </StyledIcon>
          <StyledInput
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledIcon>
            <LockIcon />
          </StyledIcon>
          <StyledInput
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <StyledButtonIcon
            type="button"
            onClick={handleTogglePasswordVisibility}
          >
            {passwordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </StyledButtonIcon>
        </StyledInputContainer>

        <StyledButtons>
          <StyledButton
            type="submit"
            active={location.pathname === "/login"}
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
              const errors = Object.values(formik.errors);
              if (errors.length > 0) {
                const errorMessage = errors
                  .map((error) => `<br /> ${error}`)
                  .join();
                Notiflix.Notify.failure("<br />" + errorMessage);
              }
            }}
          >
            LOG IN
          </StyledButton>

          <StyledButton onClick={registerButton}>REGISTER</StyledButton>
        </StyledButtons>
      </StyledForm>
    </StyledWrapper>
  );
};
