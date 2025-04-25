"use client"

import { useEffect, useRef, useState } from "react"
import { Color } from "three"
import ThreeGlobe from "three-globe"
import { useThree, Canvas, extend } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import countries from "@/data/globe.json"

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & {
      new (): ThreeGlobe
    }
  }
}

extend({ ThreeGlobe: ThreeGlobe })

const RING_PROPAGATION_SPEED = 3
const aspect = 1.2
const cameraZ = 300

type Position = {
  order: number
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  arcAlt: number
  color: string
}

export type GlobeConfig = {
  pointSize?: number
  globeColor?: string
  showAtmosphere?: boolean
  atmosphereColor?: string
  atmosphereAltitude?: number
  emissive?: string
  emissiveIntensity?: number
  shininess?: number
  polygonColor?: string
  ambientLight?: string
  directionalLeftLight?: string
  directionalTopLight?: string
  pointLight?: string
  arcTime?: number
  arcLength?: number
  rings?: number
  maxRings?: number
  initialPosition?: {
    lat: number
    lng: number
  }
  autoRotate?: boolean
  autoRotateSpeed?: number
}

interface WorldProps {
  globeConfig: GlobeConfig
  data: Position[]
}

export function Globe({ globeConfig, data }: WorldProps) {
  return (
    <Canvas camera={{ position: [0, 0, 300], fov: 35 }} style={{ background: 'transparent', width: '100%', height: '100%' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        {/* Placeholder for the globe mesh, replace with your Three.js globe logic */}
        <sphereGeometry args={[100, 64, 64]} />
        <meshStandardMaterial color={globeConfig?.globeColor || '#1a2236'} />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate={globeConfig?.autoRotate} autoRotateSpeed={globeConfig?.autoRotateSpeed || 0.5} />
    </Canvas>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree()

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio)
    gl.setSize(size.width, size.height)
    gl.setClearColor(0xffaaff, 0)
  }, [gl, size])

  return null
}

function DirectionalLight(props: { color?: string; position: [number, number, number] }) {
  return <directionalLight color={props.color} position={props.position} />
}

function PointLight(props: { color?: string; position: [number, number, number]; intensity?: number }) {
  return <pointLight color={props.color} position={props.position} intensity={props.intensity} />
}

export function World(props: WorldProps) {
  const { globeConfig } = props

  return (
    <Canvas camera={{ position: [0, 0, cameraZ], fov: 50, aspect, near: 180, far: 1800 }}>
      <WebGLRendererConfig />
      <fog attach="fog" args={["#ffffff", 400, 2000]} />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <DirectionalLight color={globeConfig.directionalLeftLight} position={[-400, 100, 400]} />
      <DirectionalLight color={globeConfig.directionalTopLight} position={[-200, 500, 200]} />
      <PointLight color={globeConfig.pointLight} position={[-200, 500, 200]} intensity={0.8} />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  )
}

export function hexToRgb(hex: string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = []
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min
    if (arr.indexOf(r) === -1) arr.push(r)
  }

  return arr
}
