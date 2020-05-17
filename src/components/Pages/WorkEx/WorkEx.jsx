import React, { useState, useEffect } from "react";
import axios from "axios";
import Headliner from "../../Headliner/Headliner.jsx";


import { Loading } from "../../Reusables/Loading.jsx";

const WorkEx = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://personal-website--backend.herokuapp.com/work")
      .then(({ data }) => {
        setData(data.data.reverse());
      });
  }, []);

  if(!data.length) {
    return <Loading />;
  }

  return (
    <>
    <Headliner headline="Work Experience" quote="All that matter is sane"/>
    <section className="company-description">
      <div className="container">
        <div className="education">
          {data.map((work, index) => {
            return (
              <div key={index} className="row">
                <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s">
                  <img
                    src={work.workImage}
                    height="200px"
                    alt=""
                    className="img-responsive comp-img"
                  />
                </div>
                <div className="col-md-6">
                  <div className="block">
                    <h3
                      className="subtitle wow fadeInUp animated"
                      data-wow-delay=".3s"
                      data-wow-duration="500ms"
                    >
                      {work.companyName}
                    </h3>
                    <h4
                      className="wow fadeInUp animated"
                      data-wow-delay=".3s"
                      data-wow-duration="500ms"
                    >
                      <i>
                        <b>{work.designation}</b>
                      </i>
                    </h4>
                    <div
                      className="block wow fadeInUp animated"
                      data-wow-duration="400ms"
                      data-wow-delay="600ms"
                    >
                      <ul>
                        {work.responsibilities.map((responsibility, index) => {
                          return <li key={index}>{responsibility}</li>;
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
    </>
  );
};

export default WorkEx;
