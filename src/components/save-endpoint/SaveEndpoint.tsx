import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { LocaleContext } from '../../context/LocaleContext';
import './_save-endpoint.scss';
import { setEndpoint } from '../../redux/features/endpointSlice';

function SaveEndpoint() {
  const [url, setUrl] = useState('');
  const { texts } = useContext(LocaleContext);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('endpoint', url);
    dispatch(setEndpoint(url));
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
            setUrl(e.target.value)
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
