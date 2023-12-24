import { EditorContext } from '../../../context/EditorContext';
import { LocaleContext } from '../../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  useLazyGetSchemaQuery,
  useLazySendRequestQuery,
} from '../../../redux/api/schemaApi';
import { setError } from '../../../redux/features/appSlice';
import { clearDocs } from '../../../redux/features/documentationSlice';
import { BIG_ICON, STANDARD_ICON } from '../../../utils/documentation-helper';
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
      } else {
        varsParsed = validation.json;
      }
    }

    if (headers) {
      const validation = validJson(headers);
      if (validation.status === 'failed') {
        dispatch(setError(texts.main.errors.headers));
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
        <div className="flex w-full justify-between">
          <div className="flex gap-2 ml-2">
            {!schemaQueries && (
              <img
                src="./docs.svg"
                onClick={handleGetDocsClick}
                className={STANDARD_ICON}
                alt="Show docs"
                title="Show docs"
              />
            )}
            {schemaQueries && (
              <img
                src="./docs.svg"
                onClick={hideDocs}
                className={STANDARD_ICON}
                alt="Hide docs"
                title="Hide docs"
              />
            )}
            <img
              src="./prettify.svg"
              onClick={prettify}
              className={STANDARD_ICON}
              alt="Prettify"
              title="Prettify"
            />
          </div>
          <div className="mr-2">
            <img
              src="./play.svg"
              onClick={sendRequest}
              className={BIG_ICON}
              alt="Run query"
              title="Run query"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Toolbar;
