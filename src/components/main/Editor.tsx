import SaveEndpoint from './save-endpoint/SaveEndpoint';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { indentUnit } from '@codemirror/language';
import { useCallback, useContext } from 'react';
import Toolbar from './toolbar/Toolbar';
import { EditorContext } from '../../context/EditorContext';
import VarsToggle from './vars-toggle/VarsToggle';
import { BASIC_TYPES_QUERY } from '../../model/queries';
const codeClasses = ' border-gray-200 border-solid border-4 rounded-md p-1';

function Editor() {
  const {
    query,
    setQuery,
    headers,
    setHeaders,
    vars,
    setVars,
    collapsed,
    visibleTab,
  } = useContext(EditorContext);

  const editorHeight = collapsed ? '58vh' : '34vh';

  const onChangeMain = useCallback(
    (val: string) => {
      setQuery(val);
    },
    [setQuery]
  );

  const onChangeVars = useCallback(
    (val: string) => {
      setVars(val);
    },
    [setVars]
  );

  const onChangeHeaders = useCallback(
    (val: string) => {
      setHeaders(val);
    },
    [setHeaders]
  );

  return (
    <>
      <SaveEndpoint />
      <Toolbar />
      <div className={codeClasses}>
        <CodeMirror
          value={query}
          placeholder={BASIC_TYPES_QUERY}
          height={editorHeight}
          className="text-left"
          extensions={[javascript({ jsx: true }), indentUnit.of(' ')]}
          onChange={onChangeMain}
        />
      </div>
      <VarsToggle />
      {visibleTab === 'vars' && !collapsed && (
        <div className={`vars-container ${codeClasses}`}>
          <CodeMirror
            value={vars}
            placeholder={JSON.stringify({ var: 'val' }, null, 2)}
            height="200px"
            className="text-left"
            extensions={[javascript({ jsx: true })]}
            onChange={onChangeVars}
          />
        </div>
      )}
      {visibleTab === 'headers' && !collapsed && (
        <div className={`headers-container ${codeClasses}`}>
          <CodeMirror
            value={headers}
            placeholder={JSON.stringify(
              { 'Content-Type': 'application/json' },
              null,
              2
            )}
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
