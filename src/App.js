import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { projects } from './helpers';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';

const flatProjects = Object.values(projects).flat();

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:subject/projects' element={<ProjectsPage />} />
        {flatProjects.map((project) => (
          <Route
            key={project.slug}
            path={`/${project.subject}/projects/${project.slug}`}
            element={project.component}
          />
        ))}
      </Routes>
    </div>
  );
}
