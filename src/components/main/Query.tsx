import { parseType } from "../../helpers/documentation-helper";
import { Field } from "../../model/schema.interface";

interface IQueryProps {
  query: Field;
}

function Query ({ query }: IQueryProps) {
  return (
    <div className="px-2 py-2 w-10">
      <span className="text-violet-700">{query.name}</span>
      {
        query.args.length > 1 ? 
        <>
          <div>{`(`}</div>
          {query.args.map((a, i) => 
             <div key={i}>
              <span className="text-red-900 ms-4">{a.name}</span>: 
              <span className="text-orange-600 ms-1">{parseType(a.type)},</span>
            </div>)}
          <div>{`):`}
          <span className="text-orange-600 ms-1">{query.type.name}</span></div>
        </> :
        <span>(
          <span className="text-red-900">{query.args[0].name}</span>: 
          <span className="text-orange-600 ms-1">{parseType(query.args[0].type)}</span>):
          <span className="text-orange-600 ms-1">{query.type.name}</span>
        </span>
      }
    </div>
  );
}

export default Query;