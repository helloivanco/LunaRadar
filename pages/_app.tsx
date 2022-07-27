import { DataContext, networkChoices } from 'context/context';
import Head from 'next/head';
import { useReducer, useState } from 'react';
import 'styles/styles.css';

type InitialState = {
  filter: string[] | null;
};

type Action = {
  type: 'update';
  payload: string;
};

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'update':
      if (state.filter.includes(action.payload)) {
        return {
          filter: [...state.filter.filter((i) => i !== action.payload)],
        };
      } else {
        return { filter: [...state.filter, action.payload] };
      }
    default:
      throw new Error();
  }
};

function MyApp({ Component, pageProps }) {
  const [start, setStart] = useState(0);
  const [data, setData] = useState([]);
  const [crawl, setCrawl] = useState(false);
  const [network, setNetwork] = useState(networkChoices[1]);

  const initialState: InitialState = { filter: [] };
  const [stateFilter, dispatchFilter] = useReducer(reducer, initialState);

  const toggleNetwork = () => {
    setNetwork(
      network === networkChoices[1] ? networkChoices[0] : networkChoices[1]
    );
  };

  return (
    <div>
      <Head>
        <title>Luna Radar - Terra Scan Tool</title>
        <meta
          name='description'
          content="See what's happening on Terra to discover new opportunities
                and on-chain events. Start scanning!"
        />
        <meta property='og:title' content='Luna Radar - Terra Scanner' />
        <meta property='og:image' content='/cover.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content='/cover.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='2144' />
        <meta property='og:image:height' content='1050' />
      </Head>

      <DataContext.Provider
        value={{
          network,
          toggleNetwork,
          data,
          setData,
          start,
          setStart,
          crawl,
          setCrawl,
          stateFilter,
          dispatchFilter,
        }}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </div>
  );
}

export default MyApp;
