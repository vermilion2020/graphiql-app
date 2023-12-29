import CloseIcon from "../../assets/icons/CloseIcon";
import { TEST_HEADERS, TEST_QUERY, TEST_VARS } from "../../model/queries";
import { useAppDispatch } from "../../redux";
import { setHeaders, setInfoDisplayed, setQuery, setVars } from "../../redux/features/editorSlice";

function InfoPopup() {
  const dispatch = useAppDispatch();

  const handleClickClose = () => {
    dispatch(setInfoDisplayed(false));
  }

  const setTestData = () => {
    dispatch(setQuery(TEST_QUERY));
    dispatch(setVars(TEST_VARS));
    dispatch(setHeaders(TEST_HEADERS));
    dispatch(setInfoDisplayed(false));
  }
  
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" />
      <div className="flex flex-row items-center justify-center min-h-screen px-4 py-8">
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
            <div>You can test this app with the request</div>
            <div>
              {
              `query ($id: [ID!]! = "id") {
                charactersByIds(ids: $id) {
                  name
                }
              }`
              }
            </div>
            <div>And variables:</div>
            <div>
              {
                `{
                  "id": [1,2,3]
                }`
              }
            </div>
            <button
                onClick={setTestData}
                className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
              text-white shadow-sm hover:bg-buttonBg-400 disabled:bg-disabledButton"
              >
                Set testing data
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPopup;