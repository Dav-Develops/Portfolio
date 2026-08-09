import { useGLTF } from "@react-three/drei";

function Island(props) {
    const { scene } = useGLTF("/models/island_red_sky.glb");

    return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/island_red_sky.glb");

export default Island;