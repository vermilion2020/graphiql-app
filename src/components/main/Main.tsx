import { useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";
import { getTexts } from "../../helpers/localisation";

function Main() {
  const { locale } = useContext(LocaleContext);
  const texts = getTexts(locale, 'main');
  return <h2>{texts['title']}</h2>
}

export default Main;
