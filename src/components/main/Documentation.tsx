import { useRef } from 'react';
import { useLazyGetItemsListQuery } from '../../redux/api/schemaApi';
import Queries from './Queries';

function Documentation() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [trigger, { isLoading, isError, data } ] = useLazyGetItemsListQuery();
  let queries = null;
  if (!isLoading && !isError) {
    console.log(data?.data.__schema.types);
    queries = data?.data.__schema.types.find(q => q.name === 'Query');
    console.log(queries)
  }
  const handleClick = () => {
    const value = inputRef.current?.value ?? '';
    trigger(value);
  }

  return (
    <div className='col'>
      <div className='mx-auto w-96'>
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
          <button onClick={handleClick} className="rounded-md bg-buttonBg-600 px-3 py-2 text-sm font-semibold 
              text-white shadow-sm hover:bg-buttonBg-400 focus-visible:outline 
              focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-buttonBg-400 disabled:bg-disabledButton hover:bg-buttonBg-400">Get Documentation</button>
          {queries && <Queries queriesData={queries} />}
        </div>
      </div>
    </div>
  );

}

export default Documentation;
