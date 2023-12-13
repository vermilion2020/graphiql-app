import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import './_editor.scss';

function Editor() {
  return (
    <div className="editor-wrapper">
      <CodeMirror
        options={{
          lineNumbers: true,
          mode: 'javascript',
        }}
      />
    </div>
  );
}

export default Editor;
