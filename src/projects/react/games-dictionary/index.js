import React, { useEffect, useMemo } from 'react';
import { RefreshIcon, SearchIcon } from '@heroicons/react/outline';

import games from './data.json';

const ITEMS_PER_PAGE = 20;

const GamesDictionary = () => {
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [activeCategory, setActiveCategory] = React.useState('all');

  const listRef = React.useRef(null);

  const categories = useMemo(() => {
    setIsLoading(true);
    return games.reduce((acc, game) => {
      game.genres.forEach((genre) => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []);
  }, []);

  const gamesInCategory = useMemo(() => {
    setIsLoading(true);
    return games
      .filter((game) => {
        if (activeCategory === 'all') {
          return true;
        }
        return game.genres.includes(activeCategory);
      })
      .filter((game) => {
        if (search === '') {
          return true;
        }
        return game.title.toLowerCase().includes(search.toLowerCase());
      });
  }, [activeCategory, search]);

  const gamesToDisplay = useMemo(() => {
    setIsLoading(true);
    return gamesInCategory.slice(
      ITEMS_PER_PAGE * (page - 1),
      ITEMS_PER_PAGE * page,
    );
  }, [gamesInCategory, page]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const isAllCategory = activeCategory === 'all';

  useEffect(() => {
    setIsLoading(false);
  }, [gamesToDisplay, categories, gamesInCategory]);

  useEffect(() => {
    setSearch('');
    setPage(1);
  }, [activeCategory]);

  useEffect(() => {
    listRef.current.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }, [page]);

  const isLastPage = page >= Math.ceil(gamesInCategory.length / ITEMS_PER_PAGE);
  const isFirstPage = page === 1;

  return (
    <div className='h-screen py-40 bg-orange-50'>
      <div
        className='grid max-w-6xl grid-cols-6 mx-auto shadow-xl'
        style={{ height: 768 }}
      >
        <div className='flex flex-col col-span-2 space-y-4 overflow-y-scroll bg-white'>
          <nav className='space-y-1' aria-label='Sidebar'>
            <a
              onClick={() => setActiveCategory('all')}
              className={classNames(
                isAllCategory
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer',
              )}
              aria-current={isAllCategory ? 'page' : undefined}
            >
              <span className='truncate'>All</span>

              <span
                className={classNames(
                  isAllCategory
                    ? 'bg-white'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200',
                  'ml-auto inline-block py-0.5 px-3 text-xs rounded-full',
                )}
              >
                {games.length}
              </span>
            </a>
            {categories.map((item, index) => {
              const isActive = activeCategory === item;
              const count = games.filter((game) =>
                game.genres.includes(item),
              ).length;
              return (
                <a
                  key={index}
                  onClick={() => setActiveCategory(item)}
                  className={classNames(
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className='truncate'>{item}</span>

                  <span
                    className={classNames(
                      item.current
                        ? 'bg-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200',
                      'ml-auto inline-block py-0.5 px-3 text-xs rounded-full',
                    )}
                  >
                    {count}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
        <div
          className={`col-span-4 overflow-x-hidden bg-white relative ${
            gamesToDisplay.length ? 'overflow-y-scroll' : 'overflow-y-clip'
          }`}
          ref={listRef}
        >
          <div className='sticky top-0 z-10 flex flex-shrink-0 h-16 shadow'>
            <div className='flex justify-between flex-1 px-4'>
              <div className='flex flex-1'>
                <form className='flex w-full md:ml-0' action='#' method='GET'>
                  <label htmlFor='search-field' className='sr-only'>
                    Search
                  </label>
                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none'>
                      <SearchIcon className='w-5 h-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search-field'
                      className='block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                      placeholder='Search'
                      type='search'
                      name='search'
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ul role='list' className='min-h-full p-2 divide-y divide-gray-200'>
            {isLoading ? (
              <div className='flex items-center justify-center py-10'>
                <svg
                  className='w-5 h-5 mr-3 -ml-1 text-blue-500 animate-spin'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    stroke-width='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                <span className='text-sm'>Loading...</span>
              </div>
            ) : gamesToDisplay.length ? (
              gamesToDisplay.map((game) => (
                <li
                  key={game.id}
                  className='relative px-4 py-5 bg-white hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600'
                >
                  <div className='flex justify-between space-x-3'>
                    <div className='flex-1 min-w-0'>
                      <a href='#' className='block focus:outline-none'>
                        <span className='absolute inset-0' aria-hidden='true' />
                        <div className='inline-flex items-center space-x-2'>
                          {game.status === 'AVAILABLE' ? (
                            <span className='inline-flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse' />
                          ) : (
                            <span className='inline-flex h-1.5 w-1.5 rounded-full bg-gray-500 opacity-75' />
                          )}
                          <p className='text-sm font-medium text-gray-900 truncate'>
                            {game.title}
                          </p>
                        </div>
                        <p className='text-sm text-gray-500 truncate'>
                          {game.publisher}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className='mt-1'>
                    <p className='text-sm text-gray-600 line-clamp-2'>
                      {game.genres.map((genre) => genre).join(', ')}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <div className='py-10 text-center'>
                <h3 className='mt-2 text-sm font-medium text-gray-900'>
                  No games found
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  Try to search to something else!
                </p>
                <div className='mt-6'>
                  <button
                    type='button'
                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                    onClick={() => {
                      setSearch('');
                    }}
                  >
                    <RefreshIcon
                      className='w-5 h-5 mr-2 -ml-1'
                      aria-hidden='true'
                    />
                    Reset Search
                  </button>
                </div>
              </div>
            )}
          </ul>
          <nav
            className='sticky bottom-0 z-10 flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6'
            aria-label='Pagination'
          >
            <div className='hidden sm:block'>
              <p className='text-sm text-gray-700'>
                Showing{' '}
                <span className='font-medium'>
                  {(page - 1) * ITEMS_PER_PAGE + 1}
                </span>{' '}
                to{' '}
                <span className='font-medium'>
                  {page * ITEMS_PER_PAGE > gamesToDisplay.length
                    ? gamesInCategory.length
                    : page * ITEMS_PER_PAGE}
                </span>{' '}
                of <span className='font-medium'>{gamesInCategory.length}</span>{' '}
                results
              </p>
            </div>
            <div className='flex justify-between flex-1 sm:justify-end'>
              <a
                onClick={() => {
                  if (page > 1) {
                    setPage(page - 1);
                    window.scrollTo(0, 0);
                  }
                }}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white ${
                  isFirstPage
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-50 cursor-pointer'
                }`}
              >
                Previous
              </a>
              <a
                onClick={() => {
                  if (!isLastPage) {
                    setPage(page + 1);
                    window.scrollTo(0, 0);
                  }
                }}
                className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white ${
                  isLastPage
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer hover:bg-gray-50'
                }`}
              >
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default GamesDictionary;
