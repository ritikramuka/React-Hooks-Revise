import React, { useLayoutEffect, useEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("hello from useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("hello from useLayoutEffect");
  }, []);
  return <h1>Open Inspect Element's, console</h1>;
};

export default UseLayoutEffect;
