import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../redux';
import SignUpForm from '../components/auth/SignUpForm';

function SignUpPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.appState);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/main');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="content">
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
