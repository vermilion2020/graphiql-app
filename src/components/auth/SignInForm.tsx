import { useContext } from 'react';
import { LocaleContext } from "../../context/LocaleContext";

function SignInForm() {
  const { texts } = useContext(LocaleContext);

  return <h2>{texts.signIn.title}</h2>
}

export default SignInForm;