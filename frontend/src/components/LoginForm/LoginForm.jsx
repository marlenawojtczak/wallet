import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/session/selectors";
import { signIn } from "../../redux/session/operations";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/icons/eyeOpen.svg";
import { ReactComponent as EyeCloseIcon } from "../../assets/icons/eyeClose.svg";
import { ReactComponent as Logo } from "../../assets/icons/logoPocket.svg";

import {
  StyledInputContainer,
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledIcon,
  StyledButtonIcon,
  StyledButtons,
  StyledButton,
  SpanLogin,
  StyledInfo,
  SpanLogo,
  SpanText,
  SpanInfo,
  StyledButtonR,
  StyledButtonMobileLogin,
  Span,
  LogoWrapper,
} from "./LoginForm.styled";
import { showToast } from "../../utils/helperFunctions";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password must have at least 6 characters.")
    .required("Password is required."),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();
  const location = useLocation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        await dispatch(signIn(values)).unwrap();
      } catch (error) {
        return "error", error;
      }
    },
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const registerButton = () => {
    navigate("/register");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      formik.handleSubmit();
      const errors = Object.values(formik.errors);
      if (errors.length > 0) {
        const errorMessage = (
          <>
            {errors.map((error, index) => (
              <React.Fragment key={index}>
                {error}
                <br />
              </React.Fragment>
            ))}
          </>
        );
      }
    }
  };

  return (
    <StyledWrapper>
      {window.innerWidth >= 1280 && (
        <StyledInfo>
          <LogoWrapper>
            <Logo
              style={{ filter: "drop-shadow(6px 4px 3px var(--font-dark))" }}
            />
            <SpanLogo>uWallet</SpanLogo>
          </LogoWrapper>
          <SpanText>Start controlling your money</SpanText>
          <SpanInfo>
            If you don't have an account yet, join us and start creating your
            budget
          </SpanInfo>
          <StyledButtonR onClick={registerButton}>Register</StyledButtonR>
        </StyledInfo>
      )}
      <StyledForm onKeyPress={handleKeyPress}>
        <SpanLogin>Login Here</SpanLogin>

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
                const errorMessage = (
                  <>
                    {errors.map((error, index) => (
                      <React.Fragment key={index}>
                        {error}
                        <br />
                      </React.Fragment>
                    ))}
                  </>
                );
                showToast(errorMessage, "error");
              }
            }}
          >
            Login
          </StyledButton>
          {window.innerWidth < 1280 && <Span>or</Span>}
          {window.innerWidth < 1280 && (
            <StyledButtonMobileLogin onClick={registerButton}>
              Register
            </StyledButtonMobileLogin>
          )}
        </StyledButtons>
      </StyledForm>
    </StyledWrapper>
  );
};
