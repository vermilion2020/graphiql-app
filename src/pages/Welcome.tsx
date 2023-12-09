import { NavLink } from "react-router-dom";

function WelcomePage() {
  return(
    <div className="content">
      <h2>Welcome</h2>
      <NavLink to="/sign-in">
        <button className="button" >Sign In</button>
      </NavLink>
      <br /><br />
      <NavLink to="/sign-up">
        <button className="button" >Sign Up</button>
      </NavLink>
    </div>
  );
}

export default WelcomePage;