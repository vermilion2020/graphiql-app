import { useState, useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../redux';
import { useLazyCheckSchemaQuery } from '../../redux/api/schemaApi';
import { setError } from '../../redux/features/appSlice';

function SaveEndpoint() {
  const { endpoint } = useAppSelector((state) => state.requestState);
  const [triggerCheck] = useLazyCheckSchemaQuery();
  const [url, setUrl] = useState(endpoint);
  const [editMode, setEditMode] = useState(!endpoint);
  const { texts } = useContext(LocaleContext);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.length > 0) {
      triggerCheck(url);
      setEditMode(false);
    } else {
      dispatch(setError(texts.errorMessages['endpoint/empty']));
    }
  };

  return (
    <div className="save-endpoint-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        {editMode && (
          <>
            <input
              type="url"
              className="text-input"
              placeholder={texts.main.saveEndpoint.heading}
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value.trim())
              }
            ></input>
            <button
              type="submit"
              className="w-6 h-6 cursor-pointer save-icon self-center hover:opacity-70"
            ></button>
          </>
        )}
        {!editMode && (
          <>
            <div className="flex font-bold self-center">{url}</div>
            <button
              onClick={() => setEditMode(true)}
              className="w-6 h-6 cursor-pointer edit-icon self-center hover:opacity-70"
            ></button>
          </>
        )}
      </form>
    </div>
  );
}

export default SaveEndpoint;
