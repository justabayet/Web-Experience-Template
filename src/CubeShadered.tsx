import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame, extend, ThreeElement, ThreeElements } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

const CubeShaderedMaterial = shaderMaterial(
    { uTime: 0, uColor: new THREE.Color('hotpink') },
    `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
        float pulse = 0.5 + 0.5 * sin(uTime + vUv.x * 10.0);
        gl_FragColor = vec4(uColor * pulse, 1.0);
    }
    `
)

extend({ CubeShaderedMaterial })

declare module '@react-three/fiber' {
    interface ThreeElements {
        cubeShaderedMaterial: ThreeElement<typeof CubeShaderedMaterial>
    }
}

type CubeShaderedProps = ThreeElements['mesh'] & {
    color?: string
}

export default function CubeShadered({ color = 'orange', ...props }: CubeShaderedProps) {
    const materialRef = useRef<any>(null)

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uTime = state.clock.elapsedTime
        }
    })

    return (
        <mesh {...props}>
            <boxGeometry args={[1, 1, 1]} />
            <cubeShaderedMaterial ref={materialRef} uColor={new THREE.Color(color)} />
        </mesh>
    )
}