import { useEffect } from 'react';
import SignInForm from '../components/auth/SignInForm';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux';

function SignInPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.appState);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/main');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="content">
      <SignInForm />
    </div>
  );
}

export default SignInPage;
