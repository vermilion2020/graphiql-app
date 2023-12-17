import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AppLayout = () => (
  <>
    <Header />
    <main className="app-container">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AppLayout;
