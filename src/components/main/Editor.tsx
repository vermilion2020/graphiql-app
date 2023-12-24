import SaveEndpoint from './save-endpoint/SaveEndpoint';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { indentUnit } from '@codemirror/language';
import { useCallback, useContext } from 'react';
import Toolbar from './toolbar/Toolbar';
import { EditorContext } from '../../context/EditorContext';
import VarsToggle from './vars-toggle/VarsToggle';

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
      <div className="border-gray-200 border-solid border-4 rounded-md p-1">
        <CodeMirror
          value={query}
          height={editorHeight}
          className="text-left"
          extensions={[javascript({ jsx: true }), indentUnit.of(' ')]}
          onChange={onChangeMain}
        />
      </div>
      <VarsToggle />
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
