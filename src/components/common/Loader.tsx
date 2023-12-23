function Loader() {
  return (
    <div className="w-full">
      <img
        src="./spinner.svg"
        className="w-10 h-10 cursor-pointer hover:opacity-70 animate-spin flex self-center mt-5 mx-auto"
        alt="Loading"
        title="Loading"
      />
    </div>
  );
}

export default Loader;
