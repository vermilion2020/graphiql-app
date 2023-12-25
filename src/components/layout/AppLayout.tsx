import { Outlet, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { setSignOut } from '../../redux/features/appSlice';

const AppLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const expToken = useAppSelector((state) => state.appState.expToken);

  useEffect(() => {
    const handle = setInterval(
      () => {
        if (expToken && expToken * 1000 < Date.now()) {
          dispatch(setSignOut());
          navigate('/');
        }
      },
      5 * 60 * 1000
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
