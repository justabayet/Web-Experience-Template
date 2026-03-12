import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei'

import { Experience } from './Experience'

import './App.css'

export default function App() {

    return (
        <div style={{ width: '100vw', height: '100dvh', background: '#000' }}>
            <div className="overlay-container">
                <div className={`overlay-text selected`}>OVERLAY</div>
            </div>


            <Canvas camera={{ fov: 70, position: [2, 2, 3] }} >
                <Stats />

                <OrbitControls />

                <Experience />
            </Canvas>
        </div >
    )
}