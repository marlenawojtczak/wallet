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
`;

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style: none;
  max-height: 35vh;
  overflow-y: auto;
  border-radius: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: OpenSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  padding: 10px 20px;
  color: var(--bg-light);
  box-shadow: 0px 1px 0px var(--bg-light);

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 14px 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
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
  margin: 0;
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px 20px;
  gap: 5px;
  background-color: white;

  @media screen and (min-width: 768px) {
    padding: 12px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 15px 20px;
  }
`;

export const TableWrapper = styled.div``;

export const Expenses = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: OpenSans;
  font-weight: 700;
  font-size: 14px;
  color: var(--font-dark);
`;

export const Income = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: OpenSans;
  font-weight: 700;
  font-size: 14px;
  color: var(--font-dark);
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: OpenSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: var(--bg-light);
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding: 15px 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const TableSelectors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const WrapperMonth = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
export const WrapperYear = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;

export const SelectStylesSmall = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: 10,
    height: 40,
    backgroundColor: "transparent",
    cursor: "pointer",

    padding: "0 20px 0 20px",
    border: "1px solid var(--font-light)",
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
    color: "var(--font-light)",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    transform: "scale(1.5)",
    color: "var(--font-light)",
    "&:hover": {
      color: "var(--font-light)",
      transform: "scale(1.8)",
    },
  }),
  menu: (styles) => ({
    ...styles,

    backgroundColor: "var(--bg-gray)",
    boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
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
    borderRadius: 10,
    cursor: "pointer",
  }),
};

export const SelectStylesMedium = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,

    borderRadius: 10,
    height: 50,
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "0 20px 0 20px",
    border: "1px solid var(--font-light)",
    "&:hover": {
      color: "var(--font-dark)",
    },
    // width: "100%",
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
    color: "var(--font-light)",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    transform: "scale(1.5)",
    color: "var(--font-light)",
    "&:hover": {
      color: "var(--font-light)",
      transform: "scale(1.8)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg-gray)",
    boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
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
    borderRadius: 10,
    cursor: "pointer",
  }),
};

export const SelectStylesLarge = {
  container: (styles) => ({
    ...styles,
  }),
  control: (styles) => ({
    ...styles,
    borderRadius: 10,
    height: 50,
    backgroundColor: "transparent",
    cursor: "pointer",
    padding: "0 20px 0 20px",
    border: "1px solid var(--font-light)",
    "&:hover": {
      color: "var(--font-dark)",
    },
    // width: 181,
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
    color: "var(--font-light)",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    transform: "scale(1.5)",
    color: "var(--font-light)",
    "&:hover": {
      color: "var(--font-light)",
      transform: "scale(1.8)",
    },
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "var(--bg-gray)",
    boxShadow: "0px 6px 15px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
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
    borderRadius: 10,
    cursor: "pointer",
  }),
};
