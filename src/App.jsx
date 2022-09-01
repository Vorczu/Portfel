import { createContext, useContext, useState } from "react";
import TestComp from "./components/test";

export const ThemeContext = createContext();

function App() {




  return (
      <div className="App">
        <TestComp />
      </div>
  )
}

export default App
