import styled from "styled-components";

export const StyledTable = styled.div`
  /* max-width: 395px; */
  min-width: 280px;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* box-shadow: 0px 1px 0px var(--bg-gray); */
`;

export const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  height: 100%;
  max-height: 470px;
  overflow-y: auto;
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
  margin: 0 20px;
  box-shadow: 0px 1px 0px var(--bg-gray);
`;

export const ColorIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
`;
export const Category = styled.p`
  padding-left: 16px;
  flex-grow: 1;
`;
export const Amount = styled.p``;

export const Sum = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 14px 40px; */
  margin: 0 20px;
  box-shadow: 0px -1px 0px var(--bg-gray);
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
  font-family: "Circe";
  font-size: 18px;
  font-weight: 700;
  margin: 0 20px;
  padding: 0 20px;
  background-color: var(--bg-light);
  height: 58px;
  border-radius: 30px;
  align-items: center;
`;

export const TableSelectors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 32px;
`;

// export const Selector = styled.select`
//   font-family: "Circe";
//   font-size: 16px;
//   font-weight: 400;
//   margin: 0 20px;
//   padding: 0 20px;
//   border: 1px solid var(--font-dark);
//   height: 58px;
//   border-radius: 30px;
//   align-items: center;
// `;

export const SelectStyles = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: 30,
    height: 50,
    backgroundColor: "transparent",
    cursor: "pointer",
    margin: "0 20px 0 20px",
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
    width: 280,
    margin: "0 20px",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      padding: "14px 20px",
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
