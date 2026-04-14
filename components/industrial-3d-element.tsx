"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PresentationControls, Float } from "@react-three/drei"
import * as THREE from "three"

// A custom metallic geometric shape representing industrial process / flow
function ProcessTorus() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.1
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <group ref={meshRef} scale={0.9} position={[0, 0, 0]}>
      {/* Central Abstract Flow (Torus Knot) */}
      <mesh>
        <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.9}
          roughness={0.15}
          envMapIntensity={2}
        />
      </mesh>

      {/* Orbiting Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.2}>
        <torusGeometry args={[2.2, 0.05, 32, 100]} />
        <meshStandardMaterial color="#f97316" metalness={0.8} roughness={0.2} emissive="#ea580c" emissiveIntensity={0.5} />
      </mesh>

      {/* Orbiting Ring 2 */}
      <mesh rotation={[0, Math.PI / 4, 0]} scale={1.1}>
        <torusGeometry args={[2.6, 0.03, 32, 100]} />
        <meshStandardMaterial color="#888888" metalness={1} roughness={0.1} />
      </mesh>
    </group>
  )
}

export function Industrial3DElement() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#f97316" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
      
      {/* City environment maps well to metallic reflections for an industrial look */}
      <Environment preset="city" />

      <PresentationControls
        global
        snap
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <ProcessTorus />
        </Float>
      </PresentationControls>
    </Canvas>
  )
}
