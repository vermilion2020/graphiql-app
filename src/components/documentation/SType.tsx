import { TYPE_CLASSES, parseType } from "../../utils/documentation-helper";
import { SchemaType } from "../../model/schema.interface";
import { useAppSelector, useAppDispatch } from "../../redux";
import { setTypeDisplayed } from "../../redux/features/documentationSlice";
import { useContext } from "react";
import { LocaleContext } from "../../context/LocaleContext";

interface IFieldProps {
  sTypeName: string;
}

function SType ({ sTypeName }: IFieldProps) {
  const { schemaTypes } = useAppSelector(
    (state) => state.documentationState
  );
  const dispatch = useAppDispatch();
  const sType = schemaTypes?.find(f => f.name === sTypeName) as SchemaType;
  const { texts } = useContext(LocaleContext);

  return (
    <div>
      {}
      { sType?.kind === 'OBJECT' && <h3 className="font-bold my-2">{`${texts.main.docs.fields} ${sType.name}`}</h3> }
      { sType?.kind === 'INPUT_OBJECT' && <h3 className="font-bold my-2">{`${texts.main.docs.inputFields} ${sType.name}`}</h3> }
      { sType?.kind === 'SCALAR' && <h3 className="my-2">{`${sType.name} ${texts.main.docs.kind} 'Scalar'`}</h3> }
      { sType?.kind === 'ENUM' && <h3 className="my-2">{`${sType.name} ${texts.main.docs.kind} 'Enum'`}</h3> }
      { sType && sType.fields ? sType.fields.map((f, i) => 
          <div key={i}>
              <span className="text-red-900">{f.name}</span>: 
              <span
                className={TYPE_CLASSES}
                onClick={() => dispatch(setTypeDisplayed(parseType(f.type)))}
              >{parseType(f.type)}</span>
          </div>
         ) :
         sType.inputFields ? sType.inputFields.map((f, i) => 
          <div key={i}>
              <span className="text-red-900">{f.name}</span>: 
              <span
                className={TYPE_CLASSES}
                onClick={() => dispatch(setTypeDisplayed(parseType(f.type)))}
              >{parseType(f.type)}</span>
          </div>
         ) :
         !sType ? <div>${texts.main.docs.noType}</div> : ''
      }
    </div>
  );
}

export default SType;