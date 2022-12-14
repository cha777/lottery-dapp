import Image from 'next/image';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='bg-[#091818] h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-2 mb-10'>
        <Image
          className='rounded-full'
          src='https://i.imgur.com/4h7mAu7.png'
          alt='logo'
          width={80}
          height={80}
        />
        <h1 className='text-lg text-white font-bold'>
          Loading the CSQUARED2 DRAW
        </h1>
      </div>
      <PropagateLoader color='white' size={30} />
    </div>
  );
};

export default Loading;
