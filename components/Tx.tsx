import { DataContext, networkChoices } from 'context/context';
import { useContext } from 'react';
import TimeAgo from 'timeago-react';
import TypeToEmoji from './TypeToEmoji';
export default function Tx({ data }) {
  const { network, stateFilter } = useContext(DataContext);

  let url =
    network === networkChoices[1]
      ? 'https://finder.terra.money/mainnet/tx'
      : 'https://finder.terra.money/testnet/tx';

  return (
    <>
      {data.map((i) => {
        const type = JSON.stringify(JSON.parse(i.tx.body.messages[0])['@type'])
          .replace('"', '')
          .replace('"', '');

        if (
          stateFilter.filter.length !== 0 &&
          !stateFilter.filter.includes(type)
        ) {
          return null;
        }

        return (
          <div
            key={i.txhash}
            className='mt-2 rounded-lg shadow-md p-2 m-4 bg-white'>
            <span className='text-xs break-words'>
              <TypeToEmoji type={type} />

              <div className='mt-3 text-gray-600'>
                {JSON.stringify(JSON.parse(i.tx.body.messages[0])).slice(
                  0,
                  500
                )}
              </div>
            </span>
            <div className='mt-2 font-bold text-gray-600 text-sm'>
              <a
                className='text-blue-600 mr-2 underline hover:no-underline'
                href={`${url}/${i.txhash}`}
                target='_blank'
                rel='no-referrer'>
                {i.txhash.slice(0, 5) +
                  '...' +
                  i.txhash.slice(i.txhash.length - 5, i.txhash.length)}
              </a>
              Block {i.height}
              <span className='ml-1 text-gray-400 font-light text-xs'>
                <TimeAgo datetime={i.timestamp} />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
