import React, { useEffect, useState } from "react";

export const withLogging = WrappedComponent => props => {
  useEffect(() => {
    console.log("Logging started");
  }, []);

  return <WrappedComponent {...props} />;
};
