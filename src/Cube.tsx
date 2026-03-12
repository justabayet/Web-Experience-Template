import { ThreeElements } from "@react-three/fiber"

type CubeProps = ThreeElements['mesh'] & {
    color?: string
}

export default function Cube({ color, ...props }: CubeProps) {
    return (
        <mesh {...props}>
            <boxGeometry />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}