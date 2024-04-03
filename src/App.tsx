import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MetaTag } from "./MetaTag";

function App() {
  return (
    <div className="App">
      <MetaTag
        title="GLAM"
        description="복잡하고 어려운 사랑을 누구나 쉽고 재미있게 할 수 있다면요?"
        url="https://seoglam.netlify.app/"
        img=""
      />
      <h1>This is the home page 🏡 </h1>
    </div>
  );
}

export default App;
