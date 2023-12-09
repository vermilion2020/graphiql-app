import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { getTexts } from "../helpers/localisation";
import { LocaleContext } from "../context/LocaleContext";

function WelcomePage() {
  const { locale } = useContext(LocaleContext);
  const texts = getTexts(locale, 'welcome');
  
  return(
    <div className="content">
      <h2>{texts['title']}</h2>
      <NavLink to="/sign-in">
        <button className="button" >{texts['sign-in']}</button>
      </NavLink>
      <br /><br />
      <NavLink to="/sign-up">
        <button className="button" >{texts['sign-up']}</button>
      </NavLink>
    </div>
  );
}

export default WelcomePage;