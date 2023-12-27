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
      'min-w-max rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton hover:text-white';
    if (this.state.hasError) {
      return (
        <div className="flex flex-col max-w-120 h-full justify-center gap-3 items-center">
          <p>{texts.errorBoundary.p1}</p>
          <p>{texts.errorBoundary.p2}</p>
          <NavLink to="https://t.me/vermishe1ka">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8">
                <img
                  className="w-full h-full object-cover"
                  src={telegramIconUrl}
                  alt="Sad cat"
                ></img>
              </div>
              <p>vermishe1ka</p>
            </div>
          </NavLink>
          <div className="w-48 h-40 flex flex-none">
            <img
              className="w-full h-full object-cover"
              src={catPhotoUrl}
              alt="Sad cat"
            ></img>
          </div>
          <NavLink to="/" className={buttonClass}>
            {texts.menu.welcome}
          </NavLink>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
