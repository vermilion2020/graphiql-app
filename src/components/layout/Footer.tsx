import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p className="copyright">
          {
            new Date().getFullYear()
          }
          
        </p>
        <Link
          to="https://github.com/vermilion2020"
          className="github-link"
          target="_blank"
          title="Mila"
        >
          <svg className="icon-git">
            <use xlinkHref="./sprite-footer.svg#logo-git"></use>
          </svg>
          <p>vermilion2020</p>
        </Link>{' '}
        <Link
           to="https://github.com/Mali-zi"
           className="github-link"
           target="_blank"
           title="Natasha"
         >
          <svg className="icon-git">
            <use xlinkHref="./sprite-footer.svg#logo-git"></use>
          </svg>
          <p>Mali-zi</p>
        </Link>{' '}
        <Link
           to="https://github.com/vvsar"
           className="github-link"
           target="_blank"
           title="Viktor"
         >
          <svg className="icon-git">
            <use xlinkHref="./sprite-footer.svg#logo-git"></use>
          </svg>
          <p>vvsar</p>
        </Link>{' '}
        <Link to="https://rs.school/react/" target="_blank" className="link-rs">
          <svg className="icon-rs">
            <use xlinkHref="./sprite-footer.svg#logo-rs-school"></use>
          </svg>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
