import { CodeIcon, EyeIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

type Props = {
  projects: Project[];
  subject: string;
};

const ProjectGrid = ({ projects, subject }: Props) => {
  let filetype = '';
  
  if (subject === 'css' || subject === 'react') filetype = 'tsx';
  else if (subject === 'javascript') filetype = 'ts';
  
  return (
    <div className='grid grid-cols-1 mt-4 divide-y gap-y-8'>
      {projects.map((project) => (
        <div
          key={project.slug}
          className={`pt-4 ${
            project.component || project.slug
              ? 'opacity-100 cursor-default'
              : 'opacity-30 cursor-not-allowed pointer-events-none'
          }`}
        >
          <p className='text-sm text-gray-500'>
            <span>
              Estimate time to complete: {project.estimated_hours} hours
            </span>
          </p>

          <p className='text-xl font-semibold text-gray-900'>{project.title}</p>
          <p className='mt-3 text-base text-gray-500'>{project.description}</p>
          <div className='flex items-center gap-5 mt-3 font-mono text-xs'>
            {project.component && (
              <Link
                to={`/${subject}/projects/${project.slug}`}
                className='flex items-center gap-1 text-blue-600 hover:text-blue-900'
              >
                <EyeIcon className='h-4' />
                View Project
              </Link>
            )}
            <a
              target={'_blank'}
              href={`https://github.com/future-sphere/se-projects/blob/master/src/projects/${project.subject}/${project.slug}/index.${filetype}`}
              className='flex items-center gap-1 text-blue-600 hover:text-blue-900'
              rel='noreferrer'
            >
              <CodeIcon className='h-4' />
              View Source Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
