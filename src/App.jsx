import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Project } from "./components/Project";

function App() {
  const [projects, setProjects] = useState([])

  return (
    <div className="flex flex-row h-screen w-full bg-white gap-5">
      <Sidebar />

      <Project />

    </div>
  );
}

export default App;
