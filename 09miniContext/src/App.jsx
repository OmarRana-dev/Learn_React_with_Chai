// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import { Login, Profile } from "./components/index";

function App() {
  return (
    <UserContextProvider>
      <h1>This Project is about Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
