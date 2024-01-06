import Queries from './Queries';
import FieldsList from './FieldsList';
import SType from './SType';
import { useAppDispatch, useAppSelector } from '../../redux';
import {
  setQueriesDisplayed,
  setTypeDisplayed,
} from '../../redux/features/documentationSlice';
import { useContext } from 'react';
import { LocaleContext } from '../../context/LocaleContext';
import Loader from '../common/Loader';
import { Link } from 'react-router-dom';

function Documentation() {
  const dispatch = useAppDispatch();

  const {
    schemaQueries,
    schemaMutations,
    schemaTypes,
    typeDisplayed,
    queriesDisplayed,
    mutationsDisplayed,
    loading,
  } = useAppSelector((state) => state.documentationState);
  const { texts } = useContext(LocaleContext);

  const toDefaultView = () => {
    dispatch(setTypeDisplayed(null));
    dispatch(setQueriesDisplayed(false));
  };

  const showQueries = () => {
    dispatch(setQueriesDisplayed(true));
  };

  const mainPartDisplayed =
    !typeDisplayed && !queriesDisplayed && !mutationsDisplayed;

  return (
    <div className="min-h-[200px] md:h-full w-full ">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-left overflow-auto w-full docs-container">
          {schemaQueries && (
            <>
              <h2 className="text-left font-semibold text-white mb-3">
                {texts.main.docs.title}
              </h2>
              <Link to="https://graphql.org/learn/" target="_blank">
                {texts.main.docs.officialDocs}
              </Link>
            </>
          )}
          <div className="heading mt-2 mb-2">
            {mainPartDisplayed && schemaQueries && (
              <div className="text-left">
                <span className="text-white">{texts.main.docs.query}:</span>
                <Link
                  to="#"
                  data-testid="query-btn"
                  onClick={showQueries}
                  className="cursor-pointer hover:underline"
                >
                  <span className="ps-2">{schemaQueries.name}</span>
                </Link>
              </div>
            )}
            {mainPartDisplayed && schemaMutations && (
              <div>
                <span className="text-white">{texts.main.docs.mutation}:</span>
                <Link
                  to="#"
                  onClick={showQueries}
                  className="cursor-pointer hover:underline"
                >
                  <span className="text-orange-600 ps-2">
                    {schemaMutations.name}
                  </span>
                </Link>
              </div>
            )}
            {(typeDisplayed || queriesDisplayed || mutationsDisplayed) && (
              <Link
                to="#"
                data-testid="back-btn"
                className="text-blue-900 ps-2 cursor-pointer hover:underline"
                onClick={toDefaultView}
              >
                {`< ${texts.main.docs.back}`}
              </Link>
            )}
          </div>

          {schemaQueries && queriesDisplayed && (
            <Queries queriesData={schemaQueries} />
          )}
          {schemaMutations && mutationsDisplayed && (
            <Queries queriesData={schemaMutations} />
          )}
          {typeDisplayed && <SType sTypeName={typeDisplayed} />}
          {schemaTypes && !typeDisplayed && !queriesDisplayed && (
            <FieldsList fieldsData={schemaTypes} />
          )}
        </div>
      )}
    </div>
  );
}

export default Documentation;
