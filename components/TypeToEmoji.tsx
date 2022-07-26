import { types } from 'utils/types';
export default function TypeToEmoji({ type }) {
  const obj = types.find((i) => type === i.type);

  return (
    <div className='text-base font-semibold text-gray-700 break-words'>
      <div>{obj ? obj.emoji : type}</div>
    </div>
  );
}
