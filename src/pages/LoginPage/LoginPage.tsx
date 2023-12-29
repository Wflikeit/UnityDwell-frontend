import '/src/scss/loginPage.scss';
import { Helmet } from 'react-helmet-async';
import {Box} from "@mui/material";
import LoginForm from "./LoginForm.tsx";
import loginSVG from '../../assets/LoginPage.svg';



const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Box className="login__form__container">
          <div className="loginSVG">
              <img id='loginSVG' src={loginSVG} alt="loginSVG"/>
          </div>
          <LoginForm/>
      </Box>
    </>
  );
};
export default LoginPage;
