import { useState, useContext } from 'react';
import { LocaleContext } from '../../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { useLazyCheckSchemaQuery } from '../../../redux/api/schemaApi';
import { setError } from '../../../redux/features/appSlice';
import {
  setEndpointEdit,
  setEndpointValid,
} from '../../../redux/features/requestSlice';
import EditIcon from '../../../assets/icons/EditIcon';
import DoneIcon from '../../../assets/icons/DoneIcon';

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

  const handleEditToggle = () => {
    dispatch(setEndpointEdit(true));
  };

  return (
    <div className="save-endpoint-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        {(endpointEdit || !endpoint) && (
          <>
            <input
              type="url"
              data-testid="url-input"
              className={
                !endpointValid
                  ? 'text-input bg-white invalid'
                  : 'text-input bg-white'
              }
              placeholder={texts.main.saveEndpoint.heading}
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value.trim())
              }
            />
            <button
              type="submit"
              className="edit-toggle"
              data-testid="save-btn"
            >
              <DoneIcon />
            </button>
          </>
        )}
        {!endpointEdit && endpoint && (
          <>
            <div className="flex text-white self-center truncate">{url}</div>
            <button
              data-testid="edit-btn"
              type="submit"
              className="edit-toggle"
              onClick={handleEditToggle}
            >
              <EditIcon />
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default SaveEndpoint;
