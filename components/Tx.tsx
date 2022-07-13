import { networkChoices, NetworkContext } from 'context/context';
import moment from 'moment';
import { useContext } from 'react';
let block_address = [];
let block_type = [];

export default function Tx({ data }) {
  const { network } = useContext(NetworkContext);

  let url =
    network === networkChoices[1]
      ? 'https://finder.terra.money/mainnet/tx'
      : 'https://finder.terra.money/testnet/tx';
  return (
    <>
      {data.map((i, idx) => {
        if (
          block_address.includes(i.tx.body.messages[0].toData()['sender']) ||
          block_type.includes(i.tx.body.messages[0].toData()['@type'])
        )
          return <></>;
        return (
          <div key={idx} className='mt-2 rounded-lg shadow-md p-2'>
            <div className='font-bold text-gray-600'>
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

            <span className='text-xs break-words'>
              <Type type={i.tx.body.messages[0].toData()['@type']} />

              <div className='mt-3'>
                {JSON.stringify(i.tx.body.messages[0].toData()).slice(0, 500)}
              </div>
            </span>
          </div>
        );
      })}
    </>
  );
}

function Type({ type }) {
  let emoji = type;

  if (type == '/cosmos.bank.v1beta1.MsgSend') {
    emoji = '📤 Send';
  } else if (type == '/cosmwasm.wasm.v1.MsgExecuteContract') {
    emoji = '💼 Execute Contract';
  } else if (
    type == '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'
  ) {
    emoji = '💎 Withdraw Reward';
  } else if (type == '/cosmos.staking.v1beta1.MsgDelegate') {
    emoji = '🤝 Delegate';
  } else if (type == '/cosmos.staking.v1beta1.MsgBeginRedelegate') {
    emoji = '🤝 Re-delegate';
  } else if (type == '/ibc.core.client.v1.MsgUpdateClient') {
    emoji = '🔄 Update Client';
  } else if (type == '/cosmos.gov.v1beta1.MsgVote') {
    emoji = '🤝 Re-delegate';
  } else if (type == '/cosmos.staking.v1beta1.MsgUndelegate') {
    emoji = '👋 Un-delegate';
  } else if (type == '/cosmos.authz.v1beta1.MsgExec') {
    emoji = '📟 Msg Exec';
  } else if (
    type == '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission'
  ) {
    emoji = '🤖 Withdraw Validator Commissions';
  } else if (type == '/cosmos.authz.v1beta1.MsgGrant') {
    emoji = '👐 Msg Grant';
  } else if (type == '/ibc.applications.transfer.v1.MsgTransfer') {
    emoji = '🌐 IBC Msg Transfer';
  }

  return (
    <div className='text-sm font-semibold text-gray-700 break-words'>
      <div>{emoji}</div>
    </div>
  );
}
