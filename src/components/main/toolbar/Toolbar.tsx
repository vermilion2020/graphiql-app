import DescriptionIcon from '../../../assets/icons/DescriptionIcon';
import FormatIcon from '../../../assets/icons/FormatIcon';
import RunIcon from '../../../assets/icons/RunIcon';
import { EditorContext } from '../../../context/EditorContext';
import { LocaleContext } from '../../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  useLazyGetSchemaQuery,
  useLazySendRequestQuery,
} from '../../../redux/api/schemaApi';
import { setError } from '../../../redux/features/appSlice';
import { clearDocs } from '../../../redux/features/documentationSlice';
import { validJson, validQuery } from '../../../utils/editor-validation';
import { prettifyQuery } from '../../../utils/prettify';
import { useContext } from 'react';

function Toolbar() {
  const { query, setQuery, headers, vars } = useContext(EditorContext);
  const { texts, locale } = useContext(LocaleContext);
  const [triggerSchema] = useLazyGetSchemaQuery();
  const [triggerRequest] = useLazySendRequestQuery();
  const dispatch = useAppDispatch();

  const { endpoint } = useAppSelector((state) => state.requestState);
  const { schemaQueries } = useAppSelector((state) => state.documentationState);

  const hideDocs = () => {
    dispatch(clearDocs());
  };

  const handleGetDocsClick = () => {
    if (endpoint) {
      triggerSchema({ endpoint, locale });
    } else {
      dispatch(setError(texts.errorMessages['docs/no-enpoint']));
    }
  };

  const prettify = () => {
    if (!validQuery(query)) {
      dispatch(setError(texts.main.errors.query));
      return;
    }
    const results = prettifyQuery(query);
    if (results.status === 'ok') {
      setQuery(results.query);
    } else {
      dispatch(setError(texts.main.errors.query));
    }
  };

  const sendRequest = () => {
    if (!validQuery(query)) {
      dispatch(setError(texts.main.errors.query));
      return;
    }

    let varsParsed = {};
    let headersParsed = {};

    if (vars) {
      const validation = validJson(vars);
      if (validation.status === 'failed') {
        dispatch(setError(texts.main.errors.vars));
        return;
      } else {
        varsParsed = validation.json;
      }
    }

    if (headers) {
      const validation = validJson(headers);
      if (validation.status === 'failed') {
        dispatch(setError(texts.main.errors.headers));
        return;
      } else {
        headersParsed = validation.json;
      }
    }

    triggerRequest({
      endpoint,
      q: query,
      vars: varsParsed,
      headers: headersParsed,
      locale,
    });
  };

  return (
    <>
      {endpoint && (
        <div className="flex w-full justify-between items-center flex-none h-10">
          <div className="flex gap-4 h-full">
            {!schemaQueries && (
              <button
                type="button"
                className="edit-toggle"
                onClick={handleGetDocsClick}
              >
                <DescriptionIcon />
              </button>
            )}
            {schemaQueries && (
              <button type="button" className="edit-toggle" onClick={hideDocs}>
                <DescriptionIcon />
              </button>
            )}
            <button type="button" className="edit-toggle" onClick={prettify}>
              <FormatIcon />
            </button>
          </div>
          <div className="h-full">
            <button
              type="button"
              className="edit-toggle"
              onClick={sendRequest}
            >
              <RunIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Toolbar;
