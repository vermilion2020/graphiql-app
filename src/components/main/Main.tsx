import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import SaveEndpoint from '../save-endpoint/SaveEndpoint';

function Main() {
  const { texts } = useContext(LocaleContext);
  return (
    <>
      <h2>{texts.main.title}</h2>
      <SaveEndpoint />
    </>
  );
}

export default Main;
