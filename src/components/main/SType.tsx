import { parseType } from "../../helpers/documentation-helper";
import { SchemaType } from "../../model/schema.interface";

interface IFieldProps {
  sType: SchemaType;
}

function SType ({ sType }: IFieldProps) {
  return (
    <div>
      <h3 className="font-bold my-2">Fields</h3>
      {
         sType.fields && sType.fields.map((f, i) => 
          <div key={i}>
              <span className="text-red-900">{f.name}</span>: 
              <span className="text-orange-600 ms-1">{parseType(f.type)}</span>
          </div>
         )
      }
    </div>
  );
}

export default SType;