import { useState } from 'react'

export default function ProjectForm({onFormSubmit}) {
  const [newProject, setNewProject] = useState({
    title: '',
    description: ''
  });

function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit( {...newProject, id: Date.now() } );
    setNewProject({
      title: '',
      description: ''
    });
};

function handleChange(e) {
    setNewProject((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value
      };
    });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <h3>Add New Project</h3>
      <div>
        <label>
          Title:
          <input type="text" name="title" value={newProject.title} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea name="description" value={newProject.description} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Add Project</button>
    </form>
  )
};