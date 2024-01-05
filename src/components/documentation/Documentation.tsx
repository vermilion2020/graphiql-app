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

  const mainPartDisplayed =
    !typeDisplayed && !queriesDisplayed && !mutationsDisplayed;

  return (
    <div className="min-h-[200px] md:h-full w-full">
      {loading ? (
        <Loader />
      ) : (
        <div className="text-left overflow-auto w-full">
          {schemaQueries && (
            <h2 className="text-left font-semibold text-white">{texts.main.docs.title}</h2>
          )}
          <div className="heading mt-4 mb-2">
            {mainPartDisplayed && schemaQueries && (
              <div className="text-left text-white">
                {texts.main.docs.query}:
                <span
                  data-testid="query-btn"
                  onClick={() => dispatch(setQueriesDisplayed(true))}
                  className="cursor-pointer hover:underline"
                >
                  <span className="text-orange-600 ps-2">
                    {schemaQueries.name}
                  </span>
                </span>
              </div>
            )}
            {mainPartDisplayed && schemaMutations && (
              <div>
                {texts.main.docs.mutation}:
                <span
                  onClick={() => dispatch(setQueriesDisplayed(true))}
                  className="cursor-pointer hover:underline"
                >
                  <span className="text-orange-600 ps-2">
                    {schemaMutations.name}
                  </span>
                </span>
              </div>
            )}
            {(typeDisplayed || queriesDisplayed || mutationsDisplayed) && (
              <span
                className="text-blue-900 ps-2 cursor-pointer hover:underline"
                onClick={toDefaultView}
              >
                {`< ${texts.main.docs.back}`}
              </span>
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
