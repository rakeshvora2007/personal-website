import React, { useState, useEffect } from "react";
import axios from "axios";

import about from "../../../images/about.jpg";

const Home = () => {
  const [data, setData] = useState([]);
  console.log("HOME");
  useEffect(() => {
    let source = axios.CancelToken.source();
    let unmounted = false;
    axios
      .get("https://personal-website--backend.herokuapp.com/project", {cancelToken: source.token})
      .then(({ data }) => {
        console.log("I got the data")
        if(!unmounted) {
          setData(data.data.reverse());
        }
      })
      .catch(error => {
        if(axios.isCancel(error)) {
          console.log(`request cancelled:${error.message}`);
        } else {
          throw error;
        }
      }); 
    return () => {
      unmounted = true;
      source.cancel("Cancelling in cleanup");
      console.log("unmounted....")
    };
  }, []);

  return (
    <div>
      <section id="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="block wow fadeInUp" data-wow-delay=".3s">
                <section className="cd-intro">
                  <h1
                    className="wow fadeInUp animated cd-headline slide"
                    data-wow-delay=".4s"
                  >
                    <span>HI, MY NAME IS Rakesh Jain & I AM A</span>
                    <br />
                    <span className="cd-words-wrapper">
                      <b className="is-visible">DEVELOPER</b>
                      <b>DESIGNER</b>
                    </span>
                  </h1>
                </section>
                <h2 className="wow fadeInUp animated" data-wow-delay=".6s">
                  With 3 years experience, I've occupied many roles including
                  web and mobile application developer,
                  <br /> software engineer. This site showcases some of my work.
                </h2>
                <a
                  className="btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green"
                  data-wow-delay=".9s"
                  href="#works"
                  data-section="#works"
                >
                  View Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div
                className="block wow fadeInLeft"
                data-wow-delay=".3s"
                data-wow-duration="500ms"
              >
                <h2>ABOUT ME</h2>
                <p>
                  Hello, I’m a Software Engineer from California, USA. I hold a
                  master degree of Computer Engineering from the California
                  State University, Fullerton. I have worked on various
                  development projects academically as well as profesionally
                  ranging from medical to finance.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div
                className="block wow fadeInRight"
                data-wow-delay=".3s"
                data-wow-duration="500ms"
              >
                <img src={about} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="works" className="works">
        <div className="container">
          <div className="section-heading">
            <h1 className="title wow fadeInDown" data-wow-delay=".3s">
              Latest Works
            </h1>
            <p className="wow fadeInDown" data-wow-delay=".5s">
              This secition shows all the projects recently worked on or still
              working on. Projects have various diversity which includes
              <br /> Software Engineering, Web Design, Application Concept/
              Prototype, Libraries and Wireframes .
            </p>
          </div>
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
      <section id="feature">
        <div className="container">
          <div className="section-heading">
            <h1 className="title wow fadeInDown" data-wow-delay=".3s">
              Skills
            </h1>
            <p className="wow fadeInDown" data-wow-delay=".5s">
              Wide range of skill set ranging from requirement gathering,
              design, development, testing, documentation to maintenance
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xs-12">
              <div
                className="media wow fadeInUp animated"
                data-wow-duration="500ms"
                data-wow-delay="300ms"
              >
                <div className="media-left">
                  <div className="icon">
                    <i className="ion-coffee"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Coding</h4>
                  <p>Java, JavaScript, React, Redux, Nodejs</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12">
              <div
                className="media wow fadeInDown animated"
                data-wow-duration="500ms"
                data-wow-delay="600ms"
              >
                <div className="media-left">
                  <div className="icon">
                    <i className="ion-ios-infinite"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Unique Ideas</h4>
                  <p>Identifying the Need, Creating a Solution</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12">
              <div
                className="media wow fadeInDown animated"
                data-wow-duration="500ms"
                data-wow-delay="900ms"
              >
                <div className="media-left">
                  <div className="icon">
                    <i className="ion-clipboard"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Documentation</h4>
                  <p>Quip, Trello, Markdown, Dropbox paper</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12">
              <div
                className="media wow fadeInDown animated"
                data-wow-duration="500ms"
                data-wow-delay="1200ms"
              >
                <div className="media-left">
                  <div className="icon">
                    <i className="ion-edit"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Design</h4>
                  <p>Adobe XD, UML, DFD</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12">
              <div
                className="media wow fadeInDown animated"
                data-wow-duration="500ms"
                data-wow-delay="1500ms"
              >
                <div className="media-left">
                  <div className="icon">
                    <i className="ion-checkmark-circled"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Testing</h4>
                  <p>jUnit, Mocha, Chai, Selenium</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12">
              <div
                className="media wow fadeInDown animated"
                data-wow-duration="500ms"
                data-wow-delay="1800ms"
              >
                <div className="media-left">
                  <div className="icon">
                    <i className="ion-settings"></i>
                  </div>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Support</h4>
                  <p>Onsite as well as weekly maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2
                  className="title wow fadeInDown"
                  data-wow-delay=".3s"
                  data-wow-duration="500ms"
                >
                  SO WHAT YOU THINK ?
                </h2>
                <p
                  className="wow fadeInDown"
                  data-wow-delay=".5s"
                  data-wow-duration="500ms"
                >
                  Contact me for any queries or live work, contract projects
                  <br />I always try to reach within 24 hours and hope to reply
                  as soon as possible.
                </p>
                <a
                  href="contact.html"
                  className="btn btn-default btn-contact wow fadeInDown"
                  data-wow-delay=".7s"
                  data-wow-duration="500ms"
                >
                  Contact With Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
