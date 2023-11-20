import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/session/operations";

import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as AccountBoxIcon } from "../../assets/icons/account_box.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/icons/eyeOpen.svg";
import { ReactComponent as EyeCloseIcon } from "../../assets/icons/eyeClose.svg";
import { ReactComponent as Logo } from "../../assets/icons/logoPocket.svg";
import { Footer } from "../../components/Footer";

import {
  StyledInputContainer,
  StyledInputContainerExtra,
  StyledProgressBar,
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledIcon,
  StyledButtons,
  StyledButton,
  StyledButtonIcon,
  SpanLogin,
  StyledInfo,
  SpanLogo,
  SpanText,
  SpanInfo,
  StyledButtonL,
  StyledButtonMobileLogin,
  Span,
  LogoWrapper,
  FooterWrapper,
} from "./RegisterForm.styled";
import { showToast } from "../../utils/helperFunctions";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required."),
  email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match.")
    .required("Confirm Password is required."),
});

const ProgressBar = ({ value }) => {
  return (
    <StyledProgressBar value={value}>
      <div></div>
    </StyledProgressBar>
  );
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [progressValue, setProgressValue] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(
          signUp({
            email: values.email,
            password: values.password,
            username: values.name,
          })
        ).unwrap();
        navigate("/login");
      } catch (error) {
        showToast(error, "error");
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
    const { password, confirmPassword } = formik.values;

    if (!password || !confirmPassword) {
      setProgressValue(0);
      return;
    }

    const minLength = Math.min(password.length, confirmPassword.length);
    let matchCount = 0;
    for (let i = 0; i < minLength; i++) {
      if (password[i] === confirmPassword[i]) {
        matchCount++;
      } else {
        break;
      }
    }

    const matchPercentage =
      (matchCount / Math.max(password.length, confirmPassword.length)) * 100;
    setProgressValue(matchPercentage);
  }, [formik.values.password, formik.values.confirmPassword, formik.values]);

  const loginButton = () => {
    navigate("/login");
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
        showToast(errorMessage, "error");
      }
    }
  };

  return (
    <StyledWrapper>
      <StyledForm onKeyPress={handleKeyPress}>
        <SpanLogin>Register Here</SpanLogin>

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

        <StyledInputContainerExtra>
          <StyledIcon>
            <LockIcon />
          </StyledIcon>
          <StyledInput
            name="confirmPassword"
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <StyledButtonIcon
            type="button"
            onClick={handleToggleConfirmPasswordVisibility}
          >
            {confirmPasswordVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </StyledButtonIcon>
          <ProgressBar value={progressValue} />
        </StyledInputContainerExtra>

        <StyledInputContainer>
          <StyledIcon>
            <AccountBoxIcon />
          </StyledIcon>
          <StyledInput
            name="name"
            type="text"
            placeholder="First name "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </StyledInputContainer>
        <StyledButtons>
          <StyledButton
            type="submit"
            active={location.pathname === "/register"}
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
            Register
          </StyledButton>
          {window.innerWidth < 1280 && <Span>or</Span>}
          {window.innerWidth < 1280 && (
            <StyledButtonMobileLogin onClick={loginButton}>
              Login
            </StyledButtonMobileLogin>
          )}
        </StyledButtons>
      </StyledForm>
      {window.innerWidth >= 1280 && (
        <StyledInfo>
          <LogoWrapper>
            <Logo
              style={{
                filter: "drop-shadow(6px 4px 3px var(--font-dark))",
              }}
            />
            <SpanLogo>uWallet</SpanLogo>
          </LogoWrapper>

          <SpanText>Hello friends</SpanText>
          <SpanInfo>
            If you already have an account login here and have fun
          </SpanInfo>

          <StyledButtonL onClick={loginButton}>Login</StyledButtonL>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
        </StyledInfo>
      )}
    </StyledWrapper>
  );
};
