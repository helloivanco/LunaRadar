import Navbar from 'components/Navbar';
import dynamic from 'next/dynamic';

const Lcd = dynamic(() => import('components/Lcd'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='py-6 bg-gray-50 flex flex-col items-center justify-start min-h-screen'>
        <Lcd />
      </div>
    </>
  );
}
