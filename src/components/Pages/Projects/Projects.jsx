import React, { useState, useEffect } from "react";
import axios from "axios";
import Headliner from "../../Headliner/Headliner.jsx";

import Cards from "../../Cards/ProjectCard.jsx";

import { Loading } from "../../Reusables/Loading.jsx";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://personal-website--backend.herokuapp.com/project")
      .then(({ data }) => {
        setData(data.data.reverse());
      });
  }, []);

  return (
    <>
      <Headliner
        headline="Projects"
        quote="It's not who you are underneath, It's what you do that defines you."
      />
      {!data.length ? (
        <Loading />
      ) : (
        <section className="works service-page">
          <div className="container">
            <h2
              className="subtitle wow fadeInUp animated"
              data-wow-delay=".3s"
              data-wow-duration="500ms"
            >
              List of Projects
            </h2>
            <p
              className="subtitle-des wow fadeInUp animated"
              data-wow-delay=".5s"
              data-wow-duration="500ms"
            >
              This secition shows all the projects recently worked on or still
              working on. Projects have various diversity which includes
              <br /> Software Engineering, Web Design, Application Concept/
              Prototype, Libraries and Wireframes .
            </p>
            <div className="row">
              {data.map((project, index) => {
                {console.log(project)}
                return (
                  <div key={index} className="col-sm-3">
                    <figure
                      className="wow fadeInLeft animated portfolio-item"
                      data-wow-duration="500ms"
                      data-wow-delay="0ms"
                    >
                      {/* <Cards
                        image={project.projectImage}
                        name={project.projectName}
                        subtitle={project.subtitle}
                      /> */}
                      <div className="img-wrapper">
                        <img
                          src={project.projectImage}
                          className="img-fluid"
                          alt="this is a title"
                        />
                        <div className="overlay">
                          <div className="buttons">
                            <a
                              target="_blank"
                              href={project.demoLink}
                            >
                              Demo
                            </a>
                            <a target="_blank" href={project.repoLink}>
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                      <figcaption>
                        <h4>
                          <a target="_blank" href={project.repoLink}>
                            {project.projectName}
                          </a>
                        </h4>
                        <p>{project.subtitle}</p>
                      </figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
