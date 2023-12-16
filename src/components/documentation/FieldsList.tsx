import { TYPE_CLASSES } from "../../utils/documentation-helper";
import { SchemaType } from "../../model/schema.interface";
import { useAppDispatch } from "../../redux";
import { setTypeDisplayed } from "../../redux/features/documentationSlice";

interface IFieldsList {
  fieldsData: SchemaType[];
}

function FieldsList ({ fieldsData }: IFieldsList) {
  const dispatch = useAppDispatch();
  
  return (
    <div>
      {
        fieldsData && fieldsData.map((f, i) => 
          <div
            onClick={() => dispatch(setTypeDisplayed(f.name))}
            key={i}
            className={TYPE_CLASSES}
          >{f.name}</div>
        )
      }
    </div>
  );
}

export default FieldsList;