import React from "react";
import Aurora from "../../img/Aurora.png";
import SocialFollow from "../../components/SocialFollow";
import "../../App.css";

export default function Home() {
  return (
    <>
      <div>
        <img src={Aurora} alt="Aurora" width="100%" height="100%" />
        <figcaption>Let The Journey Begin</figcaption>

        <div />
        <SocialFollow />
      </div>
    </>
  );
}
