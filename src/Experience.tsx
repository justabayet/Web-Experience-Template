import { useControls } from 'leva'
import CubeShadered from './CubeShadered'
import Cube from './Cube'


interface ExperienceProps { }

export function Experience({ }: ExperienceProps) {
    const { color } = useControls({
        color: { value: 'white' }
    })

    return (
        <>
            <Cube color={color} />
            <CubeShadered position={[-1.5, 0, 0]} color={color} />

            <spotLight position={[0, 2, 2]} intensity={2} />
            <ambientLight intensity={0.2} />
        </>
    )
}