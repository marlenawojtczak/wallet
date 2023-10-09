import { Helmet } from "react-helmet";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import img from "../../assets/temporary/loginpage.jpg";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;
