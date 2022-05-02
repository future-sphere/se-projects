import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectGrid from '../components/ProjectGrid';
import Wrapper from '../components/Wrapper';
import { projects } from '../helpers';

type Props = {};

const ProjectsPage = (props: Props) => {
  const location = useLocation();
  const subject = location.pathname.split('/')[1];
  return (
    <Wrapper>
      <div>
        <h1 className='text-4xl font-extrabold text-black tracking-wide uppercase'>
          {subject} Projects
        </h1>
        <ProjectGrid projects={projects[subject]} subject={subject} />
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
