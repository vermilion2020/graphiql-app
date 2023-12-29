import Documentation from '../documentation/Documentation';
import Editor from './Editor';
import Response from './Response';
import { useAppSelector } from '../../redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Main() {
  const navigate = useNavigate();
  const { schemaTypes, loading } = useAppSelector(
    (state) => state.documentationState
  );
  const { isLoggedIn } = useAppSelector((state) => state.appState);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  const editorClasses =
    schemaTypes ?? loading
      ? 'flex flex-col flex-nowrap gap-y-3 w-5/12 sector-container'
      : 'flex flex-col flex-nowrap gap-y-3 w-8/12 sector-container';
  return (
    <div className="main-container m-auto flex pt-4 gap-x-4">
      <div
        className={
          schemaTypes ?? loading
            ? 'w-3/12 sector-container'
            : 'w-0 h-0 sector-container'
        }
      >
        <Documentation />
      </div>
      <div className={editorClasses}>
        <Editor />
      </div>
      <div className="w-4/12 sector-container">
        <Response />
      </div>
    </div>
  );
}

export default Main;
