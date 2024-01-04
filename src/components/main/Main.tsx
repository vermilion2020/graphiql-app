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
        className={schemaTypes ?? loading ? ' md:flex-none h-full md:w-3/12 w-full' : ' h-0 w-0'}
      >
        <Documentation />
      </div>
      <div className=" md:grow flex flex-col flex-nowrap gap-y-2 md:w-5/12 w-full self-stretch">
        <Editor />
      </div>

      <div className=" md:flex-none md:w-4/12 w-full h-full">
        <Response />
      </div>
    </div>
  );
}

export default Main;
