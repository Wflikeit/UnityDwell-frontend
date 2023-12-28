import '/src/scss/loginPage.scss';
import { Helmet } from 'react-helmet-async';
import {Box} from "@mui/material";
import LoginForm from "./LoginForm.tsx";


const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box className="login__form__container">
        <LoginForm/>
      </Box>
    </>
  );
};
export default LoginPage;
