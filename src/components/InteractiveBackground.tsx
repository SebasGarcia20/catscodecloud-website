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
      // Smooth continuous movement with parallax effect
      meshRef.current.position.x += direction[0] * speed * 0.005
      meshRef.current.position.y += direction[1] * speed * 0.005
      meshRef.current.position.z += direction[2] * speed * 0.005
      
      // Parallax effect based on scroll
      const scrollY = window.scrollY || 0
      meshRef.current.position.y += Math.sin(scrollY * 0.001 + position[0]) * 0.1
      
      // Reset position when particle goes too far
      if (meshRef.current.position.x > 20) meshRef.current.position.x = -20
      if (meshRef.current.position.x < -20) meshRef.current.position.x = 20
      if (meshRef.current.position.y > 20) meshRef.current.position.y = -20
      if (meshRef.current.position.y < -20) meshRef.current.position.y = 20
      if (meshRef.current.position.z > 10) meshRef.current.position.z = -20
      if (meshRef.current.position.z < -20) meshRef.current.position.z = 10
      
      // Smooth rotation with varying speeds
      meshRef.current.rotation.x += 0.001 * speed
      meshRef.current.rotation.y += 0.001 * speed
      
      // Gentle floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.0005
      
      // Subtle scaling based on position
      const scale = 0.2 + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.05
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.2, 8, 8]} />
      <meshBasicMaterial 
        color="#2dd4bf" 
        transparent 
        opacity={0.3}
      />
    </mesh>
  )
}

// Component for the particle system
function ParticleSystem() {
  // Generate particles with random positions, speeds, and directions
  const particles = Array.from({ length: 60 }, () => {
    const speed = Math.random() * 0.8 + 0.3 // Random speed between 0.3 and 1.1
    const direction = [
      (Math.random() - 0.5) * 2, // x direction
      (Math.random() - 0.5) * 2, // y direction
      (Math.random() - 0.5) * 2  // z direction
    ] as [number, number, number]
    
    return {
      position: [
        (Math.random() - 0.5) * 30, // x
        (Math.random() - 0.5) * 30, // y  
        Math.random() * 15 - 20     // z
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
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <ParticleSystem />
      </Canvas>
    </div>
  )
} 