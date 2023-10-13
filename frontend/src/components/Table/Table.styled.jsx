import styled, { keyframes } from "styled-components";
const showIn = keyframes`
  0% {
    opacity: 0;}

  100% {
    opacity: 1;
}
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${showIn} 500ms linear;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  max-height: 35vh;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px inset,
    rgba(0, 0, 0, 0.5) 0px -2px 2px, rgba(0, 0, 0, 0.2) 0px 1px 1px inset;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: "Circe";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 14px 20px;

  box-shadow: 0px 1px 0px var(--bg-gray);

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const ColorIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  z-index: -1;
`;
export const Category = styled.p`
  padding-left: 16px;
  flex-grow: 1;
`;
export const Amount = styled.p``;

export const Sum = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  box-shadow: 0px -1px 0px var(--bg-gray);

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
export const Expenses = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Circe";
  font-weight: 700;
  padding: 16px 20px;
`;

export const Income = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Circe";
  font-weight: 700;
  padding: 0 20px;
  padding-bottom: 51px;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: var(--bg-light);
  border-radius: 30px;
  padding: 15px 20px;
  margin-bottom: 20px;
  padding-right: 130px;

  @media screen and (min-width: 768px) {
  }
`;

export const TableSelectors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 32px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    /* justify-content: space-evenly; */
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const SelectStylesSmall = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: 30,
    height: 50,
    backgroundColor: "transparent",
    cursor: "pointer",

    padding: "0 20px 0 20px",
    border: "1px solid var(--font-dark)",
    "&:hover": {
      color: "var(--font-dark)",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (styles) => ({
    ...styles,
  }),
  input: (styles) => ({
    ...styles,
    position: "relative",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--font-dark)",
  }),
  singleValue: (styles) => ({
    ...styles,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    transform: "scale(1.5)",
    color: "var(--font-dark)",
    "&:hover": {
      color: "var(--font-dark)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg-gray)",
    boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: 20,
    overflow: "hidden",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      padding: "12px 20px",
      backgroundColor: "var(--bg-accent)",
      color: "var(--font-dark)",
      cursor: "pointer",
      background:
        isFocused || isSelected ? "var(--font-light)" : "var(--bg-gray)",
    };
  },

  menuList: (styles) => ({
    ...styles,
    background: "var(--bg-accent)",
    borderRadius: 20,
    cursor: "pointer",
  }),
};

export const SelectStylesMedium = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,

    borderRadius: 30,
    height: 50,
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "0 20px 0 20px",
    border: "1px solid var(--font-dark)",
    "&:hover": {
      color: "var(--font-dark)",
    },
    // width: 160,
  }),
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (styles) => ({
    ...styles,
  }),
  input: (styles) => ({
    ...styles,
    position: "relative",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--font-dark)",
  }),
  singleValue: (styles) => ({
    ...styles,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    transform: "scale(1.5)",
    color: "var(--font-dark)",
    "&:hover": {
      color: "var(--font-dark)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg-gray)",
    boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: 20,
    overflow: "hidden",
    // width: 160,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      padding: "12px 20px",
      backgroundColor: "var(--bg-accent)",
      color: "var(--font-dark)",
      cursor: "pointer",
      background:
        isFocused || isSelected ? "var(--font-light)" : "var(--bg-gray)",
    };
  },

  menuList: (styles) => ({
    ...styles,
    background: "var(--bg-accent)",
    borderRadius: 20,
    cursor: "pointer",
  }),
};

export const SelectStylesLarge = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: 30,
    height: 50,
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "0 20px 0 20px",
    border: "1px solid var(--font-dark)",
    "&:hover": {
      color: "var(--font-dark)",
    },
    width: 181,
  }),
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (styles) => ({
    ...styles,
  }),
  input: (styles) => ({
    ...styles,
    position: "relative",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--font-dark)",
  }),
  singleValue: (styles) => ({
    ...styles,
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    transform: "scale(1.5)",
    color: "var(--font-dark)",
    "&:hover": {
      color: "var(--font-dark)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg-gray)",
    boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: 20,
    overflow: "hidden",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      padding: "12px 20px",
      backgroundColor: "var(--bg-accent)",
      color: "var(--font-dark)",
      cursor: "pointer",
      background:
        isFocused || isSelected ? "var(--font-light)" : "var(--bg-gray)",
    };
  },

  menuList: (styles) => ({
    ...styles,
    background: "var(--bg-accent)",
    borderRadius: 20,
    cursor: "pointer",
  }),
};
/* 
ALTERNATIVE WAY - in case we want to receive a document from the library, e.g. Material User Interface

import { Button } from "@mui/material";

export const AddButton = styled(Button)`
   // styles here
`;
*/
