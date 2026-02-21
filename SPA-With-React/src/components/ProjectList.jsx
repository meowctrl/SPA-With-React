import ProjectCard from './ProjectCard'

export default function ProjectList({ projects }) {

  return (
    <div>
      <h2>Past Projects:</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}