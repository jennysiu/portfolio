// import Project from "../components/Project"; 
import projectData from "../assets/data/projectData.json";
// import "./styling/ProjectGallery.css";

function Work() {
  return (
    <>
    <div className="projects-container">
      <h1>Project Gallery</h1>
      {/* <section >
        {projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
            image={project.image}
          />
        ))}
      </section> */}
    </div>
    </>
  )
}

export default Work;