import SaveEndpoint from './save-endpoint/SaveEndpoint';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useCallback } from 'react';
import Toolbar from './toolbar/Toolbar';
import VarsToggle from './vars-toggle/VarsToggle';
import { BASIC_TYPES_QUERY } from '../../model/queries';
import { useAppDispatch, useAppSelector } from '../../redux';
import {
  setHeaders,
  setQuery,
  setVars,
} from '../../redux/features/editorSlice';
import InfoPopup from '../common/infoPopup';
const codeClasses = ' border-gray-200 border-solid border-4 rounded-md p-1';

function Editor() {
  const { collapsed, visibleTab, query, vars, headers, infoDisplayed } =
    useAppSelector((state) => state.editorState);
  const dispatch = useAppDispatch();
  const editorHeight = collapsed ? '58vh' : '34vh';

  const onChangeMain = useCallback(
    (val: string) => {
      dispatch(setQuery(val));
    },
    [dispatch]
  );

  const onChangeVars = useCallback(
    (val: string) => {
      dispatch(setVars(val));
    },
    [dispatch]
  );

  const onChangeHeaders = useCallback(
    (val: string) => {
      dispatch(setHeaders(val));
    },
    [dispatch]
  );

  return (
    <>
      <SaveEndpoint />
      <Toolbar />
      <div className={codeClasses}>
        <CodeMirror
          data-testid="query-editor"
          value={query}
          placeholder={BASIC_TYPES_QUERY}
          height={editorHeight}
          className="text-left"
          extensions={[javascript({ typescript: true })]}
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
            extensions={[javascript({ typescript: true })]}
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
            extensions={[javascript({ typescript: true })]}
            onChange={onChangeHeaders}
          />
        </div>
      )}
      {infoDisplayed && <InfoPopup />}
    </>
  );
}

export default Editor;
