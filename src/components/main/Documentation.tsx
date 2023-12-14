import { useRef, useState } from 'react';
import { useLazyGetItemsListQuery } from '../../redux/api/schemaApi';
import Queries from './Queries';
import FieldsList from './FieldsList';
import { SchemaType } from '../../model/schema.interface';
import SType from './SType';

function Documentation() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [trigger, { isLoading, isError, data } ] = useLazyGetItemsListQuery();
  const [schemaType, setSchemaType] = useState<SchemaType | null>(null);
  const [queries, setQueries] = useState<SchemaType | null>(null);
  let schemaQuery: null | SchemaType = null;
  let fields = null;
  if (!isLoading && !isError) {
    console.log(data?.data.__schema.types);
    schemaQuery = data?.data.__schema.types
      .find(s => s.name === 'Root' || s.name === 'Query') as SchemaType;
    fields = data?.data.__schema.types
      .filter(s => s.name !== 'Root' && s.name !== 'Query');
  }
  const handleGetDocsClick = () => {
    const value = inputRef.current?.value ?? '';
    trigger(value);
  }

  const toDefaultView = () => {
    setSchemaType(null);
    setQueries(null);
  }

  return (
    <div className='mx-auto w-3/6'>
      <div className='flex min-h-full flex-col justify-start text-left px-6 py-12 lg:px-8'>
        <h2>Documentation</h2>
        <label htmlFor='email' className='block h-24 text-left'>
          <span className='block text-sm font-medium text-gray-900'>Endpoint</span>
          <input type="text" ref={inputRef} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500'"/>
        </label>
        <div className="block text-xs font-medium text-red-600"></div>
        <button onClick={handleGetDocsClick} className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
            text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
            focus-visible:outline-2 focus-visible:outline-offset-2 
            focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400">Get Documentation</button>
        <div className="heading mt-4 mb-2">
          {schemaQuery && !schemaType && !queries && <span onClick={() => setQueries(schemaQuery)} className="cursor-pointer hover:underline">query: <span className="text-orange-600 ms-2">{schemaQuery.name}</span></span>}
          {(schemaType || queries) && <span className="text-blue-900 ms-2 cursor-pointer hover:underline" onClick={toDefaultView}>{'<< Back'}</span>}
        </div>
        
        {queries && <Queries queriesData={queries} />}
        {schemaType && <SType sType={schemaType} />}
        {fields && !schemaType && !queries && <FieldsList fieldsData={fields} clickHandler={setSchemaType}/>}
      </div>
    </div>
  );

}

export default Documentation;
