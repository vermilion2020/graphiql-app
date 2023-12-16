import SaveEndpoint from '../save-endpoint/SaveEndpoint';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { BASIC_TYPES_QUERY } from '../../model/queries';
import {
  useLazyGetSchemaQuery,
  useLazySendRequestQuery
} from '../../redux/api/schemaApi';
import { clearDocs } from '../../redux/features/documentationSlice';
import { useCallback, useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { LocaleContext } from '../../context/LocaleContext';
import { setError } from '../../redux/features/appSlice';

function Editor() {
  const [value, setValue] = useState(BASIC_TYPES_QUERY);
  const { texts } = useContext(LocaleContext);
  const [triggerRequest] = useLazySendRequestQuery();
  const [triggerSchema] = useLazyGetSchemaQuery();
  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);
  const { schemaQueries } = useAppSelector(
    (state) => state.documentationState
  );
  const dispatch = useAppDispatch();
  const { endpoint } = useAppSelector(
    (state) => state.requestState
  );

  const handleGetDocsClick = () => {
    if (endpoint) {
      triggerSchema(endpoint);
    } else {
      dispatch(setError(texts.errorMessages['docs/no-enpoint']));
    }
  }

  const sendRequest = () => {
    triggerRequest({ endpoint, q: value });
  }

  const hideDocs = () => {
    dispatch(clearDocs());
  }

  return (
    <>
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
    </>
  );
}

export default Editor;