import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { LocaleContext } from "../context/LocaleContext";

function WelcomePage() {
  const { texts } = useContext(LocaleContext);
  
  return(
    <div className="content">
      <h2>{texts.welcome.title}</h2>
      <NavLink to="/sign-in">
        <button className="button" >{texts.welcome.signIn}</button>
      </NavLink>
      <br /><br />
      <NavLink to="/sign-up">
        <button className="button" >{texts.welcome.signUp}</button>
      </NavLink>
    </div>
  );
}

export default WelcomePage;