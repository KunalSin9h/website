"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

export default function TiltBox(props: any) {
  return (
    <div>
      <Tilt
        glareEnable={true}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareMaxOpacity={0.2}
        glareBorderRadius="10px"
        scale={1.02}
      >
        {props.children}
      </Tilt>
    </div>
  );
}
