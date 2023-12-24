import { useState, useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useLazyCheckSchemaQuery } from '../../redux/api/schemaApi';
import { setError } from '../../redux/features/appSlice';
import { SMALL_ICON } from '../../utils/documentation-helper';
import {
  setEndpointEdit,
  setEndpointValid,
} from '../../redux/features/requestSlice';

function SaveEndpoint() {
  const { endpoint, endpointValid, endpointEdit } = useAppSelector(
    (state) => state.requestState
  );
  const [triggerCheck] = useLazyCheckSchemaQuery();
  const [url, setUrl] = useState(endpoint);
  const { texts, locale } = useContext(LocaleContext);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setError(null));
    if (url.length > 0) {
      triggerCheck({ endpoint: url, locale });
    } else {
      dispatch(setError(texts.errorMessages['endpoint/empty']));
      dispatch(setEndpointValid(false));
    }
  };

  return (
    <div className="save-endpoint-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        {endpointEdit && (
          <>
            <input
              type="url"
              className={!endpointValid ? 'text-input invalid' : 'text-input'}
              placeholder={texts.main.saveEndpoint.heading}
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value.trim())
              }
            ></input>
            <button
              type="submit"
              className={`${SMALL_ICON} save-icon`}
            ></button>
          </>
        )}
        {!endpointEdit && (
          <>
            <div className="flex font-bold self-center">{url}</div>
            <button
              onClick={() => dispatch(setEndpointEdit(true))}
              className={`${SMALL_ICON} edit-icon`}
            ></button>
          </>
        )}
      </form>
    </div>
  );
}

export default SaveEndpoint;
