import React from 'react';
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { classNames } from '../helpers';
import Wrapper from '../components/Wrapper';
import { Link } from 'react-router-dom';

const actions = [
  {
    title: 'HTML',
    href: '/html/projects',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    description:
      'HTML is the standard markup language for creating web pages and web applications. The projects here with HTML were mostly about creating the layout of the website.',
  },
  {
    title: 'CSS',
    href: '/css/projects',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    description:
      'CSS is the style sheet language used to describe the presentation of a document written in a markup language. Projects here with CSS were mostly about styling the website, including exercises on layout techniques such as Flexbox and Grid.',
  },
  {
    title: 'JavaScript',
    href: '/javascript/projects',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    description:
      'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. Projects here mostly involved data processing and manipulation.',
  },
  {
    title: 'React',
    href: '/react/projects',
    icon: CashIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    description:
      'React is a JavaScript library for building user interfaces. Projects here involved building the frontend of the website. Projects here are focused on testing your understanding of building simple frontend applications.',
  },
  {
    title: 'Backend',
    href: '/backend/projects',
    icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    description:
      'Backend projects are focused on building the API interfaces that can support a variety of frontend applications.',
  },
  {
    title: 'Full Stack',
    href: '/full-stack/projects',
    icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    description:
      'Full Stack projects are focused on building the entire website from the frontend to the backend, including common features such as authentication and CRUD operations.',
  },
];

type Props = {};

const HomePage = (props: Props) => {
  return (
    <Wrapper>
      <div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
        {actions.map((action, actionIdx) => (
          <Link
            to={action.href}
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-lg inline-flex p-3 ring-4 ring-white',
                )}
              >
                <action.icon className='h-6 w-6' aria-hidden='true' />
              </span>
            </div>
            <div className='mt-8'>
              <h3 className='text-lg font-medium'>
                <a href={action.href} className='focus:outline-none'>
                  {/* Extend touch target to entire panel */}
                  <span className='absolute inset-0' aria-hidden='true' />
                  {action.title}
                </a>
              </h3>
              <p className='mt-2 text-sm text-gray-500'>{action.description}</p>
            </div>
            <span
              className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
              aria-hidden='true'
            >
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default HomePage;
