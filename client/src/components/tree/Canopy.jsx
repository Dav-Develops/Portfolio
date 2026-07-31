function Canopy() {
    return (
        <mesh position={[0, 3.7, 0]}>
            {/* Leaves */}
            <sphereGeometry args={[1.0, 16, 16]} />
            <meshStandardMaterial color='#2E8B57' />
        </mesh>
    )
}
export default Canopy;