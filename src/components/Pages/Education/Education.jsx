import React, { useEffect, useState } from "react";
import axios from "axios";

import {Loading} from "../../Reusables/Loading.jsx";

const Education = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://personal-website--backend.herokuapp.com/education")
      .then(({ data }) => {
        setData(data.data);
      });
  }, []);

  if(!data.length) {
    return <Loading />;
  }

  return (
    <section className="company-description">
      <div className="container">
        <div className="education">
          {data.map((education, index) => {
            return (
              <div key={index} className="row">
                <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
                  <img
                    src={education.educationImage}
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
                        {education.courseWork.map((course, index) => {
                          return <li key={index}>{course}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
