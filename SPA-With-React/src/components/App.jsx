import { useState } from 'react'
import '../index.css'
import ProjectList from './ProjectList'
import ProjectForm from './ProjectForm'
import SearchBar from './SearchBar'
import projects from '../data/project_data'

function App() {
  const [allProjects, setProjects] = useState(projects);

  function handleNewProject(newProject) {
    setProjects([...allProjects, newProject]);
  };

  function handleSearch(query) {
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(query.toLowerCase())
    );
    setProjects(filteredProjects);
  };

  return (
    <div >
      <h1> Project Showcase for Interviews </h1>
      <div className="container">
        <ProjectForm onFormSubmit={handleNewProject} />
      </div>

      <div className="container">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="container">
        <ProjectList projects={allProjects} />
      </div>

    </div>
  )
}

export default App
