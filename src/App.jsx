import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Project } from "./components/Project";
import { AddProject } from "./components/AddProject";

function App() {
  const [showNewProjectComponent, setShowNewProjectComponent] = useState(false);
  const [projects, setProjects] = useState([])

  function onAddNewProject() {
    setShowNewProjectComponent(!showNewProjectComponent);
  }

  return (
    <div className="flex flex-row h-screen w-full bg-white gap-5">
      <Sidebar onAddNewProject={onAddNewProject} />

      {
        showNewProjectComponent 
          ? <AddProject onAddNewProject={onAddNewProject} />
          : <Project onAddNewProject={onAddNewProject} />
      }
    </div>
  );
}

export default App;
