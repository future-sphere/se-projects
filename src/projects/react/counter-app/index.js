import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(5);

  return (
    <div className='text-center p-24'>
      <div className='flex items-center'>
        <button
          className='flex items-center px-2.5 py-1.5 my-4 mx-auto text-lg font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 h-10 w-10 justify-center'
          onClick={() => setNumber(number - 1)}
        >
          -
        </button>
        <div className='h-20 w-20 flex items-center justify-center'>
          <h1 className='text-5xl font-extrabold'>{number}</h1>
        </div>
        <button
          className='flex items-center px-2.5 py-1.5 my-4 mx-auto text-lg font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-10 w-10 justify-center'
          onClick={() => setNumber(number + 1)}
        >
          +
        </button>
      </div>
      <button
        className='flex items-center px-2.5 py-1.5 my-4 mx-auto text-lg font-medium rounded shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 w-40 justify-center'
        onClick={() => setNumber(5)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
