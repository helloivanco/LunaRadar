export const types = [
  {
    type: '/cosmos.bank.v1beta1.MsgSend',
    emoji: '📤 Send',
    details:
      'MsgSend represents a message to send coins from one account to another.',
  },
  {
    type: '/cosmwasm.wasm.v1.MsgExecuteContract',
    emoji: '💼 Execute Cosmwasm Contract',
    details:
      'Invokes a function defined within the smart contract. Function and parameters are encoded in ExecuteMsg, which is a JSON message encoded in Base64.',
  },
  {
    type: '/terra.wasm.v1beta1.MsgExecuteContract',
    emoji: '💼 Execute Contract',
    details:
      'Invokes a function defined within the smart contract. Function and parameters are encoded in ExecuteMsg, which is a JSON message encoded in Base64.',
  },
  {
    type: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
    emoji: '💎 Withdraw Reward',
    details:
      'A delegator can withdraw currently outstanding rewards accrued from their delegation toward a validator by submitting the following message. The rewards will be deposited to their Withdraw Address.',
  },
  {
    type: '/cosmos.staking.v1beta1.MsgDelegate',
    emoji: '🤝 Delegate',
    details:
      'MsgDelegate defines a message for performing a delegation of coins from a delegator to a validator.',
  },
  {
    type: '/cosmos.staking.v1beta1.MsgBeginRedelegate',
    emoji: '🤝 Re-Delegate',
    details:
      'The redelegation command allows delegators to instantly switch validators.',
  },
  {
    type: '/ibc.core.client.v1.MsgUpdateClient',
    emoji: '🔄 Update Client',
    details:
      'MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header.',
  },
  {
    type: '/cosmos.gov.v1beta1.MsgVote',
    emoji: '🗳️ Vote',
    details: 'Vote for an active voting-stage proposal.',
  },
  {
    type: '/cosmos.staking.v1beta1.MsgUndelegate',
    emoji: '👋 Un-Delegate',
    details: 'Undelegate Luna from staking position from validator.',
  },
  {
    type: '/cosmos.authz.v1beta1.MsgExec',
    emoji: '📟 Msg Exec',
    details:
      'Execute a set of messages, exercising an existing authorization. When a grantee wants to execute a transaction on behalf of a granter, they must send MsgExec.',
  },
  {
    type: '/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission',
    emoji: '🤖 Withdraw Validator Commissions',
    details:
      'A validator can withdraw their outstanding commission rewards accrued from all delegations (not including its self-delegation) into their associated accounts withdraw address.',
  },
  {
    type: '/cosmos.authz.v1beta1.MsgGrant',
    emoji: '👐 Msg Grant',
    details: 'An authorization grant is created using the MsgGrant message.',
  },
  {
    type: '/ibc.applications.transfer.v1.MsgTransfer',
    emoji: '🌐 IBC Transfer',
    details:
      'MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between ICS20 enabled chains.',
  },

  {
    type: '/terra.wasm.v1beta1.MsgUpdateContractAdmin',
    emoji: '👓 Update Contract',
    details: `Update a smart contract's admin.`,
  },
  {
    type: '/cosmos.gov.v1beta1.MsgSubmitProposal',
    emoji: '📝 Submit Proposal',
    details:
      'A Proposal is a data structure representing a petition for a change that is submitted to the blockchain alongside a deposit.',
  },
  {
    type: '/terra.wasm.v1beta1.MsgStoreCode',
    emoji: '🔢 Store New Code',
    details:
      'Uploads new code to the blockchain and results in a new code ID, if successful. WASMByteCode is accepted as either uncompressed or gzipped binary data encoded as Base64.',
  },
  {
    type: '/terra.wasm.v1beta1.MsgMigrateContract',
    emoji: '🏗️ Migrate Contract',
    details: `If a user is the contract's owner, and a contract is instantiated as migratable, they can issue a MsgMigrateContract to reset its code ID to a new one.`,
  },
  {
    type: '/terra.wasm.v1beta1.MsgInstantiateContract',
    emoji: '🌄 New Contract Instance',
    details:
      'The InstantiateMsg is provided when a user creates a contract on the blockchain through a MsgInstantiateContract. This provides the contract with its configuration as well as its initial state.',
  },
  {
    type: '/cosmos.staking.v1beta1.MsgEditValidator',
    emoji: '🔄 Edit Validator',
    details:
      'A validator can edit its delegate information, such as moniker, website, commission rate, etc.',
  },
  {
    type: '/ibc.core.connection.v1.MsgConnectionOpenConfirm',
    emoji: '🌐 Confirm IBC Connection',
    details:
      'MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of connection state to OPEN on Chain A.',
  },
  {
    type: '/ibc.core.client.v1.MsgCreateClient',
    emoji: '🌐 Create IBC Client',
    details: 'MsgCreateClient defines a message to create an IBC client',
  },
  {
    type: '/ibc.core.connection.v1.MsgConnectionOpenTry',
    emoji: '🌐 Open IBC Connection',
    details:
      'MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a connection on Chain B.',
  },
];
