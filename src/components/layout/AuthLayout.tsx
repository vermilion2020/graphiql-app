import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import imageSrc from '../../assets/bg_new.png';
import WelcomeHeader from './WelcomeHeader';

const AuthLayout = () => (
  <div className="app-wrapper">
    <div className="app-container">
      <WelcomeHeader />
      <Outlet />
      <Footer />
    </div>
    <div className="bg-img">
      <img src={imageSrc} alt="bg-img" />
    </div>
  </div>
);

export default AuthLayout;
