import React, { useState } from "react";
import { withLogging } from "../HOC/withLogging.jsx";
import withRequest from "../HOC/withRequest.js";

const Project = ({ status, error, loading, data, handleAdd, handleDelete, handleUpdate, imageView }) => {
  const [projectName, setProjectName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const onAdd = () => {
    const newArray = [...technologies, " "];
    setTechnologies(newArray);
  };

  const onDelete = index => {
    const newArray = [
      ...technologies.slice(0, index),
      ...technologies.slice(index + 1)
    ];
    setTechnologies(newArray);
  };

  const handleChange = (index, value) => {
    const newArray = technologies.slice(0);
    newArray[index] = value;
    setTechnologies(newArray);
  };

  const newValues = {
    projectName,
    subtitle,
    technologies
  };

  const renderUI = projects => {
    return (
      <>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableData}>Project Name</th>
              <th style={styles.tableData}>Subtitles</th>
              <th style={styles.tableData}>Technologies</th>
              <th style={styles.tableData}>Project Image</th>
              <th style={styles.tableData}>Options</th>
            </tr>
          </thead>
          <tbody>
            {projects && projects.length ? (
              projects.map(project => {
                return (
                  <tr key={project._id}>
                    <td style={styles.tableData}>{project.projectName}</td>
                    <td style={styles.tableData}>{project.subtitle}</td>
                    <td style={styles.tableData}>
                      <ol>
                        {project.technologies
                          ? project.technologies.map((technology, index) => {
                              return <li key={index}>{technology}</li>;
                            })
                          : "N/A"}
                      </ol>
                    </td>
                    {project.projectImage ? (
                      <td style={styles.tableData}>
                        <img
                          src={project.projectImage}
                          height="100px"
                          width="100px"
                        />
                      </td>
                    ) : (
                      "N/A"
                    )}
                    <td style={styles.tableData}>
                      <button
                        onClick={() => {
                          handleDelete(project._id);
                        }}
                      >
                        Delete Project
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Projects</td>
              </tr>
            )}
          </tbody>
        </table>
        <form>
          <div style={styles.form}>
            Project Name:
            <input
              name="projectName"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              required
            />
            Subititles:
            <input
              name="subtitle"
              value={subtitle}
              onChange={e => setSubtitle(e.target.value)}
              required
            />
            Technologies:
            {technologies.map((technology, index) => {
              return (
                <div key={index}>
                  <input
                    name={technology}
                    value={technology}
                    onChange={e => handleChange(index, e.target.value)}
                  />
                  <span onClick={() => onDelete(index)}>x</span>
                </div>
              );
            })}
            <button type="button" onClick={() => onAdd()}>
              Add
            </button>
            Project Image :
            {imageView}
            <button type="button" onClick={() => handleAdd(newValues)}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  };

  switch (status) {
    case "loading":
      console.log("loading........." + loading)
      return <div>Loading...</div>;
    case "error":
      console.log(error);
    case "data":
      return renderUI(data);
  }

  // const clearForms = () => {
  //   setProjectName("");
  //   setSubtitle("");
  //   setTechnologies([]);
  //   setImageUrl("");
  //   childRef.current.clearImage();
  // };  

};

const styles = {
  table: {
    fontFamily: '"Trebuchet MS", Arial, Helvetica, sans-serif',
    border: "2px solid black",
    borderCollapse: "collapse",
    margin: "50px 0px 0px 50px",
    fontSize: "24px"
  },
  form: {
    margin: "200px",
    display: "inline-flex",
    flexDirection: "column"
  },
  tableData: {
    border: "1px solid black"
  }
};

export default withRequest(withLogging(Project), "project");
