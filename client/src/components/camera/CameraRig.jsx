import { useFrame, useThree } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { Vector3 } from "three";
import CameraPositions from "../../camera/CameraPositions";

function CameraRig() {
    const { camera } = useThree();

    const currentFruit = useSelector(
        (state) => state.camera.currentFruit
    );

    useFrame(() => {
        const target = CameraPositions[currentFruit] ?? CameraPositions.home;

        if (!target) return;

        const desiredPosition = new Vector3(...target.position);

        // Smooth movement
        // camera.position.lerp(desiredPosition, 0.05);

        // Always look at target
        camera.lookAt(...target.target);
    });

    return null;
}

export default CameraRig;