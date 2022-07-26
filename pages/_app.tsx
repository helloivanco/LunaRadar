import { DataContext, networkChoices } from 'context/context';
import Head from 'next/head';
import { useState } from 'react';

import 'tailwindcss/tailwind.css';
function MyApp({ Component, pageProps }) {
  const [start, setStart] = useState(0);
  const [data, setData] = useState([]);
  const [crawl, setCrawl] = useState(false);
  const [network, setNetwork] = useState(networkChoices[1]);

  const toggleNetwork = () => {
    setNetwork(
      network === networkChoices[1] ? networkChoices[0] : networkChoices[1]
    );
  };

  return (
    <div>
      <Head>
        <title>Luna Radar - Terra Scanner Tool</title>
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
        }}>
        <Component {...pageProps} />
      </DataContext.Provider>
    </div>
  );
}

export default MyApp;
