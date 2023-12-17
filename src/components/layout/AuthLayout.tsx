import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const AuthLayout = () => (
  <>
    <main className="app-container">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AuthLayout;
