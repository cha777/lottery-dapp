import { useContract, useContractData } from '@thirdweb-dev/react';
import Countdown from 'react-countdown';

interface CountdownRenderProps {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}
const CountdownTimer = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: expiration, isLoading: isLoadingExpiration } = useContractData(
    contract,
    'expiration'
  );

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    return (
      <div>
        {completed ? (
          <h2 className='text-white text-xl mb-2 text-center animate-bounce'>
            Ticket Sales have now CLOSED for this draw
          </h2>
        ) : (
          <h3 className='text-white text-sm mb-2 italic'>Time Remaining</h3>
        )}

        <div className='flex space-x-6'>
          <div className='flex-1'>
            <div className={`countdown ${completed && 'animate-pulse'}`}>
              {hours}
            </div>
            <div className='countdown-label'>hours</div>
          </div>

          <div className='flex-1'>
            <div className={`countdown ${completed && 'animate-pulse'}`}>
              {minutes}
            </div>
            <div className='countdown-label'>minutes</div>
          </div>

          <div className='flex-1'>
            <div className={`countdown ${completed && 'animate-pulse'}`}>
              {seconds}
            </div>
            <div className='countdown-label'>seconds</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Countdown
        date={expiration ? new Date(expiration * 1000) : new Date()}
        renderer={renderer}
      />
    </div>
  );
};

export default CountdownTimer;
