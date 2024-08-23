import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="h-screen w-full flex items-end justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white flex gap-4 p-4 rounded-xl relative mb-4 shadow-lg">
        <button
          onClick={() => {
            setColor("black");
          }}
          className="bg-black text-white shadow-lg"
        >
          Black
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="bg-blue-700 text-white shadow-lg"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("gray");
          }}
          className="bg-gray-500 text-white shadow-lg"
        >
          Gray
        </button>
        <button
          onClick={() => {
            setColor("red");
          }}
          className="bg-red-500 text-white shadow-lg"
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("teal");
          }}
          className="bg-teal-500 text-white shadow-lg"
        >
          Teal
        </button>
        <button
          onClick={() => {
            setColor("pink");
          }}
          className="bg-pink-300 text-white shadow-lg"
        >
          Pink
        </button>
        <button
          onClick={() => {
            setColor("purple");
          }}
          className="bg-purple-500 text-white shadow-lg"
        >
          Purple
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="bg-green-500 text-black shadow-lg"
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="bg-yellow-500 text-black shadow-lg"
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("lime");
          }}
          className="bg-lime-500 text-black shadow-lg"
        >
          Lime
        </button>
      </div>
    </div>
  );
}

export default App;
