import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppSelector } from '../../redux';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Response() {
  const { texts } = useContext(LocaleContext);
  const { response } = useAppSelector((state) => state.requestState);

  return (
    <>
      <h2>{texts.main.response}</h2>
      <div className="border-gray-200 border-solid border-4 rounded-md p-1">
        <CodeMirror
          value={JSON.stringify(JSON.parse(response), null, 2)}
          readOnly
          height="640px"
          className="text-left"
          extensions={[javascript({ jsx: true })]}
        />
      </div>
    </>
  );
}

export default Response;
