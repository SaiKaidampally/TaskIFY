import React, { useState } from 'react';
import ProjectCard from './ProjectCard'; // Importing the ProjectCard component

const AddProjects = () => {
  const [projects, setProjects] = useState([]); // State to hold project cards

  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      title: `Project ${projects.length + 1}`,
      image: null, // Initialize image property

      description: 'This is a new project.',
    };
    setProjects([...projects, newProject]); // Add new project to the state
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id)); // Delete project by id
  };

  return (
    <div>
      <button 
        onClick={handleAddProject} 
        className="fixed top-25 left-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add Projects +
      </button>
      <div className="mt-16">
        {projects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onDelete={handleDeleteProject} 
          />
        ))}
      </div>
    </div>
  );
};

export default AddProjects;
