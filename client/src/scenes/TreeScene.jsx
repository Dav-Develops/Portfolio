import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Tree from "../components/Tree/Tree";
import Island from "../components/World/Island";
import CameraController from "../components/Camera/CameraController";
import { Camera } from "three";
import CameraRig from "../components/camera/CameraRig";
function TreeScene() {
    return (
        <Canvas
            camera={{ position: [1, 4, 10], fov: 45 }}
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        >
            <CameraController />
             <CameraRig />
            <Environment
                files="/hdri/meadow_2_2k.hdr"
                background
            />
            {/* <GrassIsland /> */}
            <Island
                // position={[40, 10, 45]}
                // scale={5000}
                position={[0, -43, 20]}
                scale={5}
            />
            <Tree />

            <OrbitControls
                target0={[0, 3, 0]}
                enablePan={true}
                enableRotate={true}
                enableZoom={true}
                minDistance={90}
                maxDistance={150} 
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}/>
        </Canvas>
    );
}

export default TreeScene;