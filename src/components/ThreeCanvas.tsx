'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import ObjModel from './ObjModel'

export default function ThreeCanvas() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ObjModel path="/models/White Mesh (1).obj" />
      <OrbitControls />
    </Canvas>
  )
}
