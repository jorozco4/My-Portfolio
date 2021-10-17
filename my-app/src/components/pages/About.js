import React from "react";

import Self from "../../img/cool.png";

import SocialFollow from "../../components/SocialFollow";

const styles = {
  card: {
    background: "#D3D3D3",
    height: "100%",
  },

  font: {
    color: "white",
  },
};

export default function About() {
  return (
    <>
      <section className="section" style={styles.card}>
        <h2 style={styles.font}>About me</h2>

        <img src={Self} alt="Self" width="300" height="200" />

        <p style={styles.font}>
          I am a professional pivoting to a software development role. Detail
          oriented team leader with over 12 years of work experience cultivating
          strategic relationships with cross-functional internal and external
          clients in diverse environments. Self-motivated team player with
          proven success managing multiple simultaneous projects and tasks.
          Highly disciplined quick learner and analytical problem-solver with
          exceptional interpersonal, organizational and communication skills.
        </p>
      </section>
      <div />
      <SocialFollow />
    </>
  );
}
