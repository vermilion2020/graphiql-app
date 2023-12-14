import CloseIcon from '../../assets/icons/CloseIcon';
import ExclamationMark from '../../assets/icons/ExclamationMark';
import { useAppSelector } from '../../redux';

interface IPopupErrorProps {
  setIsError: (arg: boolean) => void;
}

export default function PopupError({ setIsError }: IPopupErrorProps) {
  const authError = useAppSelector((state) => state.appState.authError);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-8">
      {/* <div className="absolute bottom-8 left-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 z-100 w-11/12 max-w-md"> */}
        <div className="relative max-w-xs bg-white rounded-lg shadow bg-red-600 ">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-red-600 bg-transparent hover:bg-gray-200 hover:text-red-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={() => setIsError(false)}
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 border rounded-lg shadow-xl text-center bg-yellow-50">
            <ExclamationMark />
            <h3 className="mb-4 text-gray-500">{authError && authError}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
