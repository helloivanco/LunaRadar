import DisplayType from './DisplayType';
export default function DisplayTypes({ data }) {
  let array = [];

  data.forEach((item) => {
    item.forEach((item) => {
      const type = JSON.stringify(
        JSON.parse(item.tx.body.messages[0])['@type']
      ).replace(/"/gi, '');

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
          <DisplayType item={item} key={item.type} />
        ))}
      </dl>
    </div>
  );
}
