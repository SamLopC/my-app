'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import { useLoader } from '@react-three/fiber'


export function Galaxy() {
  const shape = useLoader(THREE.TextureLoader, './models/particleShape/1.png')

  const parameters = {
    count: 70000,
    size: 0.01,
    radius: 5,
    branches: 8,
    spin: 1,
    randomness: 0.3,
    randomnessPower: 5,
    stars: 9000,
    starColor: '#1b3984',
    insideColor: '#ff6030',
    outsideColor: '#1b3984',
  }

  const galaxyData = useMemo(() => {
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)

    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)

    for (let i = 0; i < parameters.count; i++) {
      const radius = Math.random() * parameters.radius
      const spinAngle = radius * parameters.spin
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2

      const randomX =
        Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness
      const randomY =
        Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness
      const randomZ =
        Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness

      positions[i * 3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i * 3 + 1] = randomY
      positions[i * 3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      const mixedColor = colorInside.clone()
      mixedColor.lerp(colorOutside, radius / parameters.radius)

      colors[i * 3 + 0] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    return { positions, colors }
  }, [parameters])

  const bgStarsPositions = useMemo(() => {
    const positions = new Float32Array(parameters.stars * 3)

    for (let i = 0; i < parameters.stars; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    return positions
  }, [parameters.stars])

  const galaxyPoints = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(galaxyData.positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(galaxyData.colors, 3))
    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      transparent: true,
      alphaMap: shape,
      alphaTest: 0.001,
    })
    return new THREE.Points(geometry, material)
  }, [galaxyData, parameters.size, shape])

  const bgStars = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(bgStarsPositions, 3))
    const material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: parameters.starColor,
      transparent: true,
      alphaMap: shape,
      alphaTest: 0.001,
    })
    return new THREE.Points(geometry, material)
  }, [bgStarsPositions, parameters.size, parameters.starColor, shape])

  // Rotate the galaxy around the Y-axis only
  useFrame(() => {
    galaxyPoints.rotation.y += 0.001
    bgStars.rotation.y += 0.0001
  })

  return (
    <>
      <primitive object={bgStars} />
      <primitive object={galaxyPoints} />
    </>
  )
}

