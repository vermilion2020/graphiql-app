import { useContext } from 'react';
import { LocaleContext } from "../../context/LocaleContext";

function SignUpForm() {
  const { texts } = useContext(LocaleContext);

  return <h2>{texts.signUp.title}</h2>
}

export default SignUpForm;