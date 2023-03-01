import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { championProfilePicture } from '../constants';
import { Champion } from '../interface';

type Props = {};

const DetailPage = (props: Props) => {
  const { name } = useParams();
  const [champion, setChampion] = React.useState<Champion | null>(null);

  React.useEffect(() => {
    axios
      .get(
        `https://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion/${name}.json`
      )
      .then((res) => {
        setChampion(res.data.data[name as string]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='w-full max-w-5xl px-4'>
      <div className='flex items-center my-4 space-x-4'>
        <img
          src={championProfilePicture + champion?.image.full}
          alt={champion?.name}
          className='w-16 h-16 rounded-full'
        />
        <h1 className='my-4 text-3xl font-semibold'>
          {champion?.name} {champion?.title}
        </h1>
      </div>
      <p className='text-gray-600 text-md'>{champion?.blurb}</p>
      <div className='grid grid-cols-2 gap-4 my-4 md:grid-cols-3 lg:grid-cols-4'>
        {champion &&
          champion.skins.map((skin, index) => {
            return (
              <div
                key={index}
                className='flex items-center justify-center rounded-lg'
              >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`}
                  alt={skin.name}
                  className='rounded-lg'
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DetailPage;
