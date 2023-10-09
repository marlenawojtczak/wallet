import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </>
  );
};

export default RegistrationPage;
