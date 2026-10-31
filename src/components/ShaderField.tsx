"use client";

import { useState } from "react";
import { Shader, MeshGradient, RadialGradient } from "shaders/react";

export default function ShaderField() {
  const [ready, setReady] = useState(false);
  return <Shader className="hero-aura-canvas" colorSpace="srgb" toneMapping="linear"
    style={{ width: "100%", height: "100%", opacity: ready ? 1 : 0 }}
    onReady={() => setReady(true)} onUnavailable={() => setReady(false)} disableTelemetry>
    <MeshGradient stops={null} colorA="#FFF5DF" colorB="#F4E5C7" count={3} smoothness={3}
      variation={0.08} swirl={0} drift={0.12} wrapping={0} speed={0.025} seed={12} />
    <RadialGradient stops={null} colorA="#C69A57" colorB="#FFF5DF" center={{ x: 0.78, y: 0.28 }}
      radius={0.72} aspect={0.7} opacity={0.12} />
  </Shader>;
}
