import React, { useState } from "react";
import withRequest from "../HOC/withRequest.js";

import { Loading } from "./Loading";
import { Error } from "./Error";

const Education = ({
  status,
  error,
  loading,
  data,
  handleAdd,
  handleDelete,
  handleUpdate,
  imageView
}) => {
  const [name, setName] = useState("");
  const [courseWorks, setCourseWorks] = useState([]);
  const [gpa, setGPA] = useState("");
  const [percentage, setPercentage] = useState("");

  const newValues = {
    name,
    courseWork: courseWorks,
    gpa,
    percentage
  };

  const clearForms = () => {
    setName("");
    setGPA("");
    setPercentage("");
    setCourseWorks([]);
  };

  const onAdd = () => {
    const newArray = [...courseWorks, ""];
    setCourseWorks(newArray);
  };

  const onDelete = index => {
    const newArray = [
      ...courseWorks.slice(0, index),
      ...courseWorks.slice(index + 1)
    ];
    setCourseWorks(newArray);
  };

  const handleChange = (index, value) => {
    const newArray = courseWorks.slice(0);
    newArray[index] = value;
    setCourseWorks(newArray);
  };

  const renderUI = educations => {
    return (
      <>
      <header>
        EDUCATION
      </header>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableData}>Institution Name</th>
              <th style={styles.tableData}>GPA/Percentage</th>
              <th style={styles.tableData}>Courseworks</th>
              <th style={styles.tableData}>Institute Image</th>
              <th style={styles.tableData}>Options</th>
            </tr>
          </thead>
          <tbody>
            {educations && educations.length ? (
              educations.map(education => {
                return (
                  <tr key={education._id}>
                    <td style={styles.tableData}>{education.name}</td>
                    <td style={styles.tableData}>
                      {education.gpa ? education.gpa : education.percentage}
                    </td>
                    <td style={styles.tableData}>
                      <ol>
                        {education.courseWork
                          ? education.courseWork.map((course, index) => {
                              return <li key={index}>{course}</li>;
                            })
                          : "N/A"}
                      </ol>
                    </td>
                    {education.educationImage ? (
                      <td style={styles.tableData}>
                        <img
                          src={education.educationImage}
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
                          handleDelete(education._id);
                        }}
                      >
                        Delete Education
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Education</td>
              </tr>
            )}
          </tbody>
        </table>
        <form>
          <div style={styles.form}>
            Institute Name:
            <input
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            Courseworks:
            {courseWorks.map((courseWork, index) => {
              return (
                <div key={index}>
                  <input
                    name={courseWork}
                    value={courseWork}
                    onChange={e => handleChange(index, e.target.value)}
                  />
                  <span onClick={() => onDelete(index)}>x</span>
                </div>
              );
            })}
            <button type="button" onClick={() => onAdd()}>
              Add
            </button>
            GPA:
            <input
              name="gpa"
              value={gpa}
              onChange={e => setGPA(e.target.value)}
              required
            />
            Percentage:
            <input
              name="percentage"
              value={percentage}
              onChange={e => setPercentage(e.target.value)}
              required
            />
            Project Image :{imageView}
            <button type="button" onClick={() => { handleAdd(newValues); clearForms()}}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  };

  switch (status) {
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
    case "data":
      return renderUI(data);
  }
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

export default withRequest(Education, "education");
