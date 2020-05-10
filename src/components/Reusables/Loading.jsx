import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

export const Loading = () => {
  return (
    <div className="sweet-loading">
      <BeatLoader
        css={override}
        size={80}
        loading={true}
      />
    </div>
  );
};

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  width: 800px;
  text-align: center;
  margin: 20px auto;
  padding: 50px; 
  border-color: red;
`;
