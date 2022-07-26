import { RiRadarFill } from 'react-icons/ri';

export default function Example() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl pt-6 mx-auto px-4 '>
        <div className='bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='pt-10 pb-10 px-6 sm:pt-16 sm:px-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h2 className='text-3xl font-bold text-white sm:text-4xl'>
                <span className='block'>Luna Radar</span>
              </h2>
              <h3 className='text-1xl text-white sm:text-2xl mt-2'>
                <span className='block'>
                  <RiRadarFill className='inline' />
                  Terra Scanning Tool
                </span>
              </h3>
              <p className='mt-4 text-lg leading-6 text-indigo-200'>
                See real-time what's happening on Terra to discover new
                opportunities and on-chain events.
              </p>
              <p className='mt-4 text-sm leading-6 text-indigo-300'>
                Works best on desktop browsers.
              </p>
            </div>
          </div>
          <div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
            <img
              className='transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
              src='/screen.png'
              alt='App screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
