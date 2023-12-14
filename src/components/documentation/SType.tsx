import { parseType } from "../../helpers/documentation-helper";
import { useAppSelector } from "../../redux";

interface IFieldProps {
  sTypeName: string;
}

function SType ({ sTypeName }: IFieldProps) {
  const { schemaTypes } = useAppSelector(
    (state) => state.documentationState
  );
  const sType = schemaTypes?.find(f => f.name === sTypeName);
  
  return (
    <div>
      <h3 className="font-bold my-2">Fields</h3>
      { sType ?
         sType.fields && sType.fields.map((f, i) => 
          <div key={i}>
              <span className="text-red-900">{f.name}</span>: 
              <span className="text-orange-600 ms-1">{parseType(f.type)}</span>
          </div>
         ) :
         <div>Type doesn't exist</div>
      }
    </div>
  );
}

export default SType;