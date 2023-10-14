import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/session/operations";
import { selectRegistrationError } from "../../redux/session/selectors";
import { ReactComponent as WalletLogoMobile } from "../../assets/icons/logo-mobile.svg";
import { ReactComponent as WalletLogo } from "../../assets/icons/logo.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg";
import { ReactComponent as AccountBoxIcon } from "../../assets/icons/account_box.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/icons/eyeOpen.svg";
import { ReactComponent as EyeCloseIcon } from "../../assets/icons/eyeClose.svg";

import {
  StyledInputContainer,
  StyledInputContainerExtra,
  StyledProgressBar,
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledIcon,
  StyledLogo,
  StyledLogoMobile,
  StyledButtons,
  StyledButton,
  StyledButtonIcon,
} from "./RegisterForm.styled";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("First name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
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
  const registrationError = useSelector(selectRegistrationError);
  const navigate = useNavigate();
  const location = useLocation();
  const [progressValue, setProgressValue] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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
        const result = await dispatch(
          signUp({
            email: values.email,
            password: values.password,
            username: values.name,
          })
        ).unwrap();
        console.log("Sign up result:", result);
        navigate("/login");
      } catch (error) {
        console.log("Sign up error:", error);
        Notiflix.Notify.failure("<br />" + error, {
          width: "300px",
          position: "center-top",
          distance: "18px",
          svgSize: "120px",
          timeout: 2500,
          borderRadius: "20px",
          fontFamily: "Poppins",
          fontSize: "20px",
        });
      }
    },
  });

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
        const errorMessage = errors.map((error) => `<br /> ${error}`).join();
        Notiflix.Notify.failure("<br />" + errorMessage, {
          width: "300px",
          position: "center-top",
          distance: "18px",
          svgSize: "120px",
          timeout: 2500,
          borderRadius: "20px",
          fontFamily: "Poppins",
          fontSize: "20px",
        });
      }
    }
  };

  return (
    <StyledWrapper>
      <StyledForm onKeyPress={handleKeyPress}>
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
        </StyledInputContainerExtra>

        <ProgressBar value={progressValue} />

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
                const errorMessage = errors
                  .map((error) => `<br /> ${error}`)
                  .join();
                Notiflix.Notify.failure("<br />" + errorMessage, {
                  width: "300px",
                  position: "center-top",
                  distance: "18px",
                  svgSize: "120px",
                  timeout: 2500,
                  borderRadius: "20px",
                  fontFamily: "Poppins",
                  fontSize: "20px",
                });
              }
            }}
          >
            REGISTER
          </StyledButton>

          <StyledButton onClick={loginButton}>LOG IN</StyledButton>
        </StyledButtons>
      </StyledForm>
    </StyledWrapper>
  );
};
