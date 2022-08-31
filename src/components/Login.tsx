import { useMetamask } from '@thirdweb-dev/react';
import Image from 'next/image';

const Login = () => {
  const connectWithMetaMask = useMetamask();
  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col items-center justify-center text-center'>
      <div className='flex flex-col items-center mb-10'>
        <Image
          src='https://i.imgur.com/4h7mAu7.png'
          className='rounded-full'
          alt='logo'
          width={224}
          height={224}
        />
        <h1 className='text-6xl text-white font-bold mt-10'>
          THE CSQUARED2 DRAW
        </h1>
        <h2 className='text-white'>
          Get started by logging in with your MetaMask
        </h2>
        <button
          onClick={connectWithMetaMask}
          className='bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold'
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
