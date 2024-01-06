import { SchemaType } from '../../model/schema.interface';
import Query from './Query';

interface IQueriesProps {
  queriesData: SchemaType;
}

function Queries({ queriesData }: IQueriesProps) {
  return (
    <div data-testid="queries-list">
      {queriesData.fields &&
        queriesData.fields.map((query, i) => <Query query={query} key={i} />)}
    </div>
  );
}

export default Queries;
