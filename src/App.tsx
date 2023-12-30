import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import NotFoundPage from './pages/NotFound';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/index.ts';
import SignInPage from './pages/SignIn.tsx';
import SignUpPage from './pages/SignUp.tsx';
import WelcomePage from './pages/Welcome.tsx';
import { LocaleState } from './context/LocaleContext.tsx';
import AppLayout from './components/layout/AppLayout.tsx';
import AuthLayout from './components/layout/AuthLayout.tsx';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.tsx';
import { useEffect } from 'react';
import { firebaseConfig } from './firebase.ts';
import Snowflakes from './components/snowflakes/Snowflakes.tsx';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (firebaseConfig.apiKey === 'mock_key') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/main" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <LocaleState>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ErrorBoundary>
              <Snowflakes />
              <App />
            </ErrorBoundary>
          </PersistGate>
        </Provider>
      </LocaleState>
    </BrowserRouter>
  );
}

export { App, WrappedApp };
