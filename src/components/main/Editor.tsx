import SaveEndpoint from '../save-endpoint/SaveEndpoint';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { BASIC_TYPES_QUERY } from '../../model/queries';
import {
  useLazyGetSchemaQuery,
  useLazySendRequestQuery,
} from '../../redux/api/schemaApi';
import { clearDocs } from '../../redux/features/documentationSlice';
import { useCallback, useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux';
import { LocaleContext } from '../../context/LocaleContext';
import { setError } from '../../redux/features/appSlice';
import { validJson, validQuery } from '../../utils/editor-validation';

function Editor() {
  const [query, setQuery] = useState(BASIC_TYPES_QUERY);
  const [vars, setVars] = useState('');
  const [headers, setHeaders] = useState('');
  const [visibleTab, setVisibleTab] = useState<'vars' | 'headers'>('vars');
  const { texts } = useContext(LocaleContext);
  const [triggerRequest] = useLazySendRequestQuery();
  const [triggerSchema] = useLazyGetSchemaQuery();

  const onChangeMain = useCallback((val: string) => {
    setQuery(val);
  }, []);

  const onChangeVars = useCallback((val: string) => {
    setVars(val);
  }, []);

  const onChangeHeaders = useCallback((val: string) => {
    setHeaders(val);
  }, []);

  const { schemaQueries } = useAppSelector((state) => state.documentationState);
  const dispatch = useAppDispatch();
  const { endpoint } = useAppSelector((state) => state.requestState);

  const handleGetDocsClick = () => {
    if (endpoint) {
      triggerSchema(endpoint);
    } else {
      dispatch(setError(texts.errorMessages['docs/no-enpoint']));
    }
  };

  const sendRequest = () => {
    if (!validQuery(query)) {
      dispatch(setError(texts.main.errors.query));
      return;
    }
    if (!validJson(vars)) {
      dispatch(setError(texts.main.errors.vars));
      return;
    }
    if (!validJson(headers)) {
      dispatch(setError(texts.main.errors.headers));
      return;
    }

    let varsParsed = {};
    let headersParsed = {};
    try {
      varsParsed = JSON.parse(vars);
    } catch {
      console.log('vars not parsed');
    }

    try {
      headersParsed = JSON.parse(headers);
    } catch {
      console.log('headers not parsed');
    }

    triggerRequest({
      endpoint,
      q: query,
      vars: varsParsed,
      headers: headersParsed,
    });
  };

  const hideDocs = () => {
    dispatch(clearDocs());
  };

  return (
    <>
      <h2>{texts.main.title}</h2>
      {!schemaQueries && (
        <button
          onClick={handleGetDocsClick}
          className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400"
        >
          Get Docs
        </button>
      )}
      {schemaQueries && (
        <button
          onClick={hideDocs}
          className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400"
        >
          Hide Docs
        </button>
      )}
      <SaveEndpoint />
      {endpoint && (
        <button
          onClick={sendRequest}
          className="rounded-md bg-red-800 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400"
        >
          Send Request
        </button>
      )}

      <CodeMirror
        value={query}
        height="200px"
        className="border-gray-700 border-solid border-2 text-left"
        extensions={[javascript({ jsx: true })]}
        onChange={onChangeMain}
      />
      <div className="flex gap-1">
        <span
          onClick={() => setVisibleTab('vars')}
          className={
            visibleTab === 'vars' ? 'text-blue-900 font-bold' : 'cursor-pointer'
          }
        >
          {texts.main.variables}
        </span>
        <span
          onClick={() => setVisibleTab('headers')}
          className={
            visibleTab === 'headers'
              ? 'text-blue-900 font-bold'
              : 'cursor-pointer'
          }
        >
          {texts.main.headers}
        </span>
      </div>
      {visibleTab === 'vars' && (
        <div className="vars-container">
          <CodeMirror
            value={vars}
            height="200px"
            className="border-gray-700 border-solid border-2 text-left"
            extensions={[javascript({ jsx: true })]}
            onChange={onChangeVars}
          />
        </div>
      )}
      {visibleTab === 'headers' && (
        <div className="headers-container">
          <CodeMirror
            value={headers}
            height="200px"
            className="border-gray-700 border-solid border-2 text-left"
            extensions={[javascript({ jsx: true })]}
            onChange={onChangeHeaders}
          />
        </div>
      )}
    </>
  );
}

export default Editor;
