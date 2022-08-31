import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className='bg-[#091818] min-h-screen flex flex-col'>
      <Head>
        <title>Lottery Dapp</title>
      </Head>

      <Header />
    </div>
  );
};

export default Home;
