import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function CameraController() {
    const { camera } = useThree();

    useEffect(() => {
        // Initial camera position
        camera.position.set(1, 4, 10);

        // Point camera toward the tree
        camera.lookAt(0, 3, 0);

        camera.updateProjectionMatrix();
    }, [camera]);

    return null;
}

export default CameraController;