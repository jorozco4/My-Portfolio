import React from "react";
import Aurora from "../../img/Aurora.png";
import SocialFollow from "../../components/SocialFollow";
import "../../App.css";

export default function Home() {
  return (
    <>
      <div>
        <img src={Aurora} alt="Aurora" width="100%" height="100%" />
        <h2>
          <span>Let The Journey Begin</span>
        </h2>

        <div />
        <SocialFollow />
      </div>
    </>
  );
}
