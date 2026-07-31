function Branch({
    position = [0, 3, 0],
    rotation = [0, 0, 0],
    length = 2.5,
    children
}) {
    return (
        <group position={position} rotation={rotation}>
            <mesh>
                <cylinderGeometry args={[0.08, 0.12, length, 12]} />
                <meshStandardMaterial color='#6B4423' />
            </mesh>
            <group position={[0, length-1.5, 0]}>
                { children }
            </group>
        </group>
    )
}
export default Branch;