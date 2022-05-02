import Counter from './projects/react/counter-app';
import { ProjectTypeMap } from './types';

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
      title: 'Landkit components',
      slug: 'landkit-components',
      description:
        'Simple Landkit hero components that tests your knowledge of CSS property usages.',
      estimated_hours: 6,
      subject: 'css',
    },
  ],
  'javaScript': [
    {
      title: 'Array method exercises',
      slug: 'array-method-exercises',
      description:
        'A collection of exercises that test your knowledge of JavaScript array methods.',
      estimated_hours: 4,
      subject: 'css',
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
      title: 'To-Do App',
      slug: 'to-do-app',
      description: 'A simple to-do app that uses React Hooks and Tailwind CSS.',
      estimated_hours: 6,
      subject: 'react',
    },
    {
      title: 'Kanban Board',
      slug: 'kanban-board',
      description:
        'Advanced usage of two-dimentional React State that involves array states and methods.',
      estimated_hours: 8,
      subject: 'react',
    },
    {
      title: 'Product management app',
      slug: 'product-management-app',
      description:
        'A product management app that uses React Hooks and Tailwind CSS, including a pop up modal that allows users to input product information into a form then display the list of products as a result that allows for edition and deletion.',
      estimated_hours: 12,
      subject: 'react',
    },
    {
      title: 'Pokedex app',
      slug: 'pokedex-app',
      description:
        'A pokedex app that utilizes the HTTP requests to fetch data from the real pokedex API, displaying the resulting pokemon data in a paginated list that allows for searching.',
      estimated_hours: 16,
      subject: 'react',
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
