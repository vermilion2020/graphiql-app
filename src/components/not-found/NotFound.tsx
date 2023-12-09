import notFoundImage from '../../assets/404-error.jpg';

function NotFound() {
  return (
    <div className="not-found">
      <h2 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Not Found</h2>
      <div className="content--heading">
        Page or item you are requesting does not exist
      </div>
      <div className="content--desctiption">
        Check the URL or ask for help if you are sure that it is correct
      </div>
      <img className="content--img" src={notFoundImage} alt="Not found" />
    </div>
  );
}

export default NotFound;
