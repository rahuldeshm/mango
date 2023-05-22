import React from "react";
import classes from "./About.module.css";
import Hero from "../../Hero";
import ErrorBoundary from "../../../ui/ErrorBoundary";

function About() {
  return (
    <div className={classes.main}>
      <ErrorBoundary>
        <Hero heroname="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Superman" />
      </ErrorBoundary>
    </div>
  );
}

export default About;
