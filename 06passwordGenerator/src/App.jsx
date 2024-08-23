import { useCallback, useState, useEffect, useRef } from "react";
import { IoIosCopy } from "react-icons/io";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;':\",.<>/?";

    let characters = lowercase + uppercase;
    let password = "";

    if (charAllowed) characters += specialChars;
    if (numAllowed) characters += numbers;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length
      );
      password += characters[randomIndex];
    }

    setPassword(password);
  }, [charAllowed, numAllowed, length, setPassword]);

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numAllowed, passwordGenerator]);

  return (
    <div className="w-full h-screen flex flex-col items-center bg-green-500">
      <div className="max-w-md bg-teal-700 mt-4 p-4 rounded-lg">
        <div className="mb-2">
          <h1 className="text-2xl text-center">Password Generator</h1>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="w-full p-2 rounded-tl-lg rounded-bl-lg focus:outline-none"
            ref={passwordRef}
            readOnly
          />
          <button
            className="max-w-md bg-blue-400 p-2 rounded-tr-lg rounded-br-lg"
            onClick={copyPasswordtoClipboard}
          >
            <IoIosCopy />
          </button>
        </div>
        <div>
          <div className="flex gap-2 mt-4">
            <input
              type="range"
              min="8"
              max="24"
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="text-white">length: {length}</label>
          </div>
          <div className="flex gap-2 mt-4">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed(!charAllowed)}
            />
            <label htmlFor="characterInput" className="text-white">
              Include special characters
            </label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed(!numAllowed)}
            />
            <label htmlFor="numberInput" className="text-white">
              Include numbers
            </label>
          </div>
          <button
            className="w-full bg-red-500 p-2 rounded-lg mt-4"
            onClick={passwordGenerator}
          >
            ReGenerate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
