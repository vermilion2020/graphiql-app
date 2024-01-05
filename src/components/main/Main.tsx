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

  return (
    <div className="main-container">
      <div
        className={schemaTypes ?? loading ? 'main-container-left' : ' h-0 w-0'}
      >
        <Documentation />
      </div>
      <div className="main-container-center">
        <Editor />
      </div>

      <div className="md:w-4/12 md:flex-none w-full">
        <Response />
      </div>
    </div>
  );
}

export default Main;
