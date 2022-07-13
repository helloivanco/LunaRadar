import { createContext } from 'react';
export const StartContext = createContext({ start: 0, setStart: null });
export const DataContext = createContext({ data: [], setData: null });
export const CrawlContext = createContext({ crawl: false, setCrawl: null });

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

export const NetworkContext = createContext({
  network: networkChoices[1],
  toggleNetwork: null,
});
