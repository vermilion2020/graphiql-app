import { useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";

function Main() {
  const { texts } = useContext(LocaleContext);
  return <h2>{texts.main.title}</h2>
}

export default Main;
