import { DataContext } from 'context/context';
import { motion } from 'framer-motion';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { RiRadarFill, RiRefreshLine } from 'react-icons/ri';
import CTA from './CTA';
import DisplayTypes from './DisplayTypes';
import Stats from './Stats';
import Tx from './Tx';

const { LCDClient } = require('@terra-money/terra.js');

export default function Lcd() {
  const { data, setData, start, setStart, network, crawl, setCrawl } =
    useContext(DataContext);

  const terra = new LCDClient(network);

  const [loading, setLoading] = useState(false);
  const [currentBlock, setCurrentBlock] = useState(start);
  const workerRef = useRef(null);
  const startRef = useRef(start);
  const [resumeWork, setResumeWork] = useState(false);

  const getHeight = async () => {
    const bi = await terra.tendermint.blockInfo();
    setStart(parseInt(bi.block.header.height));
    startRef.current = parseInt(bi.block.header.height);
  };

  useEffect(() => {
    getHeight();
  }, [network]);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../utils/worker.js', import.meta.url)
    );

    workerRef.current.onmessage = (e) => {
      const tx = JSON.parse(e.data[0]);
      setCurrentBlock(e.data[1]);
      if (tx.length != 0) {
        setData((arr) => [tx, ...arr]);
      }
    };

    return () => {
      workerRef.current.terminate();
    };
  }, []);

  const handleWork = useCallback(async () => {
    workerRef.current.postMessage({
      start: startRef.current,
      network,
    });
  }, [network]);

  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (crawl) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [crawl]);

  const arrayLength = (data) => {
    let i = 0;

    data.forEach((e) => {
      if (e.length !== 0) {
        e.forEach((ee) => {
          i++;
        });
      }
    });
    return i;
  };

  return (
    <div className='max-w-5xl w-full mx-auto'>
      {!crawl && <CTA />}
      {crawl && (
        <>
          <Stats
            stats={[
              { name: 'Current Block', stat: currentBlock },
              { name: 'Seconds Elapsed', stat: time / 1000 },
              {
                name: 'Blocks Scanned',
                stat: currentBlock - startRef.current,
              },
              { name: 'Txs', stat: arrayLength(data) },
              {
                name: 'Tx / Block',
                stat: (
                  arrayLength(data) /
                  (currentBlock - startRef.current)
                ).toFixed(2),
              },
              {
                name: 'Seconds / Block',
                stat: (time / 1000 / (currentBlock - startRef.current)).toFixed(
                  2
                ),
              },
            ]}
          />

          <DisplayTypes data={data} />
        </>
      )}

      {data.map((item, idx) => {
        return (
          <motion.div layout key={idx}>
            <Tx data={item} />
          </motion.div>
        );
      })}

      {!crawl && (
        <div className='m-4'>
          <div
            onClick={() => {
              setStart(start);
              setCrawl(true);
              handleWork();
            }}
            className='mt-4 hover:bg-blue-400 cursor-pointer w-full text-center bg-blue-600 p-2 text-white font-bold rounded-full'>
            <div className='flex items-center justify-center'>
              <RiRadarFill className='mr-2' /> Scan from Block {start}
            </div>
          </div>{' '}
        </div>
      )}

      {data.length == 0 && (
        <div
          onClick={() => {
            window.location.reload();
          }}
          className='mt-3 cursor-pointer flex items-center justify-center w-full text-sm text-center text-gray-400'>
          <RiRefreshLine className='mr-1' />
          To switch networks, refresh page and select network.
        </div>
      )}
    </div>
  );
}
