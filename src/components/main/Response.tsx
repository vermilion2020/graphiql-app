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
    <div className="w-full h-full flex flex-col">
      <h2 className="font-semibold text-white mb-2 flex-none">{texts.main.response}</h2>
      <div className="border-gray-200 border-solid border-4 rounded-md p-1 grow">
        {loading ? (
          <Loader />
        ) : (
          <CodeMirror
            value={parserResponse}
            readOnly
            minHeight="200px"
            height="100%"
            className="main-editor"
            extensions={[javascript({ jsx: true })]}
          />
        )}
      </div>
    </div>
  );
}

export default Response;
