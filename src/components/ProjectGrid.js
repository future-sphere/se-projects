import { CodeIcon, EyeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

type Props = {
  projects: Project[],
  subject: string,
};

const ProjectGrid = ({ projects, subject }: Props) => {
  return (
    <div className='grid grid-cols-1 divide-y gap-y-8 mt-4'>
      {projects.map((project) => (
        <div key={project.slug} className='pt-4'>
          <p className='text-sm text-gray-500'>
            <span>
              Estimate time to complete: {project.estimated_hours} hours
            </span>
          </p>
          <a href='#' className='mt-2 block'>
            <p className='text-xl font-semibold text-gray-900'>
              {project.title}
            </p>
            <p className='mt-3 text-base text-gray-500'>
              {project.description}
            </p>
          </a>
          <div className='mt-3 flex gap-5 items-center  font-mono text-xs'>
            <Link
              to={`/${subject}/projects/${project.slug}`}
              className='flex gap-1 items-center text-blue-600 hover:text-blue-900'
            >
              <EyeIcon className='h-4' />
              View Project
            </Link>
            <Link
              to={`https://github.com/future-sphere/tree/master/src/projects/${subject}/projects/${project.slug}/code`}
              className='flex gap-1 items-center text-blue-600 hover:text-blue-900'
            >
              <CodeIcon className='h-4' />
              View Source Code
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
