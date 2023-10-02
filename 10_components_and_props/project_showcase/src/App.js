import Header from "./Header"
import ProjectForm from "./ProjectForm"
import ProjectList from "./ProjectList"
import projects from "./projects"
// console.log(projects)

function App() {
  return(
    <div className="App">
      {/* { true ? "true": "false" } */}
      <Header />
      <ProjectForm />
      <ProjectList projects={projects} hello={'world'} />
    </div>
  );
}

export default App;
