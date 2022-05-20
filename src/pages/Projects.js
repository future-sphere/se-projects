import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectGrid from '../components/ProjectGrid';
import Wrapper from '../components/Wrapper';
import { projects } from '../helpers';

const ProjectsPage = () => {
  const location = useLocation();
  const subject = location.pathname.split('/')[1];
  return (
    <Wrapper>
      <div>
        <h1 className='text-4xl font-extrabold tracking-wide text-black uppercase'>
          {subject} Projects
        </h1>
        <ProjectGrid projects={projects[subject]} subject={subject} />
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
