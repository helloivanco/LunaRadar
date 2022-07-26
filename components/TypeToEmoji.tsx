import { types } from 'utils/types';
export default function TypeToEmoji({ type }) {
  const obj = types.find((i) => type === i.type);

  return (
    <div className='text-sm font-semibold text-gray-700 truncate'>
      {obj ? obj.emoji : type}
    </div>
  );
}
