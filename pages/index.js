import React, { Component, useEffect, useState } from "react";
import Image from "next/image";

import api from "./api";
//import images from "./images";
//import bannerTopo from "../images/BBQ-TOPO.png";

export default function Home() {
  var [stepone, setStepone] = useState(false);

  useEffect(() => {
    async function loadGame() {
      try {
        const res = await api.get(`/`);
        console.log(res);
      } catch {
        console.log("Server Loading");
      }
    }

    loadGame();
  }, []);

  if (stepone === false) {
    return (
      <>
        <div class="container">
          <div class="topo">
            <Image
              src="../images/BBQ-TOPO.png"
              alt="BBQ"
              width="100%"
              height="10%"
            />
          </div>
          <h2>STEP 1</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="container">
          <h2>STEP 2</h2>
        </div>
      </>
    );
  }
}
