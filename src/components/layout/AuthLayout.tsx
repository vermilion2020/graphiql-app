import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux';
import WelcomeHeader from './WelcomeHeader';
import Footer from './Footer';
import { setSignOut } from '../../redux/features/appSlice';
import imageSrc from '../../assets/bg.png';

const AuthLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const expToken = useAppSelector((state) => state.appState.expToken);

  useEffect(() => {
    () => {
      if (expToken && expToken * 1000 > Date.now()) {
        navigate('/main');
      } else {
        dispatch(setSignOut());
      }
    };
  }, []);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <WelcomeHeader />
        <Outlet />
        <Footer />
      </div>
      <div className="bg-img">
        <img src={imageSrc} alt="bg-image" className="bg-image" />
      </div>
    </div>
  );
};

export default AuthLayout;
