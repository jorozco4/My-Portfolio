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
        <a>
          <img src={Self} alt="Self" width="193" height="130" />
        </a>
        <p style={styles.font}>
          Present criminal law and society graduate with over 10 years of work
          experience cultivating strategic relationships with cross-functional
          internal and external clients in diverse environments. During my free
          time I like to hike, bike, kayak, and fish. These activites keep me
          going throughout the busy work week. My future goal is to become a
          software developer and be able to enhanced my learning from buildings
          projects.
        </p>
      </section>
      <div />
      <SocialFollow />
    </>
  );
}
