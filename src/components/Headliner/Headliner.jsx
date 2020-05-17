import React from "react";

const Headliner = ({ headline, quote }) => {
  return (
    <section className="global-page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h2>{headline}</h2>
              <p>{quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headliner;
