function Card({ project }) {
  console.log(project)
  return (
    <div>
      <h2>{project.name}</h2>
    </div>
  )
}

export default Card;