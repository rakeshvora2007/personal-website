import React, {useState, useEffect} from "react";
import axios from "axios";

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

  if(!data.length) {
    return <Loading />;
  }

  return (
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
            return (
              <div key={index} className="col-sm-3">
                <figure
                  className="wow fadeInLeft animated portfolio-item"
                  data-wow-duration="500ms"
                  data-wow-delay="0ms"
                >
                  <div className="img-wrapper">
                    <img
                      src={project.projectImage}
                      className="img-responsive"
                      alt="this is a title"
                    />
                    <div className="overlay">
                      <div className="buttons">
                        <a
                          rel="gallery"
                          className="fancybox"
                          href={project.demoLink}
                        >
                          Demo
                        </a>
                        <a target="_blank" href="">
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption>
                    <h4>
                      <a target="_blank" href={project.repoLink}>{project.projectName}</a>
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
  );
};

export default Projects;
