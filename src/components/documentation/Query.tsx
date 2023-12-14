import { parseType } from "../../helpers/documentation-helper";
import { Arg, Field } from "../../model/schema.interface";
import { AppDispatch } from "../../redux";
import { useDispatch } from 'react-redux';
import { setTypeDisplayed } from "../../redux/features/documentationSlice";

interface IQueryProps {
  query: Field;
}

function Query ({ query }: IQueryProps) {
  const dispatch = useDispatch<AppDispatch>();
  
  const typeBlock = (typeName: string) => 
    <span className="text-orange-600 ms-1" onClick={() => dispatch(setTypeDisplayed(typeName))}>{typeName}</span>
  const argBlock = (a: Arg) => 
    <>
      <span className="text-red-900 ms-2">{a.name}</span>: 
      <span className="text-orange-600 mx-1">{parseType(a.type)}</span>
    </>
    
  return (
    <div className="px-2 py-2 w-10">
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
            {typeBlock(query.type.name ?? '')}
          </div> 
        </> :
        <span>(
          {argBlock(query.args[0])}
          ):
          {typeBlock(query.type.name ?? '')}
        </span>
      }
    </div>
  );
}

export default Query;