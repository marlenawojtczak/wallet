import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";
import img from "../../assets/temporary/registrationpage.jpg";

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {/* HERE PUT YOUR COMPONENTS  */}

      <RegisterForm />

      {/* YOU CAN DELETE CODE BELOW LATER */}
      <ul>
        This is <b>Registration Page</b>. Please import and use here{" "}
        <b>componets </b>
        like:
        <hr />
        <li>RegisterForm</li>
      </ul>

      <img src={img} alt="Registrationpage" />
    </>
  );
};

export default RegistrationPage;
