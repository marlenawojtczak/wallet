import { createGlobalStyle } from "styled-components";

import "./fonts.css";
import "./vars.css";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  
.Toastify__toast--error {
  border: 1px solid #EB5757;
  border-radius: 50px;
  background: #FAE1E2;
}
.Toastify__toast--error::after {
content : url('../assets/images/svg/closeToast.svg'); // Your svg Path
position: absolute;
color: #333333;
font-size: 16px;
font-weight: 700;
left:265px;


}
.Toastify__toast--error::before {
content: url("../assets/images/svg/errorToast.svg");// Your svg Path
position:relative; 
z-index:4;
left:12px;
top:6px;
}
.Toastify__toast--success {
border: 1px solid #3A9EA5;
border-radius: 50px;
background: #F0F9FA;
}
.Toastify__toast--success::before {
content: url("../assets/images/svg/successToast.svg");// Your svg Path
position:relative; 
z-index:4;
left:12px;
top:6px;
}
.Toastify__toast--success::after {
content : url('../assets/images/svg/closeToast.svg');// Your svg Path
position: absolute;
color: #333333;
font-size: 16px;
font-weight: 700;
left:265px;
padding-top: 14px;
}
.Toastify__toast--warning {
border: 1px solid #E78326;
border-radius: 50px;
background: #FADFC5;
}
.Toastify__toast--warning::before {
content: url("../assets/images/svg/warnToast.svg");// Your svg Path
position:relative; 
z-index:4;
left:12px;
top:6px;
}  
.Toastify__toast--warning::after {
content : url('../assets/images/svg/closeToast.svg'); // Your svg Path
position: absolute;
color: #E78326;
font-size: 16px;
font-weight: 700;
left:265px;
padding-top: 14px;
}

.Toastify__toast--info {
  border: 1px solid #3498db;
  border-radius: 50px;
 
  }
  .Toastify__toast--info::before {
  content: url("../assets/images/svg/warnToast.svg");// Your svg Path
  position:relative; 
  z-index:4;
  left:12px;
  top:6px;
  }  
  .Toastify__toast--info::after {
  content : url('../assets/images/svg/closeToast.svg'); // Your svg Path
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  left:265px;
  padding-top: 14px;
  }

.Toastify__toast-body {
color: #000000;
font-size: 16px;
padding-left: 20px;
padding: 10px;
width: 100%;
font-weight: 400;
} 
.Toastify__toast > button>  svg {
  display: none;
}

.Toastify__toast-icon {
  width: 25px;
  height: 25px;
}


`;
