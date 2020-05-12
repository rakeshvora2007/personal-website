import React, { useState } from "react";
import withRequest from "../HOC/withRequest.js";

import { Loading } from "../Reusables/Loading.jsx";
import { Error } from "./Error";

const Work = ({
  status,
  error,
  loading,
  data,
  handleAdd,
  handleDelete,
  handleUpdate,
  imageView
}) => {
  const [companyName, setCompanyName] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [designation, setDesignation] = useState("");

  const newValues = {
    companyName,
    responsibilities,
    designation
  };

  const clearForms = () => {
    setCompanyName("");
    setDesignation("");
    setResponsibilities([]);
  };

  const onAdd = () => {
    const newArray = [...responsibilities, ""];
    setResponsibilities(newArray);
  };

  const onDelete = index => {
    const newArray = [
      ...responsibilities.slice(0, index),
      ...responsibilities.slice(index + 1)
    ];
    setResponsibilities(newArray);
  };

  const handleChange = (index, value) => {
    const newArray = responsibilities.slice(0);
    newArray[index] = value;
    setResponsibilities(newArray);
  };

  const renderUI = works => {
    return (
      <>
      <header>
          <div className="container clearfix">
            <h1 id="logo">WORK EXPERIENCE</h1>
          </div>
        </header>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableData}>Company Name</th>
              <th style={styles.tableData}>Designation</th>
              <th style={styles.tableData}>Responsibilities</th>
              <th style={styles.tableData}>Company Image</th>
              <th style={styles.tableData}>Options</th>
            </tr>
          </thead>
          <tbody>
            {works && works.length ? (
              works.map(work => {
                return (
                  <tr key={work._id}>
                    <td style={styles.tableData}>{work.companyName}</td>
                    <td style={styles.tableData}>{work.designation}</td>
                    <td style={styles.tableData}>
                      <ol>
                        {work.responsibilities ? (
                          work.responsibilities.map((responsibilty, index) => {
                            return <li key={index}>{responsibilty}</li>;
                          })
                        ) : (
                          <td>N/A</td>
                        )}
                      </ol>
                    </td>
                    {work.workImage ? (
                      <td style={styles.tableData}>
                        <img
                          src={work.workImage}
                          height="100px"
                          width="100px"
                        />
                      </td>
                    ) : (
                      <td>N/A</td>
                    )}
                    <td style={styles.tableData}>
                      <button
                        onClick={() => {
                          handleDelete(work._id);
                        }}
                      >
                        Delete WorkEx
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Work Experience</td>
              </tr>
            )}
          </tbody>
        </table>
        <form>
          <div style={styles.form}>
            Company Name:
            <input
              name="companyName"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              required
            />
            Designation:
            <input
              name="designation"
              value={designation}
              onChange={e => setDesignation(e.target.value)}
              required
            />
            Responsibilities:
            {responsibilities.map((responsibilty, index) => {
              return (
                <div key={index}>
                  <input
                    name={responsibilty}
                    value={responsibilty}
                    onChange={e => handleChange(index, e.target.value)}
                  />
                  <span onClick={() => onDelete(index)}>x</span>
                </div>
              );
            })}
            <button type="button" onClick={() => onAdd()}>
              Add
            </button>
            Work Image :{imageView}
            <button
              type="button"
              onClick={() => {
                handleAdd(newValues);
                clearForms();
              }}
            >
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
      console.log(error);
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

export default withRequest(Work, "work");
