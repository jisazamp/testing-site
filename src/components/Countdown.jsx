import { useCountdown } from '../hooks/useCountdown';

const Countdown = ({ targetDate, message }) => {
  const [days, hours, minutes] = useCountdown(targetDate);
  return (
    <div className='ml-6 mr-6'>
      <div className='text-white text-xl py-2 px-3 bg-gray-500 flex max-w-2xl text-center mt-5 rounded justify-center mx-auto font-semibold'>{`Faltan ${days} días, ${hours} horas, y ${minutes} minutos ${message}`}</div>
    </div>
  );
};

export default Countdown;
