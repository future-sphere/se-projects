import { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Modal from 'react-modal';
import { DetailsPage } from './Details';

const spritePrefix = 'https://img.pokemondb.net/sprites/home/normal/';
const POKEMONS_PER_PAGE = 10;

Modal.setAppElement('#root');

function LandingPage() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [err, setErr] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setErr(null);
    const offset = (page - 1) * POKEMONS_PER_PAGE;
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`,
    )
      .then((resp) => resp.json())
      .then((result) => {
        setData(result.results);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData, page]);

  const handleSearch = () => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((resp) => resp.json())
      .then((json) => {
        setData([json]);
        setLoading(false);
        setErr(null);
      })
      .catch(() => {
        setErr(`${input} is not a pokemon`);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!input) {
      fetchData();
    }
  }, [fetchData, input]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='h-screen py-40 bg-orange-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='form'>
          <input
            type='search'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <button disabled={loading} onClick={handleSearch}>
            {loading ? 'Loading' : 'Search'}
          </button>
        </div>
        <div className='container'>
          {data && !err && !loading
            ? data.map((v, i) => {
                return (
                  <div
                    onClick={() => {
                      setCurrentPokemon(v.name);
                      openModal();
                    }}
                    className='pokemon button'
                  >
                    <p>{v.name}</p>
                    <img src={`${spritePrefix}${v.name}.png`} alt='' />
                  </div>
                );
              })
            : null}
          {loading && (
            <>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
              <Skeleton height={150}></Skeleton>
            </>
          )}
        </div>
        {err && !loading && (
          <div className='error-container'>
            <p className='error-message'>{err}</p>
          </div>
        )}
        <div className='pagination'>
          <button
            disabled={page === 1 || loading}
            className='button'
            onClick={() => setPage(page === 1 ? 1 : page - 1)}
          >
            Prev
          </button>
          <button
            disabled={loading}
            className='button'
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
        <p className='page-number'>Page {page}</p>
      </div>
      <Modal
        style={{
          content: {
            height: '900px',
            width: '100%',
            maxWidth: '900px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            overflowY: 'hidden',
          },
        }}
        isOpen={showModal}
        onRequestClose={closeModal}
      >
        <DetailsPage name={currentPokemon} />
      </Modal>
    </div>
  );
}

export default LandingPage;
