import { useState, useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import { useAppSelector } from '../../redux';
import { useLazyCheckSchemaQuery } from '../../redux/api/schemaApi';

function SaveEndpoint() {
  const { endpoint } = useAppSelector(
    (state) => state.requestState
  );
  const [triggerCheck] = useLazyCheckSchemaQuery();
  const [url, setUrl] = useState(endpoint);
  const { texts } = useContext(LocaleContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerCheck(url);
  };

  return (
    <div className="save-endpoint-wrapper">
      <h3>{texts.main.saveEndpoint.heading}</h3>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="url"
          className="text-input"
          value={url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUrl(e.target.value.trim())
          }
        ></input>
        <button type="submit" className="button">
          {texts.main.saveEndpoint.button}
        </button>
      </form>
    </div>
  );
}

export default SaveEndpoint;
