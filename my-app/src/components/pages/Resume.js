import React from "react";
import Resume from "../../img/Jesse_Orozco_Resume.png";

// import Page from "../styles/resume.css";
import SocialFollow from "../../components/SocialFollow";

const styles = {
  card: {
    background: "#D3D3D3",
    width: "100%",
    height: "100%",
  },
  font: {
    color: "white",
  },
};

function Resumes() {
  return (
    <>
      <section class="container" id="resume" style={styles.card}>
        <h1 class="self-resume" style={styles.font}>
          Resume
        </h1>
        <img
          src={Resume}
          alt="Resume"
          width="193"
          height="150"
          style={styles.card}
        />

        {/* <button className="button">
            <a
              className="button"
              href="../img/Jesse_Orozco_Software_Developer_2021.pdf"
              download="jesse-martines-resume-2021"
            >
              Download Resume
            </a>
          </button> */}
        <button>
          <a
            href="Jesse_Orozco_Resume.pdf"
            download="Jesse_Orozco_Resume.pdf"
            class="btn btn-primary btn-lg"
          >
            Download my Resume!
          </a>
        </button>
      </section>
      <div />
      <SocialFollow />
    </>
  );
}

export default Resumes;
