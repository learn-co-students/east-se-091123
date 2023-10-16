import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${projectId}`)
      .then((resp) => resp.json())
      .then(setProject);
  }, [projectId]);

  return <div>{project?.name}</div>;
}

export default ProjectDetails;
