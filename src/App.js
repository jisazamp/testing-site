import Navbar from './components/layout/Navbar';
import Countdown from './components/Countdown';
import ListComponent from './components/ListComponent';

const App = () => {
  // Set the date we're counting down to
  const countDownDate = new Date('Apr 1, 2023 23:59:59').getTime();
  const coffeDate = new Date('Apr 7, 2022 19:00:00').getTime();

  return (
    <main className='bg-gray-700 h-screen'>
      <Navbar />
      <Countdown
        targetDate={countDownDate}
        message=' para la Semana Santa del próximo año, que es cuando me despachas 😥'
      />
      <Countdown targetDate={coffeDate} message=' para el cafecito jeje ☕' />
      <div className='mr-2 ml-2'>
        <h1 className='text-gray-100 text-justify max-w-2xl mx-auto mt-6 font-bold text-xl'>
          Acá la lista de cosas que hay que hacer antes de eso:
        </h1>
      </div>
      <ListComponent />
    </main>
  );
};

export default App;
