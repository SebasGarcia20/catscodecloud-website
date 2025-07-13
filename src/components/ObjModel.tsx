'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { Mesh } from 'three'

export default function ObjModel({ path }: { path: string }) {
  const obj = useLoader(OBJLoader, path)

  return <primitive object={obj} />
}
