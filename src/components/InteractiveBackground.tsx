'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

// Component for individual animated particles
function AnimatedParticle({ position, speed, direction }: { 
  position: [number, number, number], 
  speed: number,
  direction: [number, number, number]
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialPosition = useRef(new THREE.Vector3(...position))

  useFrame((state) => {
    if (meshRef.current) {
      // Slow continuous movement
      meshRef.current.position.x += direction[0] * speed * 0.01
      meshRef.current.position.y += direction[1] * speed * 0.01
      meshRef.current.position.z += direction[2] * speed * 0.01
      
      // Reset position when particle goes too far
      if (meshRef.current.position.x > 15) meshRef.current.position.x = -15
      if (meshRef.current.position.x < -15) meshRef.current.position.x = 15
      if (meshRef.current.position.y > 15) meshRef.current.position.y = -15
      if (meshRef.current.position.y < -15) meshRef.current.position.y = 15
      if (meshRef.current.position.z > 5) meshRef.current.position.z = -15
      if (meshRef.current.position.z < -15) meshRef.current.position.z = 5
      
      // Subtle rotation
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.002
      
      // Gentle floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.001
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 8, 8]} />
      <meshBasicMaterial 
        color="#00ff44" 
        transparent 
        opacity={0.4}
      />
    </mesh>
  )
}

// Component for the particle system
function ParticleSystem() {
  // Generate particles with random positions, speeds, and directions
  const particles = Array.from({ length: 40 }, () => {
    const speed = Math.random() * 0.5 + 0.2 // Random speed between 0.2 and 0.7
    const direction = [
      (Math.random() - 0.5) * 2, // x direction
      (Math.random() - 0.5) * 2, // y direction
      (Math.random() - 0.5) * 2  // z direction
    ] as [number, number, number]
    
    return {
      position: [
        (Math.random() - 0.5) * 20, // x
        (Math.random() - 0.5) * 20, // y  
        Math.random() * 10 - 15     // z
      ] as [number, number, number],
      speed,
      direction
    }
  })

  return (
    <group>
      {particles.map((particle, index) => (
        <AnimatedParticle 
          key={index} 
          position={particle.position}
          speed={particle.speed}
          direction={particle.direction}
        />
      ))}
    </group>
  )
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        style={{ background: 'black' }}
      >
        <ambientLight intensity={0.8} />
        <ParticleSystem />
      </Canvas>
    </div>
  )
} 