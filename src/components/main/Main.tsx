import Documentation from '../documentation/Documentation';
import Editor from './Editor';
import Response from './Response';

function Main() {
  return (
    <div className="w-[1200px] m-auto flex pt-4 gap-x-4">
      <div className="w-1/3">
        <Documentation />
      </div>
      <div className="flex flex-col flex-nowrap w-1/3 gap-y-3">
        <Editor />
      </div>
      <div className="w-1/3">
        <Response />
      </div>
    </div>
  );
}

export default Main;
