import styled from "styled-components";
import finance from "../../assets/images/finance.png";

export const BackgroundContainer = styled.div`
  background-image: url(${finance});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right -200px top 100px;
  height: 100vh;

  @media screen and (min-width: 768px) {
    background-image: url(${finance});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top 110px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const MaxWrapper = styled.div`
  @media screen and (min-width: 1500px) {
    margin: auto;
    max-width: 3000px;
  }
`;

export const Filter = styled.div`
  backdrop-filter: blur(25px);
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin: 0 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    margin: 0 50px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 0;
    margin: 0 5%;
    flex-direction: row;
  }
`;

export const WrapperNavBal = styled.div`
  @media screen and (min-width: 768px) {
    flex: 1;
  }
  @media screen and (min-width: 1280px) {
    flex: 0;
  }
`;

export const CurrencyNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex: 1;
  }
  @media screen and (min-width: 1280px) {
    flex: 0;
  }
`;

export const WrapperLeftAndUpSite = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    flex: 20%;
    padding-top: 40px;
    margin-bottom: 0px;
    padding-right: 80px;
    height: 85vh;
    border-right-style: solid;
    border-right-color: #e7e5f2;
    border-right-width: 1px;
  }
`;

export const WrapperRightAndDownSite = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
  @media screen and (min-width: 1280px) {
    padding: 50px 0 0 80px;

    flex: 60%;
  }
`;

export const WrapperNav = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const BalanceNav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
  }
`;

// import styled from "styled-components";
// import finance from "../../assets/images/finance.png";
// import { useLocation } from "react-router-dom";

// export const BackgroundContainer = styled.div`
//   background-image: url(${finance});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: right -200px top 100px;
//   height: 100vh;

//   ${(props) =>
//     useLocation().pathname === "/home" &&
//     `
//     height: 100vh;
// `}

//   @media screen and (min-width: 768px) {
//     background-image: url(${finance});
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: right top 110px;
//     height: 100vh;
//   }
//   @media screen and (min-width: 1280px) {
//   }
// `;

// export const MaxWrapper = styled.div`
//   @media screen and (min-width: 1500px) {
//     margin: auto;
//     max-width: 3000px;
//   }
// `;

// export const Filter = styled.div`
//   backdrop-filter: blur(25px);
//   height: 100%;
//   width: 100%;

//   @media screen and (min-width: 768px) {
//     overflow: hidden;
//   }
//   @media screen and (min-width: 1280px) {
//   }
// `;

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-top: 30px;
//   margin: 0 20px;

//   @media screen and (min-width: 768px) {
//     display: flex;
//     margin: 0 50px;
//   }
//   @media screen and (min-width: 1280px) {
//     padding-top: 0;
//     margin: 0 5%;
//     flex-direction: row;
//   }
// `;

// export const WrapperNavBal = styled.div`
//   @media screen and (min-width: 768px) {
//     flex: 1;
//   }
//   @media screen and (min-width: 1280px) {
//     flex: 0;
//   }
// `;

// export const CurrencyNav = styled.div`
//   display: none;
//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex: 1;
//   }
//   @media screen and (min-width: 1280px) {
//     flex: 0;
//   }
// `;

// export const WrapperLeftAndUpSite = styled.div`
//   @media screen and (min-width: 768px) {
//     display: flex;
//     gap: 40px;
//     margin-bottom: 20px;
//   }
//   @media screen and (min-width: 1280px) {
//     flex-direction: column;
//     flex: 20%;
//     padding-top: 40px;
//     margin-bottom: 0px;
//     padding-right: 80px;
//     height: 85vh;
//     border-right-style: solid;
//     border-right-color: #e7e5f2;
//     border-right-width: 1px;
//   }
// `;

// export const WrapperRightAndDownSite = styled.div`
//   display: flex;
//   flex-direction: column;

//   overflow-x: auto;
//   @media screen and (min-width: 768px) {
//     padding-top: 30px;
//   }
//   @media screen and (min-width: 1280px) {
//     padding: 50px 0 0 80px;

//     flex: 60%;
//   }
// `;

// export const WrapperNav = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 40px;

//   @media screen and (min-width: 768px) {
//     justify-content: flex-start;
//     margin-bottom: 30px;
//   }
//   @media screen and (min-width: 1280px) {
//   }
// `;

// export const BalanceNav = styled.div`
//   display: none;
//   @media screen and (min-width: 768px) {
//     display: flex;
//   }
//   @media screen and (min-width: 1280px) {
//   }
// `;

export const FotterPositionBig = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  @media screen and (min-width: 768px) {
    position: fixed;
    width: auto;
  }
`;

export const FotterPosition = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
`;
