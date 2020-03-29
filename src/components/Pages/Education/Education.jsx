import React, { useEffect, useState } from "react";
import axios from "axios";

const Education = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://personal-website--backend.herokuapp.com/education")
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  return data.map(education => {
    return (
      <section className="company-description">
        <div className="container">
          <div className="education">
          <div className="row">
              <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
                <img
                  src="images/about/csuf.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-md-6">
                <div className="block">
                  <h3
                    className="subtitle wow fadeInUp animated"
                    data-wow-delay=".3s"
                    data-wow-duration="500ms"
                  >
                    {education.name}
                  </h3>
                  <h4
                    className="wow fadeInUp animated"
                    data-wow-delay=".3s"
                    data-wow-duration="500ms"
                  >
                    GPA: {education.gpa}
                  </h4>
                  <div
                    className="block wow fadeInUp animated"
                    data-wow-duration="400ms"
                    data-wow-delay="600ms"
                  >
                    <h4
                      className="wow fadeInUp animated"
                      data-wow-delay=".3s"
                      data-wow-duration="500ms"
                    >
                      <b>Coursework:</b>
                    </h4>
                    <ul className="animated bounceInLeft">
                      {education.coursework.map(course => {
                          return<li>{course}</li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
                <img
                  src="images/about/csuf.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-md-6">
                <div className="block">
                  <h3
                    className="subtitle wow fadeInUp animated"
                    data-wow-delay=".3s"
                    data-wow-duration="500ms"
                  >
                    California State University, Fullerton
                  </h3>
                  <h4
                    className="wow fadeInUp animated"
                    data-wow-delay=".3s"
                    data-wow-duration="500ms"
                  >
                    GPA: 3.71
                  </h4>
                  <div
                    className="block wow fadeInUp animated"
                    data-wow-duration="400ms"
                    data-wow-delay="600ms"
                  >
                    <h4
                      className="wow fadeInUp animated"
                      data-wow-delay=".3s"
                      data-wow-duration="500ms"
                    >
                      <b>Coursework:</b>
                    </h4>
                    <ul className="animated bounceInLeft">
                      <li>
                        Java Back-End Engineering for Enterprise Application
                      </li>
                      <li>Operating System Design</li>
                      <li>Advance Hardware Security Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="block">
                  <h3
                    className="subtitle wow fadeInUp animated"
                    data-wow-delay=".3s"
                    data-wow-duration="500ms"
                  >
                    University of Mumbai
                  </h3>
                  <h4
                    className="wow fadeInUp animated"
                    data-wow-delay=".3s"
                    data-wow-duration="500ms"
                  >
                    Percentage: 71% (First Class with Distinction)
                  </h4>
                  <div
                    className="block wow fadeInUp animated"
                    data-wow-duration="400ms"
                    data-wow-delay="600ms"
                  >
                    <h4
                      className="wow fadeInUp animated"
                      data-wow-delay=".3s"
                      data-wow-duration="500ms"
                    >
                      <b>Coursework:</b>
                    </h4>
                    <ul className="animated bounceInLeft">
                      <li>Data Structure and Algorithm</li>
                      <li>Software Engineering</li>
                      <li>Object Oriented Analysis and Design</li>
                      <li>Computer Programming</li>
                      <li>Programming for Mobile and Remote Computers</li>
                      <li>Operating System for Computational Devices</li>
                      <li>Mobile and E-commerce</li>
                      <li>Middleware Enterprise Integration Technologies</li>
                      <li>Internet Programming</li>
                      <li>Information and Network Security</li>
                      <li>
                        Information Technology for Management of Enterprise
                      </li>
                      <li>
                        Information Storage Management and Disaster Recovery
                      </li>
                      <li>Gaming Architecture and Programming</li>
                      <li>GUI and Database Management</li>
                      <li>
                        Financial Accounting and Management of Technology
                        Innovation
                      </li>
                      <li>Database Technologies</li>
                      <li>Computer Graphics and Virtual Reality Systems</li>
                      <li>
                        Data warehousing, Mining, and Business Intelligence
                      </li>
                      <li>Software Project Management</li>
                      <li>Software Testing and Quality Assurance</li>
                      <li>Simulation and Modeling</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
                <img
                  src="images/about/uom.png"
                  alt=""
                  className="img-responsive"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
                <img
                  src="images/about/wilson.jpg"
                  alt=""
                  className="img-responsive"
                />
              </div>
              <div className="col-md-6">
                <div className="block">
                  <h3
                    className="subtitle wow fadeInUp animated"
                    data-wow-delay=".3s"
                    data-wow-duration="500ms"
                  >
                    Wilson College, Mumbai
                  </h3>
                  <div
                    className="block wow fadeInUp animated"
                    data-wow-duration="400ms"
                    data-wow-delay="600ms"
                  >
                    <h4>HSC</h4>
                    <h5>General Science (Mathematics & Biology)</h5>
                  </div>
                  <div
                    className="block wow fadeInUp animated"
                    data-wow-duration="400ms"
                    data-wow-delay="600ms"
                  ></div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
    );
  });
};

export default Education;
