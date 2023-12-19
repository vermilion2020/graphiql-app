import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux';
import Header from './Header';
import Footer from './Footer';
import { auth } from '../../firebase';
import { useEffect } from 'react';

const AppLayout = () => {
  // onAuthStateChanged(auth, (user) => {
  //   // Check for user status
  // });

  // firebase.auth().currentUser.getIdToken(true)
  // .then(function(idToken) {
  //    // You can use the refreshed idToken here.
  // })
  // .catch(function(error) {
  //    // Handle any errors that may occur during token refresh.
  // });

  const navigate = useNavigate();

  const { isLoggedIn } = useAppSelector((state) => state.appState);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  // force refresh the token every 5 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      // getIdToken() - Возвращает текущий токен, если срок его действия не истек или 
      // срок его действия не истечет в течение следующих пяти минут. 
      // В противном случае токен будет обновлен и возвращен новый.
      if (user) await user.getIdToken();
    }, 5 * 60 * 1000);

    // clean up setInterval
    return () => clearInterval(handle);
  }, []);


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
