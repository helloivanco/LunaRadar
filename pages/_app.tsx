import {
  CrawlContext,
  DataContext,
  networkChoices,
  NetworkContext,
  StartContext,
} from 'context/context';
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
        <title>Terra Scanner</title>
      </Head>
      <NetworkContext.Provider value={{ network, toggleNetwork }}>
        <StartContext.Provider value={{ start, setStart }}>
          <DataContext.Provider value={{ data, setData }}>
            <CrawlContext.Provider value={{ crawl, setCrawl }}>
              <Component {...pageProps} />
              <ToastContainer />
            </CrawlContext.Provider>
          </DataContext.Provider>
        </StartContext.Provider>
      </NetworkContext.Provider>
    </div>
  );
}

export default MyApp;
