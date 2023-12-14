import { SchemaType } from "../../model/schema.interface";
import { AppDispatch } from "../../redux";
import { useDispatch } from 'react-redux';
import { setTypeDisplayed } from "../../redux/features/documentationSlice";

interface IFieldsList {
  fieldsData: SchemaType[];
}

function FieldsList ({ fieldsData }: IFieldsList) {
  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <div>
      {
         fieldsData && fieldsData.map((f, i) => 
         f.kind === 'OBJECT' ? 
         <div onClick={() => dispatch(setTypeDisplayed(f.name))} key={i} className="text-orange-600 hover:underline cursor-pointer">{f.name}</div> :
         <div key={i} className="text-red-900">{f.name}</div>
         )
      }
    </div>
  );
}

export default FieldsList;