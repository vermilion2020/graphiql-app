import { useState, useContext } from 'react';
import { LocaleContext } from '../../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { useLazyCheckSchemaQuery } from '../../../redux/api/schemaApi';
import { setError } from '../../../redux/features/appSlice';
import { SMALL_ICON } from '../../../utils/documentation-helper';
import {
  setEndpointEdit,
  setEndpointValid,
} from '../../../redux/features/requestSlice';

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
        {(endpointEdit || !endpoint) && (
          <>
            <input
              type="url"
              className={!endpointValid ? 'text-input bg-white invalid' : 'text-input bg-white'}
              placeholder={texts.main.saveEndpoint.heading}
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value.trim())
              }
            />
            <button
              type="submit"
              className={`${SMALL_ICON} save-icon`}
            />
          </>
        )}
        {!endpointEdit && endpoint && (
          <>
            <div className="flex font-semibold text-white self-center mt-[10px] overflow-auto">{url}</div>
            <button
              onClick={() => dispatch(setEndpointEdit(true))}
              className={`${SMALL_ICON} edit-icon`}
            />
          </>
        )}
      </form>
    </div>
  );
}

export default SaveEndpoint;
