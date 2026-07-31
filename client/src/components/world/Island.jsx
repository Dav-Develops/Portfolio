import { useGLTF } from "@react-three/drei";

function Island(props) {
    const { scene } = useGLTF("/models/island_red_sky.glb");
//     scene.traverse((child) => {
//     if (child.isMesh) {
//         child.material.transparent = false;
//         child.material.depthWrite = true;
//         child.material.depthTest = true;
//     }
// });
//enbaling this: distorts the background mountains like 2d mountains.

    return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/island_red_sky.glb");

export default Island;