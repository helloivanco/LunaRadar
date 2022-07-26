import TypeToEmoji from './TypeToEmoji';
export default function DisplayTypes({ data }) {
  let array = [];

  data.forEach((item) => {
    item.forEach((item) => {
      const type = JSON.stringify(JSON.parse(item.tx.body.messages[0])['@type'])
        .replace('"', '')
        .replace('"', '');
      const found = array.find((i) => i.type === type);

      if (found) {
        found.count++;
      } else {
        array.push({ type, count: 1 });
      }
    });
  });

  array.sort((a, b) => b.count - a.count);

  if (array.length == 0) {
    return <></>;
  }

  return (
    <div className='p-4'>
      <dl className='grid grid-cols-3 gap-3 sm:grid-cols-4'>
        {array.map((item) => (
          <div
            key={item.type}
            className='px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6'>
            <dt className='text-sm font-medium text-gray-900 truncate'>
              <TypeToEmoji type={item.type} />
            </dt>
            <dd className='mt-1 text-3xl font-semibold text-blue-500'>
              {item.count}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
