import React, { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState (0);

    const handleIncrement = () => {
        setState(state + 1);
    };

    const handleDecrement = () => {
        setState(state - 1);
    };

  return (
    <div>
        <div className="bg-white w-[30%] mx-auto rounded-md shadow my-6">
          <h1 className="text-3xl font-semibold text-center py-2 text-pink-400">{state}</h1>
            <br />

          <div className="text-center space-x-6 py-4">
          <button onClick={handleIncrement} className="font-semibold bg-green-300 text-gray-600 rounded py-2 px-4 shadow">INCREMENT</button>
          <button onClick={handleDecrement} className="font-semibold bg-red-300 text-gray-600 rounded py-2 px-4 shadow">DECREMENT</button>
          </div>
        </div>
    </div>
  )
}

export default Counter