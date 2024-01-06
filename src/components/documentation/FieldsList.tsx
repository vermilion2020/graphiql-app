import { TYPE_CLASSES } from '../../utils/documentation-helper';
import { SchemaType } from '../../model/schema.interface';
import { useAppDispatch } from '../../redux';
import { setTypeDisplayed } from '../../redux/features/documentationSlice';
import { Link } from 'react-router-dom';

interface IFieldsList {
  fieldsData: SchemaType[];
}

function FieldsList({ fieldsData }: IFieldsList) {
  const dispatch = useAppDispatch();

  const handleTypeClick = (name: string) => {
    dispatch(setTypeDisplayed(name))
  }

  return (
    <div>
      {fieldsData &&
        fieldsData.map((f, i) => (
          <Link
            to="#"
            data-testid="field-type"
            onClick={handleTypeClick.bind(null, f.name)}
            key={i}
            className={`${TYPE_CLASSES} block`}
          >
            {f.name}
          </Link>
        ))}
    </div>
  );
}

export default FieldsList;
