'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

// Component for individual green circles
function GreenCircle({ position, mousePosition }: { position: [number, number, number], mousePosition: THREE.Vector3 }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      // Calculate distance from mouse position
      const distance = meshRef.current.position.distanceTo(mousePosition)
      
      // Scale based on distance from mouse
      const scale = Math.max(1, 3 - distance * 0.3)
      meshRef.current.scale.setScalar(scale)
      
      // Rotate the circle
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      
      // Add subtle floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.001
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.8, 16, 16]} />
      <meshBasicMaterial 
        color={hovered ? "#00ff88" : "#00ff44"} 
        transparent 
        opacity={0.9}
      />
    </mesh>
  )
}

// Component for the particle system
function ParticleSystem() {
  const { camera } = useThree()
  const [mousePosition, setMousePosition] = useState(new THREE.Vector3())
  
  // Generate random positions for circles - positioned in front of camera
  const circles = Array.from({ length: 20 }, () => [
    (Math.random() - 0.5) * 10, // x
    (Math.random() - 0.5) * 10, // y  
    Math.random() * 5 - 8       // z - positioned in front of camera (negative z)
  ] as [number, number, number])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to 3D world coordinates
      const mouse = new THREE.Vector3()
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      mouse.z = 0.5
      
      mouse.unproject(camera)
      mouse.multiplyScalar(10)
      setMousePosition(mouse)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [camera])

  return (
    <group>
      {circles.map((position, index) => (
        <GreenCircle 
          key={index} 
          position={position} 
          mousePosition={mousePosition}
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
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleSystem />
      </Canvas>
    </div>
  )
} 