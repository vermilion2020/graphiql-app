import { TYPE_CLASSES, parseType } from "../../helpers/documentation-helper";
import { Arg, Field } from "../../model/schema.interface";
import { useAppDispatch } from "../../redux";
import { setQueriesDisplayed, setTypeDisplayed } from "../../redux/features/documentationSlice";

interface IQueryProps {
  query: Field;
}

function Query ({ query }: IQueryProps) {
  const dispatch = useAppDispatch();

  const handleClickField = (typeName: string) => {
    dispatch(setTypeDisplayed(typeName))
    dispatch(setQueriesDisplayed(false));
  }
  
  const typeBlock = (typeName: string) => 
    <span className={TYPE_CLASSES} onClick={() => handleClickField(typeName)}>{typeName}</span>
  const argBlock = (a: Arg) => 
    <>
      <span className="text-red-900 ms-2">{a.name}</span>: 
      <span className={TYPE_CLASSES} onClick={() => handleClickField(a.type.name ?? '')}>{parseType(a.type)}</span> 
    </>
    
  return (
    <div className="px-2 py-2 w-96">
      <span className="text-violet-700">{query.name}</span>
      {
        query.args.length > 1 ? 
        <>
          <div>{`(`}</div>
          {query.args.map((a, i) => 
             <div key={i}>
              {argBlock(a)}
              {i !== query.args.length - 1 ? ',' : ''}
            </div>)}
          <div>{`):`}
            {typeBlock(parseType(query.type))}
          </div> 
        </> :
         query.args.length === 1 ? 
        <span>(
          {argBlock(query.args[0])}): {typeBlock(parseType(query.type))}
        </span>:
        <span>()</span>
      }
    </div>
  );
}

export default Query;