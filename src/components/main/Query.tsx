import { Field, Type2 } from "../../model/schema.interface";

interface IQueryProps {
  query: Field;
}

function Query ({ query }: IQueryProps) {
  function parseType(arg: Type2, type = '') {
    if (arg.kind === 'LIST') {
      type += '[]';
    }
     if (arg.name) {
      type = arg.name + type;
     } else if (arg.ofType) {
      return parseType(arg.ofType, type)
     }
    return type;

  }
  return (
    <div>
      <h3 className="text-orange-600">{query.name}</h3>
      {
        query.args.length && 
        <>
          <div>{'{'}</div>
          {query.args.map((a, i) => <div key={i}>{`${a.name}: ${parseType(a.type)},`}</div>)}
          <div>{'}'}</div>
        </> 
      }
    </div>
  );
}

export default Query;