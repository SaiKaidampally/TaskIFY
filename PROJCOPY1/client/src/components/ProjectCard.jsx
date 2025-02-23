import React, { useState } from 'react';

const ProjectCard = ({ project, onDelete }) => {
  const [image, setImage] = useState(project.image || null); // State to hold the uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the uploaded image
        project.image = reader.result; // Update the project object with the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null); // Remove the uploaded image
    project.image = null; // Update the project object to remove the image
  };

  return ( 
    <div className="bg-white shadow-md rounded-lg p-4 m-2 max-w-sm">
      {image ? (
        <img src={image} alt="Project" className="w-full h-32 object-cover rounded" /> 
      ) : (
        <img src="placeholder-image-url" alt="Placeholder" className="w-full h-32 object-cover rounded" />
      )}
      <input type="file" onChange={handleImageUpload} className="mt-2" accept="image/*" />
      <button onClick={handleImageRemove} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
        Add Image
      </button>
      <h3 className="text-lg font-semibold">{project.title}</h3> 
      <p className="text-gray-600">{project.description}</p>
      <button 
        onClick={() => onDelete(project.id)} 
        className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
        Delete
      </button>
    </div>
  );
};

export default ProjectCard;
