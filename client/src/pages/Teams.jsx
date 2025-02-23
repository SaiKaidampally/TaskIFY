import React, { useState } from "react";
import { FaUsers, FaTrash } from "react-icons/fa";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [newTeamName, setNewTeamName] = useState("");

  const addTeam = () => {
    if (newTeamName.trim() !== "") {
      setTeams([...teams, { id: Date.now(), name: newTeamName, members: [] }]);
      setNewTeamName("");
    }
  };

  const deleteTeam = (id) => {
    setTeams(teams.filter(team => team.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Team Management</h1>

      <div className="flex space-x-2 mb-6">
        <input
          type="text"
          placeholder="Enter team name..."
          value={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
          className="p-3 border rounded-lg text-black"
        />
        <button onClick={addTeam} className="px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center">
          Create Team
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {teams.map((team) => (
          <div key={team.id} className="p-5 bg-black text-white rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center">
                <FaUsers className="mr-2 text-yellow-400" /> {team.name}
              </h2>
              <button onClick={() => deleteTeam(team.id)} className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                <FaTrash />
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-400">Members: {team.members.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;





