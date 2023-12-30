import { useAppSelector } from '../../redux';
import PopupError from '../auth/PopupError';
import { useErrorMessage } from '../../hooks/ErrorMessage';
import GitHub from '../../assets/icons/GitHub';
import RSSchool from '../../assets/icons/RSSchool';

function Footer() {
  const { error } = useAppSelector((state) => state.appState);
  useErrorMessage();

  return (
    <footer className="footer-wrapper">
      {!!error && <PopupError />}
      <div className="footer-container">
          <a href="https://rs.school/react/">
            <RSSchool />
          </a>
        <div className="copyright-link-wrapper">
          <p className="copyright">{new Date().getFullYear()}</p>
          <div className="link-wrapper">
            <div className="inline hover:scale-105 transition ease-in-out delay-150 hover:transition-all">
              <a href="https://github.com/vermilion2020" title="Mila">
                <GitHub />
                <span className="font-semibold">vermilion2020</span>
              </a>
            </div>
            <div className="inline hover:scale-105">
              <a href="https://github.com/Mali-zi" title="Natasha">
                <GitHub />
                <span className="font-semibold">mali-zi</span>
              </a>
            </div>
            <div className="inline hover:scale-105">
              <a href="https://github.com/vvsar" title="Viktor">
                <GitHub />
                <span className="font-semibold">vvsar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
