import { useContext } from 'react';
import { getTexts } from "../../helpers/localisation";
import { LocaleContext } from "../../context/LocaleContext";

function SignUpForm() {
  const { locale } = useContext(LocaleContext);
  const texts = getTexts(locale, 'signUp');
  
  return <h2>{texts['title']}</h2>
}

export default SignUpForm;