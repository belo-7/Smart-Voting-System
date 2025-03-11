import React from "react";
import VoterRegister from "./components/VoterRegister";

const App = () => {
  return (
    <div>
      <h1 className="flex justify-center m-10 text-white  text-4xl font-bold">
        WEL-COME TO ELECTION BOARD OF HARAR{" "}
      </h1>
      <VoterRegister />
      {/* <Candidates  /> */}
    </div>
  );
};

export default App;
