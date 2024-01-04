import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppSelector } from '../../redux';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Loader from '../common/Loader';

function Response() {
  const { texts } = useContext(LocaleContext);
  const { response, loading } = useAppSelector((state) => state.requestState);
  let parserResponse = '';
  try {
    parserResponse = JSON.stringify(JSON.parse(response), null, 2);
  } catch (e) {
    parserResponse = '';
  }

  return (
    <>
      <h2 className="font-semibold text-white mb-2 ">{texts.main.response}</h2>
      <div className="border-gray-200 border-solid border-4 rounded-md p-1">
        {loading ? (
          <Loader />
        ) : (
          <CodeMirror
            value={parserResponse}
            readOnly
            height="69vh"
            className="main-editor"
            extensions={[javascript({ jsx: true })]}
          />
        )}
      </div>
    </>
  );
}

export default Response;
