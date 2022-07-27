import { InformationCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { types } from 'utils/types';
import Details from './Details';

export default function TypeToEmoji({ type }) {
  const obj = types.find((i) => type === i.type);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='flex items-center'>
        <div className='text-sm font-semibold text-gray-700 truncate'>
          {obj ? obj.emoji : type}
        </div>
        {obj && (
          <div onClick={() => setOpen(true)}>
            <InformationCircleIcon className='cursor-pointer ml-1 w-4 text-gray-400' />
          </div>
        )}
      </div>
      {obj && <Details open={open} setOpen={setOpen} data={obj} />}
    </>
  );
}
