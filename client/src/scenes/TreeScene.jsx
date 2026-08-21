import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Tree from "../components/Tree/Tree";
import Island from "../components/World/Island";
import CameraController from "../components/camera/CameraController";
// import { Camera } from "three";
import CameraRig from "../components/camera/CameraRig";
function TreeScene() {
    useEffect(()=>{
        console.log("TreeScene Mount");
        return ()=>{console.log("TreeScene Unmount");}
    },[]);
    return (
        <Canvas
            camera={{ position: [0, 8, 25], fov: 45 }}
            style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
            }}>
            {/* Visualize axis */}
            {/* <axesHelper args={[20]} /> */}
            <CameraController />
             <CameraRig />
            <Environment
                files="/hdri/meadow_2_2k.hdr"
                background />
           
            <Island position={[0, -43, 20]}rotation={[0, -0.3, 0]}scale={5} />
            <Tree />

            <OrbitControls
                target0={[0, 3, 0]}
                enablePan={true}
                enableRotate={true}
                enableZoom={true}
                minDistance={90}
                maxDistance={160} 
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            />
        </Canvas>
    );
}

export default TreeScene;