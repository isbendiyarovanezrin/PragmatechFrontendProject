import React from "react";
import Icon from "./Icon";
import { useLocation } from "react-router-dom";

function About() {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="about-page text-lime-600 flex items-center justify-center mt-3">
      <p>About page</p>
      <Icon />
    </section>
  );
}

export default About;
