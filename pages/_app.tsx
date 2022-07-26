import { DataContext, networkChoices } from 'context/context';
import Head from 'next/head';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <title>Luna Radar - Terra Scanner</title>
        <meta
          name='description'
          content="     Monitor what's happening on Terra to discover new opportunities
                and on-chain events. Start scanning!"
        />
        <meta property='og:title' content='Luna Radar - Terra Scanner' />
        <meta property='og:image' content='/cover.png' />
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
        <ToastContainer />
      </DataContext.Provider>
    </div>
  );
}

export default MyApp;
