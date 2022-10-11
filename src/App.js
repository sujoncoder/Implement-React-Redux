import React from "react";
import Counter from "./components/Counter";

function App() {

  return (
    <div className="bg-gray-100 h-screen">
      {/* MY TITTLE SECTION */}
      <div>
        <h1 className="text-center text-3xl font-semibold text-purple-400 py-4">Wellcome To <span className="text-blue-400 font-bold">React</span> <span className="text-pink-400">Redux</span> Counter Applications.</h1> <br /><br />
      </div>

      {/* COUNTER SECTION */}
      <div>
        <Counter/>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
