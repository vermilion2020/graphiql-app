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
        <a href="https://rs.school/react/" target="_blank">
          <RSSchool />
        </a>
        <div className="copyright-link-wrapper">
          <p className="copyright">{new Date().getFullYear()}</p>
          <div className="links-wrapper">
            <a
              href="https://github.com/vermilion2020"
              target="_blank"
              title="Mila"
              className="font-semibold align-middle grow git-icon"
            >
              <GitHub />
              &#32;vermilion2020
            </a>
            <a
              href="https://github.com/Mali-zi"
              target="_blank"
              title="Natasha"
              className="font-semibold align-middle grow git-icon"
            >
              <GitHub />
              &#32;mali-zi
            </a>
            <a
              href="https://github.com/vvsar"
              target="_blank"
              title="Viktor"
              className="font-semibold align-middle grow git-icon"
            >
              <GitHub />
              &#32;vvsar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
