import React from "react";
import classes from "./About.module.css";
import Hero from "../../ErrorHandlings/Hero";
import ErrorBoundary from "../../ErrorHandlings/ErrorBoundary";

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
