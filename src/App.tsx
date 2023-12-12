import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main.tsx';
import NotFoundPage from './pages/NotFound';
import { Provider } from 'react-redux';
import { setupStore } from './redux/index.ts';
import SignInPage from './pages/SignIn.tsx';
import SignUpPage from './pages/SignUp.tsx';
import WelcomePage from './pages/Welcome.tsx';
import { LocaleState } from './context/LocaleContext.tsx';
import AppLayout from './components/layout/AppLayout.tsx';
import AuthLayout from './components/layout/AuthLayout.tsx';
import DocumentationPage from './pages/Documentation.tsx';

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/documentation' element={<DocumentationPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path='/main' element={<MainPage />} />
      </Route>
    </Routes>
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
