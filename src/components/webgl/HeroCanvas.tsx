"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Flowing fbm "aurora" plasma in near-black with neon + violet accents.
const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uMouse;
  uniform vec2  uRes;
  uniform vec3  uNeon;
  uniform vec3  uViolet;

  // hash / noise / fbm
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p); vec2 f = fract(p);
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(hash(i+vec2(0,0)), hash(i+vec2(1,0)), u.x),
               mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0; float a = 0.5;
    for(int i=0;i<5;i++){ v += a*noise(p); p*=2.0; a*=0.5; }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = (uv - 0.5) * vec2(uRes.x/uRes.y, 1.0);

    float t = uTime * 0.06;
    vec2 m = (uMouse - 0.5) * 0.6;

    // domain-warped fbm
    vec2 q = vec2(fbm(p*1.6 + t), fbm(p*1.6 - t + 4.0));
    vec2 r = vec2(fbm(p*2.2 + q + m + 1.7 + t),
                  fbm(p*2.2 + q - m + 9.2 - t));
    float f = fbm(p*2.6 + r);

    float aurora = smoothstep(0.35, 0.95, f);
    float band = smoothstep(0.55, 0.9, fbm(p*3.0 + r*1.5 - t*2.0));

    vec3 col = vec3(0.03, 0.03, 0.045);
    col = mix(col, uViolet, aurora * 0.55);
    col += uNeon * band * 0.5;

    // vignette
    float d = length(uv - 0.5);
    col *= smoothstep(0.95, 0.25, d);

    // subtle grain
    col += (hash(uv * uTime) - 0.5) * 0.025;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function Plasma() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));
  const target = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uRes: { value: new THREE.Vector2(size.width, size.height) },
      uNeon: { value: new THREE.Color("#ccff00") },
      uViolet: { value: new THREE.Color("#7c6ff0") },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state, delta) => {
    if (!mat.current) return;
    const p = state.pointer; // -1..1
    target.current.set((p.x + 1) / 2, (p.y + 1) / 2);
    mouse.current.lerp(target.current, 0.05);
    uniforms.uTime.value += delta;
    uniforms.uMouse.value.copy(mouse.current);
    uniforms.uRes.value.set(size.width, size.height);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.75]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 1] }}
    >
      <Plasma />
    </Canvas>
  );
}
