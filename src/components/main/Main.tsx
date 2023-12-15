import { useCallback, useContext, useState } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import SaveEndpoint from '../save-endpoint/SaveEndpoint';
import Documentation from '../documentation/Documentation';
import { useLazyGetSchemaQuery, useLazySendRequestQuery } from '../../redux/api/schemaApi';
import { useAppDispatch, useAppSelector } from '../../redux';
import { clearDocs } from '../../redux/features/documentationSlice';
import { BASIC_TYPES_QUERY } from '../../model/queries';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Main() {
  const { texts } = useContext(LocaleContext);
  const [triggerRequest] = useLazySendRequestQuery();
  const [triggerSchema] = useLazyGetSchemaQuery();

  const [value, setValue] = useState(BASIC_TYPES_QUERY);
  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  const dispatch = useAppDispatch();
  const { endpoint, response } = useAppSelector(
    (state) => state.requestState
  );

  const { schemaQueries } = useAppSelector(
    (state) => state.documentationState
  );

  const handleGetDocsClick = () => {
    if (endpoint) {
      triggerSchema(endpoint);
    } else {
      console.log('No endpoint in the store');
    }
  }

  const sendRequest = () => {
    triggerRequest({ endpoint, q: value });
  }

  const hideDocs = () => {
    dispatch(clearDocs());
  }

  return (
    <div className='w-[1200px] m-auto flex'>
      <div className='w-1/3'>
        <Documentation />
      </div>
      <div className='flex flex-col flex-nowrap w-1/3 gap-y-3'>
        <h2>{texts.main.title}</h2>
        {!schemaQueries  && <button onClick={handleGetDocsClick} className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400">Get Docs</button>}
        {schemaQueries  && <button onClick={hideDocs} className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400">Hide Docs</button>}
        <SaveEndpoint />
        {endpoint  && <button onClick={sendRequest} className="rounded-md bg-red-800 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400">Send Request</button>}

        <CodeMirror value={value} height="200px" className="border-gray-700 border-solid border-2" extensions={[javascript({ jsx: true })]} onChange={onChange} />;
      </div>
      <div className='w-1/3'>
        <h2>Response</h2>
        {!!response && 
        <div>{response}</div>
        }
      </div>

    </div>
  );
}

export default Main;
