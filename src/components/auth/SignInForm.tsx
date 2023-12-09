import { useContext } from 'react';
import { getTexts } from "../../helpers/localisation";
import { LocaleContext } from "../../context/LocaleContext";

function SignInForm() {
  const { locale } = useContext(LocaleContext);
  const texts = getTexts(locale, 'signIn');
  
  return <h2>{texts['title']}</h2>
}

export default SignInForm;