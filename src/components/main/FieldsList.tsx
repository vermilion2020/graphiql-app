import { Dispatch, SetStateAction } from "react";
import { SchemaType } from "../../model/schema.interface";

interface IFieldsList {
  fieldsData: SchemaType[];
  clickHandler: Dispatch<SetStateAction<SchemaType | null>>;
}

function FieldsList ({ fieldsData, clickHandler }: IFieldsList) {
  return (
    <div>
      {
         fieldsData && fieldsData.map((f, i) => 
         f.kind === 'OBJECT' ? 
         <div onClick={() => clickHandler(f)} key={i} className="text-orange-600 hover:underline cursor-pointer">{f.name}</div> :
         <div key={i} className="text-red-900">{f.name}</div>
         )
      }
    </div>
  );
}

export default FieldsList;