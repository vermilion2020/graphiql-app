import React, { Component, ErrorInfo } from 'react';
import { NavLink } from 'react-router-dom';
import { LocaleContext } from '../../context/LocaleContext';
import catPhotoUrl from '../../assets/sad_cat.jpg';
import telegramIconUrl from '../../assets/telegram.png';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  static contextType = LocaleContext;
  declare context: React.ContextType<typeof LocaleContext>;
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { texts } = this.context;
    const buttonClass =
      'min-w-max rounded-md bg-buttonBg-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buttonBg-300 disabled:bg-disabledButton hover:text-white shadow-lg border-buttonColor-900';
    if (this.state.hasError) {
      return (
        <div className="flex flex-col max-w-120 h-screen justify-center gap-3 items-center mt-4">
          <div className="flex flex-col justify-center max-w-3xl px-3 box-decoration-slice text-white text-center text-2xl leading-10 mb-12">
            <p>{texts.errorBoundary.p1}</p>
            <p>{texts.errorBoundary.p2}</p>
          </div>
          <NavLink to="https://t.me/vermishe1ka">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full object-cover"
                  src={telegramIconUrl}
                  alt="Sad cat"
                ></img>
              </div>
              <p className="text-white">vermishe1ka</p>
            </div>
          </NavLink>
          <div className="w-48 h-40 flex flex-none mb-8">
            <img
              className="w-full h-full object-cover border-2 border-white rounded-lg shadow-lg"
              src={catPhotoUrl}
              alt="Sad cat"
            />
          </div>
          <a href="/" className={buttonClass}>
            {texts.menu.welcome}
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
