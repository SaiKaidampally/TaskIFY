import React, { useState } from "react";
import Projects from "./Projects";
import TaskManager from "./TaskManager";

const Dashboard = () => {
  const [projects, setProjects] = useState([
    { id: "1", name: "Project Alpha" },
    { id: "2", name: "Project Beta" },
    { id: "3", name: "Project Gamma" },
  ]);

  const [tasks, setTasks] = useState([]);

  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const calculateProgress = () => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter((task) => task.status === "Done").length;
    return Math.round((completedTasks / tasks.length) * 100);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Dashboard</h1>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-5 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Projects</h2>
          <p className="text-3xl font-bold text-blue-500">{projects.length}</p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700">Total Tasks</h2>
          <p className="text-3xl font-bold text-green-500">{tasks.length}</p>
        </div>
        <div className="p-5 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-xl font-semibold text-gray-700">Progress</h2>
          <p className="text-3xl font-bold text-purple-500">{calculateProgress()}%</p>
        </div>
      </div>

      {/* Projects & Tasks Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Projects</h2>
          <Projects projects={projects} setProjects={setProjects} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Tasks</h2>
          <TaskManager tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

