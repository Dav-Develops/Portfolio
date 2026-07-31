function Ground() {
    return (
        <mesh
            position={[0, -0.05, 0]}
            rotation={[-Math.PI / 2, 0, 0]}>
            {/* Ground */}

            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color='#4CAF50' />
        </mesh>
    )
}
export default Ground;