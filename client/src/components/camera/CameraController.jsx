import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function CameraController() {
    const  { camera } = useThree();

    useEffect(()=>{
        //Initial camera position:
        camera.position.set(24,6,12);

        //Look at the center of the tree:
        camera.lookAt(0, 3, 0);

        camera.updateProjectionMatrix();
    }, [camera]);
    return null;
}
export default CameraController;