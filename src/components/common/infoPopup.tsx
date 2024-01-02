import CloseIcon from '../../assets/icons/CloseIcon';
import { TEST_HEADERS, TEST_QUERY, TEST_VARS } from '../../model/queries';
import { useAppDispatch } from '../../redux';
import {
  setHeaders,
  setInfoDisplayed,
  setQuery,
  setVars,
} from '../../redux/features/editorSlice';
import { STANDARD_ICON } from '../../utils/documentation-helper';

function InfoPopup() {
  const dispatch = useAppDispatch();

  const handleClickClose = () => {
    dispatch(setInfoDisplayed(false));
  };

  const setTestData = () => {
    dispatch(setQuery(TEST_QUERY));
    dispatch(setVars(TEST_VARS));
    dispatch(setHeaders(TEST_HEADERS));
    dispatch(setInfoDisplayed(false));
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto box-border">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-8" data-testid="info-popup">
        <div className="relative max-w-xs bg-white rounded-lg shadow bg-red-600 ">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-red-600 bg-transparent hover:bg-gray-200 hover:text-red-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            onClick={handleClickClose}
          >
            <CloseIcon />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 border rounded-lg shadow-xl bg-white text-left">
            <h3 className="mb-4 text-gray-500">GraphQL Info</h3>
            <div className="font-semibold text-sm">An example GraphQL query might look like:</div>
            <pre>
              <code>
              {TEST_QUERY}
              </code>
            </pre>
            <div className="font-semibold text-sm">And variables:</div>
            <pre>
              <code>
              {TEST_VARS}
              </code>
            </pre><br />
            <div
              onClick={setTestData}
              className="flex items-center gap-3 hover:cursor-pointer hover:underline"
            >
              <img
                src="./checked.svg"
                className={STANDARD_ICON}
                data-testid="hide-docs-btn"
                alt="Hide docs"
                title="Hide docs"
              />
              Set testing data
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;
