import React from 'react';
import './App.css';
import logo from "./assets/logotext.png"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
  <main className="p-4 text-center">
    <h1 className="text-2xl">Welcome to your quiz app.</h1>
    <p className="animate-pulse text-lg font-semibold">Coming soon...</p>
    <img src={logo} alt="Logo" className="w-30 h-9  brightness-0 invert" />
  </main>
</div>

  );
}

export default App;
