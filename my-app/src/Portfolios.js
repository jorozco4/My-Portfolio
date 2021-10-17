import React, { Component } from "react";
import PORTFOLIO from "./components/pages/Portfolio";

class Portfolio extends Component {
  render() {
    const { title, image, description, link } = this.props.portfolio;
    return (
      <div style={{ display: "inline-block", width: 300, margin: 10 }}>
        <h2>{title}</h2>
        <img src={image} alt="portfolio" style={{ width: 200, height: 120 }} />
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    );
  }
}
class Portfolios extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PORTFOLIO.map((PORTFOLIO) => {
            return <Portfolio key={PORTFOLIO.id} portfolio={PORTFOLIO} />;
          })}
        </div>
      </div>
    );
  }
}
export default Portfolios;
