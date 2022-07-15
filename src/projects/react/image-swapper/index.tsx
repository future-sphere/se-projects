import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';

type Props = {};

const data = [
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_1.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_2.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_3.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_4.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_5.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_6.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_7.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_8.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_17.jpg',
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_27.jpg',
];

const ImageSwapper = (props: Props) => {
  const [index, setIndex] = React.useState(0);
  return (
    <div className='flex items-center justify-center h-screen p-10 bg-slate-100'>
      <div className='flex items-center justify-between space-x-20'>
        <ArrowLeftIcon
          onClick={() => setIndex(index === 0 ? data.length - 1 : index - 1)}
          className='w-20 h-20 p-2 duration-700 bg-white cursor-pointer rounded-xl hover:shadow-2xl'
        />
        <div className='relative w-full min-w-[400px] h-72 select-none'>
          <img
            className='absolute top-0 left-0 object-cover shadow-xl rounded-xl'
            src={data[index]}
            alt='Anivia Champion Skin'
          />
          <img
            className='absolute object-cover w-full h-full shadow-xl -left-2 top-2 rounded-xl'
            src={index === data.length - 1 ? data[0] : data[index + 1]}
            alt='Anivia Champion Skin'
          />
          <img
            className='absolute object-cover w-full h-full shadow-xl -left-4 top-4 rounded-xl'
            src={
              index === data.length - 1
                ? index === data.length - 2
                  ? data[0]
                  : data[1]
                : data[index + 2]
            }
            alt='Anivia Champion Skin'
          />
        </div>
        <ArrowRightIcon
          className='w-20 h-20 p-2 duration-700 bg-white cursor-pointer rounded-xl hover:shadow-2xl'
          onClick={() => setIndex(index === data.length - 1 ? 0 : index + 1)}
        />
      </div>
    </div>
  );
};

export default ImageSwapper;
