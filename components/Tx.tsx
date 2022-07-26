import { DataContext, networkChoices } from 'context/context';
import moment from 'moment';
import { useContext } from 'react';
import TypeToEmoji from './TypeToEmoji';
export default function Tx({ data }) {
  const { network } = useContext(DataContext);

  let url =
    network === networkChoices[1]
      ? 'https://finder.terra.money/mainnet/tx'
      : 'https://finder.terra.money/testnet/tx';

  return (
    <>
      {data.map((i) => {
        return (
          <div
            key={i.txhash}
            className='mt-2 rounded-lg shadow-md p-2 m-4 bg-white'>
            <span className='text-xs break-words'>
              <TypeToEmoji
                type={JSON.stringify(JSON.parse(i.tx.body.messages[0])['@type'])
                  .replace('"', '')
                  .replace('"', '')}
              />

              <div className='mt-3 text-gray-600'>
                {JSON.stringify(JSON.parse(i.tx.body.messages[0])).slice(
                  0,
                  500
                )}
              </div>
            </span>
            <div className='mt-2 font-bold text-gray-600'>
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
                {moment(i.timestamp).fromNow()}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
