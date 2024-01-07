import DescriptionIcon from '../../../assets/icons/DescriptionIcon';
import FormatIcon from '../../../assets/icons/FormatIcon';
import RunIcon from '../../../assets/icons/RunIcon';
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

import { validJson, validQuery } from '../../../utils/editor-validation';
import { prettifyQuery } from '../../../utils/prettify';
import { useContext } from 'react';
import InfoPopup from '../../common/infoPopup';
import InfoIcon from '../../../assets/icons/InfoIcon';

function Toolbar() {
  const { query, vars, headers, infoDisplayed } = useAppSelector(
    (state) => state.editorState
  );
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
    if (!query.trim().length) {
      dispatch(setError(texts.main.errors.emptyQuery));
      return;
    }
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
                data-testid="show-docs-btn"
              >
                <DescriptionIcon />
              </button>
            )}
            {schemaQueries && (
              <button
                type="button"
                className="edit-toggle"
                onClick={hideDocs}
                data-testid="hide-docs-btn"
              >
                <DescriptionIcon />
              </button>
            )}
            <button
              type="button"
              className="edit-toggle"
              onClick={prettify}
              data-testid="prettify-btn"
            >
              <FormatIcon />
            </button>
            <button
              type="button"
              className="edit-toggle"
              onClick={showTooltip}
              data-testid="info-btn"
            >
              <InfoIcon />
            </button>
          </div>
          <div className="h-full">
            <button
              type="button"
              className="edit-toggle"
              onClick={sendRequest}
              data-testid="run-query-btn"
            >
              <RunIcon />
            </button>
          </div>
          {infoDisplayed && <InfoPopup />}
        </div>
      )}
    </>
  );
}

export default Toolbar;
