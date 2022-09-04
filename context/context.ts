import { createContext } from 'react';

export const networkChoices = [
  {
    URL: 'https://pisco-lcd.terra.dev',
    chainID: 'pisco-1',
    title: 'pisco-1 testnet',
    chain: 'Testnet',
  },
  {
    URL: 'https://phoenix-lcd.terra.dev',
    chainID: 'phoenix-1',
    title: 'phoenix-1 mainnet',
    chain: 'Mainnet',
  },
];

export const DataContext = createContext({
  data: [],
  setData: true,
  start: true,
  setStart: 1,
  crawl: true,
  setCrawl: 1,
  network: networkChoices[1],
  toggleNetwork: true,
  stateFilter: null,
  dispatchFilter: null,
});
