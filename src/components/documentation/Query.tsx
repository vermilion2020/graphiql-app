import { TYPE_CLASSES, parseType } from '../../utils/documentation-helper';
import { Arg, Field } from '../../model/schema.interface';
import { useAppDispatch } from '../../redux';
import {
  setQueriesDisplayed,
  setTypeDisplayed,
} from '../../redux/features/documentationSlice';
import { Link } from 'react-router-dom';

interface IQueryProps {
  query: Field;
}

function Query({ query }: IQueryProps) {
  const dispatch = useAppDispatch();

  const handleClickField = (typeName: string) => {
    dispatch(setTypeDisplayed(typeName));
    dispatch(setQueriesDisplayed(false));
  };

  const typeBlock = (typeName: string) => (
    <Link
      to="#"
      className={TYPE_CLASSES}
      onClick={handleClickField.bind(null, typeName)}
    >
      {typeName}
    </Link>
  );
  const argBlock = (a: Arg) => (
    <>
      <span className="text-blue-300 ms-2">{a.name}</span>:
      <Link
        to="#"
        className={TYPE_CLASSES}
        onClick={handleClickField.bind(null, parseType(a.type))}
      >
        {parseType(a.type)}
      </Link>
    </>
  );

  return (
    <div className="px-2 py-2 w-96 text-white">
      <span className="text-violet-700">{query.name}</span>
      {query.args.length > 1 ? (
        <>
          <div>{`(`}</div>
          {query.args.map((a, i) => (
            <div key={i}>
              {argBlock(a)}
              {i !== query.args.length - 1 ? ',' : ''}
            </div>
          ))}
          <div>
            {`):`}
            {typeBlock(parseType(query.type))}
          </div>
        </>
      ) : query.args.length === 1 ? (
        <span className="ml-1">
          ({argBlock(query.args[0])}): {typeBlock(parseType(query.type))}
        </span>
      ) : (
        <span>()</span>
      )}
    </div>
  );
}

export default Query;
