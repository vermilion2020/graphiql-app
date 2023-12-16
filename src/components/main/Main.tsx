import { useEffect} from 'react';
import Documentation from '../documentation/Documentation';
import { useAppSelector } from '../../redux';
import { useNavigate } from 'react-router-dom';
import Editor from './Editor';
import Response from './Response';

function Main() {
  const navigate = useNavigate();

  const { isLoggedIn } = useAppSelector(
    (state) => state.appState
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  });

  return (
    <div className='w-[1200px] m-auto flex pt-4'>
      <div className='w-1/3'>
        <Documentation />
      </div>
      <div className='flex flex-col flex-nowrap w-1/3 gap-y-3'>
        <Editor />
      </div>
      <div className='w-1/3'>
        <Response />
      </div>
    </div>
  );
}

export default Main;
