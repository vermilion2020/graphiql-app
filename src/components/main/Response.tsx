import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppSelector } from '../../redux';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Response() {
  const { texts } = useContext(LocaleContext);
  const { response } = useAppSelector(
    (state) => state.requestState
  );

  return (
    <>
      <h2>{texts.main.response}</h2>
      <CodeMirror
        value={response}
        readOnly
        height="640px"
        className="border-gray-700 border-solid border-2 text-left"
        extensions={[javascript({ jsx: true })]}
      />
    </>
  );
}

export default Response;
