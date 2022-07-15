import Counter from './projects/react/counter-app';
import KanbanBoard from './projects/react/kanban-board';
import GamesDictionary from './projects/react/games-dictionary';
import Todolist from './projects/react/to-do-app';
import { ProjectTypeMap } from './types';
import Board from './projects/react/15-blocks-board';
import ImageSwapper from './projects/react/image-swapper';
import Pokedex from './projects/react/pokedex-app';
import LandKitComponentsOne from './projects/css/landkit-components-one';
import LandKitComponentsTwo from './projects/css/landkit-components-two';
import LandKitComponentsThree from './projects/css/landkit-components-three';
import LandKitComponentsFour from './projects/css/landkit-components-four';
import React from 'react';


export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const projects: ProjectTypeMap = {
  'html': [
    {
      title: 'Simple Personal Intro Web Page',
      slug: 'simple-personal-intro-web-page',
      description:
        'A simple personal web page that covers most of the basic tags in HTML.',
      estimated_hours: 3,
      subject: 'html',
    },
    {
      title: 'Simple Personal Portfolio Multi-page Website',
      slug: 'simple-personal-portfolio-multi-page-website',
      description: 'A simple personal portfolio website with multiple pages.',
      estimated_hours: 6,
      subject: 'html',
    },
  ],
  'css': [
    {
      title: 'Landkit components-one',
      slug: 'landkit-components-one',
      description:
        'Simple Landkit hero components that tests your knowledge of CSS property usages.',
      estimated_hours: 6,
      component: <LandKitComponentsOne />,
      subject: 'css',
    },
    {
      title: 'Landkit components-two',
      slug: 'landkit-components-two',
      description:
        'Simple Landkit hero components that tests your knowledge of CSS property usages.',
      estimated_hours: 6,
      component: <LandKitComponentsTwo />,
      subject: 'css',
    },
    {
      title: 'Landkit components-three',
      slug: 'landkit-components-three',
      description:
        'Simple Landkit hero components that tests your knowledge of CSS property usages.',
      estimated_hours: 6,
      component: <LandKitComponentsThree />,
      subject: 'css',
    },
    {
      title: 'Landkit components-four',
      slug: 'landkit-components-four',
      description:
        'Simple Landkit hero components that tests your knowledge of CSS property usages.',
      estimated_hours: 6,
      component: <LandKitComponentsFour />,
      subject: 'css',
    },
  ],
  'javascript': [
    {
      title: 'Array method exercises',
      slug: 'array-method-exercises',
      description:
        'A collection of exercises that test your knowledge of JavaScript array methods.',
      estimated_hours: 2,
      subject: 'javascript',
    },
    {
      title: 'Stock Exchange Account Class',
      slug: 'stock-exchange',
      description:
        'Designing a stock exchange account class that can buy and sell stocks, that tests your knowledge of JavaScript.',
      estimated_hours: 2,
      subject: 'javascript',
    },
    {
      title: 'Bank Account Class',
      slug: 'bank-account',
      description:
        'Designing a bank account class that can withdraw and deposit cash, that tests your knowledge of JavaScript.',
      estimated_hours: 2,
      subject: 'javascript',
    },
    {
      title: 'Shopping Cart Class',
      slug: 'shopping-cart',
      description:
        'Designing a shopping cart class that can add, remove and lookup items with quantity, that tests your knowledge of JavaScript.',
      estimated_hours: 3,
      subject: 'javascript',
    },
    {
      title: 'Library Class',
      slug: 'library',
      description:
        'Designing a library class that can store books with title, author and allow users to borrow and return books, that tests your knowledge of JavaScript.',
      estimated_hours: 4,
      subject: 'javascript',
    },
    {
      title: 'Calculator Class',
      slug: 'calculator',
      description:
        'Designing a simple calculator class that can do basic arithmetics, that tests your knowledge of JavaScript.',
      estimated_hours: 1,
      subject: 'javascript',
    },
    {
      title: 'Timer Class',
      slug: 'timer',
      description:
        'Designing a timer class that can start and stop time, while printing out the time in format, that tests your knowledge of JavaScript.',
      estimated_hours: 3,
      subject: 'javascript',
    },
  ],
  'react': [
    {
      title: 'Counter App',
      slug: 'counter-app',
      description:
        'A simple counter app that uses React Hooks and Tailwind CSS.',
      estimated_hours: 4,
      component: <Counter />,
      subject: 'react',
    },
    {
      title: 'Image Swapper App',
      slug: 'image-swapper',
      description:
        'A simple image swapper app that tests your knowledge of event listeners and states',
      estimated_hours: 4,
      component: <ImageSwapper />,
      subject: 'react',
    },

    {
      title: 'To-Do App',
      slug: 'to-do-app',
      description: 'A simple to-do app that uses React Hooks and Tailwind CSS.',
      estimated_hours: 6,
      subject: 'react',
      component: <Todolist />,
    },
    {
      title: 'Kanban Board',
      slug: 'kanban-board',
      description:
        'Advanced usage of two-dimentional React State that involves array states and methods.',
      estimated_hours: 8,
      subject: 'react',
      component: <KanbanBoard />,
    },
    {
      title: '15 Blocks Board',
      slug: '15-blocks-board',
      description: 'Use React and array methods to create a fun board game.',
      estimated_hours: 8,
      subject: 'react',
      component: <Board />,
    },
    {
      title: 'Games dictionary',
      slug: 'games-dictionary',
      description:
        'A games dictionary app that features a search bar and a list of games by categories, with a search result page and a pagination footer.',
      estimated_hours: 12,
      subject: 'react',
      component: <GamesDictionary />,
    },
    {
      title: 'Pokedex app',
      slug: 'pokedex-app',
      description:
        'A pokedex app that utilizes the HTTP requests to fetch data from the real pokedex API, displaying the resulting pokemon data in a paginated list that allows for searching.',
      estimated_hours: 16,
      subject: 'react',
      component: <Pokedex />,
    },
    {
      title: 'League of Legends app',
      slug: 'league-of-legends-app',
      description:
        "A League of Legends app that utilizes the Riot API and displays all champions in a list with their respective images, each champion has a button that allows for the user to click on it to display the champion's profile page that displays the champion's stats, skins and abilities",
      estimated_hours: 20,
      subject: 'react',
    },
  ],
  'backend': [
    {
      title: 'Movies API',
      slug: 'movies-api',
      description:
        'A simple API that returns a list of movies from a database.',
      estimated_hours: 10,
      subject: 'backend',
    },
  ],
  'full-stack': [
    {
      title: 'Social Networking App',
      slug: 'social-networking-app',
      description:
        'A simple social networking app that uses React Hooks, Node, Express, Postgres, and Tailwind CSS.',
      estimated_hours: 40,
      subject: 'full-stack',
    },
  ],
};
