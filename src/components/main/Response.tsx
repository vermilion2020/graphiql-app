import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppSelector } from '../../redux';

function Response() {
  const { texts } = useContext(LocaleContext);
  const { response } = useAppSelector(
    (state) => state.requestState
  );

  return (
    <>
      <h2>{texts.main.response}</h2>
      <div className="border-solid border-1 border-gray-600 w-5/6 m-auto min-h-[390px]">
        {!!response && response}
      </div>
    </>
  );
}

export default Response;