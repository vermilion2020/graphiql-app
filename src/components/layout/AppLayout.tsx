import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { setSignOut } from '../../redux/features/appSlice';

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const exp_token = useAppSelector((state) => state.appState.exp_token);

  useEffect(() => {
    const handle = setInterval(
      () => {
        console.log('setInterval');
        if (exp_token && exp_token * 1000 < Date.now()) {
          dispatch(setSignOut());
          navigate('/');
        }
      },
      1 * 60 * 1000
    );

    // clean up setInterval
    return () => clearInterval(handle);
  });

  return (
    <>
      <Header />
      <main className="app-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
