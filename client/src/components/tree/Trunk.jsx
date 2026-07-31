function Trunk() {
    return (
        <mesh position={[0, 1.5, 0]}>
            {/* Tree Trunk */}
            <cylinderGeometry args={[0.25, 0.35, 3, 16]} />
            <meshStandardMaterial color='#6B4423' />
        </mesh>

    )
}
export default Trunk;