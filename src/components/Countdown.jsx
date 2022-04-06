import { useCountdown } from '../hooks/useCountdown';

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <div className='ml-6 mr-6'>
      <div className='text-white text-xl py-2 px-3 bg-gray-500 flex max-w-2xl text-center mt-5 rounded justify-center mx-auto font-semibold'>{`Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para la Semana Santa del próximo año, que es cuando me despachas 😥`}</div>
    </div>
  );
};

export default Countdown;
