import { createContext } from 'react';

export const networkChoices = [
  {
    URL: 'https://pisco-lcd.terra.dev',
    chainID: 'pisco-1',
    title: 'pisco-1 testnet',
  },
  {
    URL: 'https://phoenix-lcd.terra.dev',
    chainID: 'phoenix-1',
    title: 'phoenix-1 mainnet',
  },
];

export const DataContext = createContext({
  data: [],
  setData: null,
  start: 0,
  setStart: null,
  crawl: false,
  setCrawl: null,
  network: networkChoices[1],
  toggleNetwork: null,
});
