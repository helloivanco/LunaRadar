import clsx from 'clsx';
import { DataContext } from 'context/context';
import { useContext } from 'react';
import TypeToEmoji from './TypeToEmoji';

export default function DisplayType({ item }) {
  const { stateFilter, dispatchFilter } = useContext(DataContext);

  return (
    <div
      onClick={() => dispatchFilter({ type: 'update', payload: item.type })}
      className={clsx(
        stateFilter.filter.includes(item.type) && 'border-blue-500',
        'px-4 py-5 transition duration-500 bg-white border hover:border-blue-500 cursor-pointer shadow rounded-lg overflow-hidden sm:p-6'
      )}>
      <dt className='text-xs font-medium text-gray-900'>
        <TypeToEmoji type={item.type} />
      </dt>
      <dd className='mt-1 text-3xl font-semibold text-blue-500'>
        {item.count}
      </dd>
    </div>
  );
}
