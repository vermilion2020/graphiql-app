import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main.tsx';
import NotFoundPage from './pages/NotFound';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Provider } from 'react-redux';
import { setupStore } from './redux/index.ts';
import SignInPage from './pages/SignIn.tsx';
import SignUpPage from './pages/SignUp.tsx';
import WelcomePage from './pages/Welcome.tsx';
import { LocaleState } from './context/LocaleContext.tsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <LocaleState>
        <Provider store={setupStore({})}>
          <App />
        </Provider>
      </LocaleState>
    </BrowserRouter>
  );
}

export { App, WrappedApp };
