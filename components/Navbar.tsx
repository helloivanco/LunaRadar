import clsx from 'clsx';
import { DataContext } from 'context/context';
import { useContext, useState } from 'react';
import { CgArrowsExchangeAlt } from 'react-icons/cg';

export default function Navbar() {
  const { setStart, network, toggleNetwork, setData, setCrawl, crawl } =
    useContext(DataContext);

  const [startquery, setStartQuery] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setData([]);
    setStart(startquery);
    setCrawl(true);
  };

  return (
    <>
      <nav className='sticky top-0 border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900 opacity-95'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <div className='flex items-center'>
            <a href='/' className='flex items-center'>
              <img
                src='/logo.png'
                className={clsx('mr-3 h-6 sm:h-9', crawl && 'animate-spin')}
                alt='Logo'
              />
              <span className='hidden sm:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Luna Radar
              </span>
              <span className='sm:hidden block self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                Luna Radar
              </span>
            </a>
          </div>

          <div className='md:order-2'>
            <div className='relative block'>
              <div
                onClick={() => {
                  setData([]);
                  toggleNetwork();
                }}
                className='border px-2 py-0.5 border-blue-500 rounded-full text-blue-500 text-sm font-semibold cursor-pointer hover:text-blue-600 flex items-center'>
                <CgArrowsExchangeAlt className='text-2xl mr-1' />{' '}
                {network.title}
              </div>
            </div>
          </div>

          {/* <div className='md:order-2'>
          <div className='relative block'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
              <svg
                className='w-5 h-5 text-gray-500'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'></path>
              </svg>
            </div>
            <form onSubmit={onFormSubmit}>
              <input
                type='text'
                id='search-navbar'
                className='block p-2 pl-10 w-48 text-gray-900 bg-gray-50 rounded-full border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='from block height'
                value={startquery}
                onChange={(e) => {
                  setStartQuery(e.target.value.replace(/\D/g, ''));
                }}
              />
            </form>
          </div>
        </div> */}
        </div>
      </nav>
      {crawl && (
        <div className='sticky top-12 sm:top-14 h-1 w-full bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse'></div>
      )}
    </>
  );
}
