import React from "react";

// const candidates = [
//   { id: 1, name: "Candidate A", votes: 1200 },
//   { id: 2, name: "Candidate B", votes: 900 },
//   { id: 3, name: "Candidate C", votes: 600 },
// ];

const Candidates = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
        Election Results
      </h2>
      <ul className="space-y-2">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="flex justify-between p-2 border-b">
            <span className="font-medium">{candidate.name}</span>
            <span>{candidate.votes} votes</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Candidates;
