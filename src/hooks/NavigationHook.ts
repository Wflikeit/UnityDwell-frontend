import { useNavigate } from 'react-router-dom';

export function useCustomNavigation() {
  const navigate = useNavigate();


  function navigateToHome() {
    navigate('/publications');
  }
  function navigateToLoginPage() {
    navigate('/login');
  }

  return {
    navigateToHome,
    navigateToLoginPage,
  };
}
