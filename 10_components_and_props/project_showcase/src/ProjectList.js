import Card from "./Card"

function ProjectList({ projects, hello }) {
  // console.log(props.projects)
  // const { projects } = props
  console.log(projects)
  return (
    <div>
      {
        projects.map((project) => {
          return <Card key={project.id} project={project}/>
        })
      }
    </div>
  )
}

export default ProjectList