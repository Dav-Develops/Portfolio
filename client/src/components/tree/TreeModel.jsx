import { useGLTF } from "@react-three/drei";

function TreeModel(props) {
    const { scene } = useGLTF("/models/PortfolioTree.glb");

    scene.traverse((child) => {
        if (child.isMesh) {
            child.material.transparent = false;
            child.material.depthWrite = true;
            child.material.depthTest = true;
        }
    });

    return <primitive object={scene} {...props} />;
}
useGLTF.preload("models/PortfolioTree2.glb");

export default TreeModel;