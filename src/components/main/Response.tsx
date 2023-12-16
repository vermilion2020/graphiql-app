import { useCallback, useContext, useState } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppSelector } from '../../redux';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Response() {
  const { texts } = useContext(LocaleContext);
  const { response } = useAppSelector(
    (state) => state.requestState
  );

  const [data, setData] = useState(response);

  const onChange = useCallback((val: string) => {
    setData(val);
  }, []);

  return (
    <>
      <h2>{texts.main.response}</h2>
      <CodeMirror value={data} height="640px" className="border-gray-700 border-solid border-2 text-left" extensions={[javascript({ jsx: true })]} onChange={onChange} />
    </>
  );
}

export default Response;