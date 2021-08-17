import React from "react";
// import { Generator } from "webpack";
import Homies from "../../img/Homies.png";
import SneakerHype from "../../img/SneakerHype.png";
import Password from "../../img/Password-Generator.png";
import WorkDayScheduler from "../../img/Work-Day-Scheduler.png";
import NoteTaker from "../../img/NoteTaker.png";
import SocialFollow from "../../components/SocialFollow";
import IntelConnections from "../../img/IntelConnections.png";

const styles = {
  card: {
    background: "#D3D3D3",
    // width: "100%",
    height: "100%",
  },
  font: {
    color: "white",
  },
};

const Portfolio = () => {
  return (
    <>
      <section style={styles.card}>
        <div className="container" style={styles.card}>
          <div className="col-2" style={styles.card}>
            <h1 id="section-title" style={styles.font}>
              Projects/Activities
            </h1>
          </div>
          <div className="row" style={styles.card}>
            <div
              className="col-sm-12 col-md-4 porfolio-item--card"
              style={styles.card}
            >
              <div className="portfolio-item--title" style={styles.font}>
                Homies
              </div>
              <a href="https://tsilvab.github.io/Homies/">
                <img src={Homies} alt="Homies" width="193" height="130" />
              </a>
            </div>
            <div className="col-sm-12 col-md-4 porfolio-item--card">
              <div className="portfolio-item--title" style={styles.font}>
                Sneaker-Hype
              </div>
              <a href="https://sneakerhype.herokuapp.com/">
                <img
                  src={SneakerHype}
                  alt="SneakerHype"
                  width="193"
                  height="130"
                />
              </a>
            </div>
            <div className="col-sm-12 col-md-4 porfolio-item--card">
              <div className="portfolio-item--title" style={styles.font}>
                Intel-Connections
              </div>
              <a href="https://secure-lowlands-30336.herokuapp.com/">
                <img
                  src={IntelConnections}
                  alt="IntelConnections"
                  width="193"
                  height="130"
                />
              </a>
            </div>
            <div className="col-sm-12 col-md-4 porfolio-item--card">
              <div className="portfolio-item--title" style={styles.font}>
                Password-Generator
              </div>
              <a href="https://jorozco4.github.io/Homework-3/">
                <img src={Password} alt="Password" width="193" height="130" />
              </a>
            </div>
            <div className="col-sm-12 col-md-4 porfolio-item--card">
              <div className="portfolio-item--title" style={styles.font}>
                Work-Day-Schedule
              </div>
              <a href="https://jorozco4.github.io/Homework5/">
                <img
                  src={WorkDayScheduler}
                  alt="WorkDayScheduler"
                  width="193"
                  height="130"
                />
              </a>
            </div>
            <div className="col-sm-12 col-md-4 porfolio-item--card">
              <div className="portfolio-item--title" style={styles.font}>
                Note-Taker
              </div>
              <a href="https://hidden-ocean-60791.herokuapp.com/">
                <img src={NoteTaker} alt="NoteTaker" width="193" height="130" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div />
      <SocialFollow />
    </>
  );
};

export default Portfolio;
