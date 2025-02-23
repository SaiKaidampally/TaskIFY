import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: "1", name: "Project Alpha" },
    { id: "2", name: "Project Beta" },
    { id: "3", name: "Project Gamma" },
  ]);

  const [newProject, setNewProject] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Handle drag and drop reordering
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedProjects = [...projects];
    const [movedProject] = updatedProjects.splice(result.source.index, 1);
    updatedProjects.splice(result.destination.index, 0, movedProject);

    setProjects(updatedProjects);
  };

  // Handle new project addition
  const addProject = () => {
    if (newProject.trim() !== "") {
      setProjects([...projects, { id: Date.now().toString(), name: newProject }]);
      setNewProject("");
    }
  };

  // Handle project deletion
  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Handle editing project
  const saveEdit = (id) => {
    setProjects(
      projects.map((project) => (project.id === id ? { ...project, name: editText } : project))
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-200 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-red-600 text-center">Project Dashboard</h1>

      {/* Add New Project */}
      <div className="flex w-full max-w-3xl mb-6">
        <input
          type="text"
          placeholder="Enter project name..."
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          className="flex-1 p-3 border rounded-l-lg text-black dark:bg-gray-700"
        />
        <button
          onClick={addProject}
          className="px-5 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          <FaPlus />
        </button>
      </div>

      {/* Drag and Drop List */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
            >
              {projects.map((project, index) => (
                <Draggable key={project.id} draggableId={project.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-5 bg-[#42aaf5] rounded-lg shadow-md flex flex-col"
                    >
                      {/* Editing Mode */}
                      {editId === project.id ? (
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full p-2 border rounded-md text-black"
                        />
                      ) : (
                        <h2 className="text-xl font-semibold text-black">{project.name}</h2>
                      )}

                      {/* Actions */}
                      <div className="flex justify-end mt-4 space-x-2">
                        {editId === project.id ? (
                          <button
                            onClick={() => saveEdit(project.id)}
                            className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setEditId(project.id);
                              setEditText(project.name);
                            }}
                            className="p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                          >
                            <FaEdit />
                          </button>
                        )}
                        <button
                          onClick={() => deleteProject(project.id)}
                          className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Projects;
