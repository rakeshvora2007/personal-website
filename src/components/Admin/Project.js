import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import imageUploader from "../../utils/imageUploader.js";
import { ImageViewer } from "../../utils/ImageViewer.jsx";

export const Project = () => {
  const [projects, setProjects] = useState();
  const [projectName, setProjectName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);

  const childRef = useRef();

  useEffect(() => {
    axios
      .get("https://personal-website--backend.herokuapp.com/project")
      .then(({ data }) => {
        setProjects(data.data);
      });
  }, []);

  const addProject = () => {
    setLoading(true);
    // submit image
    imageUploader(imageUrl).then(firebaseUrl => {
      // execute add project api
      axios
        .post("https://personal-website--backend.herokuapp.com/project", {
          projectName,
          subtitle,
          technologies,
          projectImage: firebaseUrl
        })
        .then(newProject => {
          const newProjectsArray = [...projects, newProject.data.data];
          setProjects(newProjectsArray);
          setLoading(false);
          clearForms();
        });
    });
  };

  const deleteProject = id => {
    const _id = id;
    axios
      .delete("https://personal-website--backend.herokuapp.com/project", { data: { _id } })
      .then(deletedProject => {
        const deleted = deletedProject.data.data;
        const newProjectsArray = projects.filter(
          project => project._id !== deleted._id
        );
        setProjects(newProjectsArray);
      });
  };

  const clearForms = () => {
    setProjectName("");
    setSubtitle("");
    setTechnologies([]);
    setImageUrl("");
    childRef.current.clearImage();
  };

  const handleSubmit = e => {
    e.preventDefault();
    addProject();
  };

  const handleImageUrl = url => {
    setImageUrl(url);
  };

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

  if(loading) {
    return <div>Loading....</div>
  }

  return (
    <>
      <table style={styles.table}>
        <tr>
          <th style={styles.tableData}>Project Name</th>
          <th style={styles.tableData}>Subtitles</th>
          <th style={styles.tableData}>Technologies</th>
          <th style={styles.tableData}>Project Image</th>
          <th style={styles.tableData}>Options</th>
        </tr>
        {projects ? (
          projects.map(project => {
            return (
              <tr key={project._id}>
                <td style={styles.tableData}>{project.projectName}</td>
                <td style={styles.tableData}>{project.subtitle}</td>
                <td style={styles.tableData}>
                <ol>
                {project.technologies
                  ? project.technologies.map((technology, index) => {
                      return (
                       
                          <li key={index}>{technology}</li>
                        
                      );
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
                      deleteProject(project._id);
                    }}
                  >
                    Delete Project
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <div>None</div>
        )}
      </table>
      <form onSubmit={handleSubmit}>
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
          <ImageViewer handleImageUrl={handleImageUrl} ref={childRef} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
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
