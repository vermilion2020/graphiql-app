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
import { prettifyQuery } from '../../utils/prettify';
import { STANDARD_ICON } from '../../utils/documentation-helper';

function Editor() {
  const [query, setQuery] = useState(BASIC_TYPES_QUERY);
  const [vars, setVars] = useState('');
  const [collapsed, setCollapsed] = useState(false);
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

    let varsParsed = {};
    let headersParsed = {};

    if (vars) {
      const validation = validJson(vars);
      if (validation.status === 'failed') {
        dispatch(setError(texts.main.errors.vars));
      } else {
        varsParsed = validation.json
      }
    }

    if (headers) {
      const validation = validJson(headers);
      if (validation.status === 'failed') {
        dispatch(setError(texts.main.errors.headers));
      } else {
        headersParsed = validation.json
      }
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

  const prettify = () => {
    if (!validQuery(query)) {
      dispatch(setError(texts.main.errors.query));
      return;
    }
    const results = prettifyQuery(query);
    if (results.status === 'ok') {
      setQuery(results.query);
    } else {
      dispatch(setError(texts.main.errors.query));
    }
  }

  return (
    <>
      <SaveEndpoint />
      
      {endpoint && (
        <div className="flex w-full justify-between">
          <div className="flex gap-2 ml-2">
            {!schemaQueries && <img src="./docs.svg" onClick={handleGetDocsClick} className={STANDARD_ICON} alt="Show docs" title="Show docs" />}
            {schemaQueries && <img src="./docs.svg" onClick={hideDocs} className={STANDARD_ICON} alt="Hide docs" title="Hide docs"/>}
            <img src="./prettify.svg" onClick={prettify} className={STANDARD_ICON} alt="Prettify" title="Prettify"/>
          </div>
          <div className="mr-2">
            <img src="./play.svg" onClick={sendRequest} className="w-9 h-9 cursor-pointer hover:opacity-70" alt="Run query" title="Run query"/>
          </div>
        </div>
        
      )}
      <div className="border-gray-200 border-solid border-4 rounded-md p-1">
        <CodeMirror
          value={query}
          height="310px"
          className="text-left"
          extensions={[javascript({ jsx: true })]}
          onChange={onChangeMain}
        />
      </div>
      <div className="flex gap-3">
        <span
          onClick={() => setVisibleTab('vars')}
          className={
            visibleTab === 'vars' ? 'text-teal-500 font-bold' : 'cursor-pointer hover:text-teal-400'
          }
        >
          {texts.main.variables}
        </span>
        <span
          onClick={() => setVisibleTab('headers')}
          className={
            visibleTab === 'headers'
              ? 'text-teal-500 font-bold'
              : 'cursor-pointer hover:text-teal-400'
          }
        >
          {texts.main.headers}
        </span>
        {collapsed ?
          <img src="./expand.svg" onClick={() => setCollapsed(false)} className={STANDARD_ICON} alt="Show Variables and Headers" title="Show Variables and Headers"/> :
          <img src="./collapse.svg" onClick={() => setCollapsed(true)} className={STANDARD_ICON} alt="Hide Variables and Headers" title="Hide Variables and Headers"/>
        }
      </div>
      {visibleTab === 'vars' && !collapsed && (
        <div className="vars-container border-gray-200 border-solid border-4 rounded-md p-1">
          <CodeMirror
            value={vars}
            height="200px"
            className="text-left"
            extensions={[javascript({ jsx: true })]}
            onChange={onChangeVars}
          />
        </div>
      )}
      {visibleTab === 'headers' && !collapsed && (
        <div className="headers-container border-gray-200 border-solid border-4 rounded-md p-1">
          <CodeMirror
            value={headers}
            height="200px"
            className="text-left"
            extensions={[javascript({ jsx: true })]}
            onChange={onChangeHeaders}
          />
        </div>
      )}
    </>
  );
}

export default Editor;
