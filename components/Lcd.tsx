import {
  CrawlContext,
  DataContext,
  NetworkContext,
  StartContext,
} from 'context/context';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { RiRadarFill, RiRefreshLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Tx from './Tx';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 2500,
  showSpinner: false,
});

const { LCDClient } = require('@terra-money/terra.js');

export default function Lcd() {
  const { start, setStart } = useContext(StartContext);
  const { data, setData } = useContext(DataContext);
  const { network } = useContext(NetworkContext);
  const { crawl, setCrawl } = useContext(CrawlContext);
  const terra = new LCDClient(network);

  const [loading, setLoading] = useState(false);

  const getHeight = async () => {
    const bi = await terra.tendermint.blockInfo();
    setStart(parseInt(bi.block.header.height));
  };

  const ref = useRef(0);

  useEffect(() => {
    getHeight();
  }, [network]);

  useEffect(() => {
    const run = async () => {
      for (let i = start; i > start - 200; i--) {
        try {
          console.log('block: ' + i);
          const tx = await terra.tx.txInfosByHeight(i);
          setData((arr) => [...arr, tx]);
        } catch (e) {
          toast.info('Invalid Block Height', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
      }
      setStart(start - 200);
      NProgress.done();
      setLoading(false);
      setCrawl(false);
    };

    if (crawl == true) {
      NProgress.start();
      setLoading(true);
      if (start !== 0) {
        run();
      }
    }
  }, [crawl]);

  return (
    <div className='max-w-5xl w-full mx-auto'>
      {data.map((item, idx) => {
        if (item.length !== 0)
          return (
            <div key={idx}>
              <Tx data={item} />
            </div>
          );
      })}

      {!loading && (
        <div
          onClick={() => {
            setStart(start);
            setCrawl(true);
          }}
          className='mt-4 hover:bg-blue-400 cursor-pointer w-full text-center bg-blue-600 p-2 text-white font-bold rounded-full'>
          <div className='flex items-center justify-center'>
            <RiRadarFill className='mr-2' /> Scan from Block {start}
          </div>
        </div>
      )}

      {data.length == 0 && (
        <div
          onClick={() => {
            window.location.reload();
          }}
          className='mt-3 cursor-pointer flex items-center justify-center w-full text-sm text-center text-gray-400'>
          <RiRefreshLine className='mr-1' />
          Refresh the page before switching networks or starting from a block
          height
        </div>
      )}
    </div>
  );
}
