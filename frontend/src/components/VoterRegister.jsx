import React, { useState } from "react";

const VoterRegister = () => {
  return (
    <div className="flex justify-center items-center max-h-screen p-17">
      <div className="bg-white p-15 rounded-lg shadow-md w-96 ">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Election System Login
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default VoterRegister;
