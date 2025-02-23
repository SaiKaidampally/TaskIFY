import React, { useState } from "react";
import { FaPlus, FaTrash, FaCheck, FaClock } from "react-icons/fa";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    assignee: "",
    priority: "Low",
    deadline: "",
    status: "To Do",
  });

  const priorities = ["Low", "Medium", "High"];
  const statuses = ["To Do", "In Progress", "Done"];

  const addTask = () => {
    if (!newTask.title.trim()) return;
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", assignee: "", priority: "Low", deadline: "", status: "To Do" });
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const calculateProgress = () => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter(task => task.status === "Done").length;
    return Math.round((completed / tasks.length) * 100);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Task Manager</h2>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
          <span>Progress</span>
          <span>{calculateProgress()}%</span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>

      {/* Add Task */}
      <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <input
          type="text"
          placeholder="Task title"
          className="w-full p-2 mb-2 border rounded"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Assignee"
          className="w-full p-2 mb-2 border rounded"
          value={newTask.assignee}
          onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
        />
        <select
          className="w-full p-2 mb-2 border rounded"
          value={newTask.priority}
          onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
        >
          {priorities.map(p => <option key={p}>{p}</option>)}
        </select>
        <input
          type="date"
          className="w-full p-2 mb-2 border rounded"
          value={newTask.deadline}
          onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
        />
        <button onClick={addTask} className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center">
          <FaPlus className="mr-2" /> Add Task
        </button>
      </div>

      {/* Task List */}
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="p-4 mb-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{task.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Assigned to: {task.assignee}</p>
            <p className={`text-sm font-bold ${task.priority === "High" ? "text-red-500" : task.priority === "Medium" ? "text-yellow-500" : "text-green-500"}`}>
              Priority: {task.priority}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <FaClock className="inline-block mr-1" /> Deadline: {task.deadline}
            </p>
            <div className="mt-2 flex justify-between items-center">
              <select
                className="p-2 border rounded text-sm"
                value={task.status}
                onChange={(e) => updateTaskStatus(task.id, e.target.value)}
              >
                {statuses.map(s => <option key={s}>{s}</option>)}
              </select>
              <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
