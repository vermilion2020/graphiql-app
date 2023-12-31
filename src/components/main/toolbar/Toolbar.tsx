import { LocaleContext } from '../../../context/LocaleContext';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  useLazyGetSchemaQuery,
  useLazySendRequestQuery,
} from '../../../redux/api/schemaApi';
import { setError } from '../../../redux/features/appSlice';
import { clearDocs } from '../../../redux/features/documentationSlice';
import {
  setInfoDisplayed,
  setQuery,
} from '../../../redux/features/editorSlice';
import { BIG_ICON, STANDARD_ICON } from '../../../utils/documentation-helper';
import { validJson, validQuery } from '../../../utils/editor-validation';
import { prettifyQuery } from '../../../utils/prettify';
import { useContext } from 'react';
import InfoPopup from '../../common/infoPopup';

function Toolbar() {
  const { query, vars, headers, infoDisplayed } = useAppSelector((state) => state.editorState);
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
      dispatch(setQuery(results.query));
    } else {
      dispatch(setError(texts.main.errors.query));
    }
  };

  const showTooltip = () => {
    dispatch(setInfoDisplayed(true));
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
        <div className="flex w-full justify-between">
          <div className="flex gap-2 ml-2">
            {!schemaQueries && (
              <img
                src="./docs.svg"
                onClick={handleGetDocsClick}
                className={STANDARD_ICON}
                data-testid="show-docs-btn"
                alt="Show docs"
                title="Show docs"
              />
            )}
            {schemaQueries && (
              <img
                src="./hide-docs.svg"
                onClick={hideDocs}
                className={STANDARD_ICON}
                data-testid="hide-docs-btn"
                alt="Hide docs"
                title="Hide docs"
              />
            )}
            <img
              src="./prettify.svg"
              onClick={prettify}
              className={STANDARD_ICON}
              data-testid="prettify-btn"
              alt="Prettify"
              title="Prettify"
            />
            <img
              src="./info.svg"
              onClick={showTooltip}
              className={STANDARD_ICON}
              data-testid="info-btn"
              alt="Prettify"
              title="Prettify"
            />
          </div>
          <div className="mr-2">
            <img
              src="./play.svg"
              onClick={sendRequest}
              className={BIG_ICON}
              data-testid="run-query-btn"
              alt="Run query"
              title="Run query"
            />
          </div>
          {infoDisplayed && <InfoPopup />}
        </div>
      )}
    </>
  );
}

export default Toolbar;
