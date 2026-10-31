"use client";

import { Satin, Shader } from "shaders/react";

export default function RibbonShader() {
  return <Shader disableTelemetry style={{ width: "100%", height: "100%" }}>
    <Satin color="#7A2435" highlightColor="#E8DCC8" foldCount={5} foldDirection={15} foldDepth={.55} foldWidth={.2} pinning={.2} speed={.35} breeze={.12} gloss={.22} anisotropy={.8} bloom={.35} sheen={.5} weave={.14} fiberAngle={15} fill={.35} />
  </Shader>;
}
