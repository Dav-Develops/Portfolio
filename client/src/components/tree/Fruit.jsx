import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentFruit } from "../../features/camera/cameraSlice";
import { useGLTF } from "@react-three/drei";

function Fruit({
    id,
    position,
    model,
    rotation,
    scale = 0.9,
    hoverOffset = [0, 0.4, 0],
    page,
    fruitIndex,
}) {
    const { scene } = useGLTF(model);

    const [hovered, setHovered] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fruitScene = useMemo(() => {
        return scene.clone();
    }, [scene]);

    function handleClick(event) {
        event.stopPropagation();

        dispatch(setCurrentFruit(id));
        navigate(page);
    }

    function handlePointerOver(event) {
        event.stopPropagation();

        document.body.style.cursor = "pointer";
        setHovered(true);
    }

    function handlePointerOut(event) {
        event.stopPropagation();

        document.body.style.cursor = "default";
        setHovered(false);
    }

    return (
        <group
            position={position}
            rotation={rotation}
            scale={scale}
        >
            {/* For axis visualization */}
            {/* <axesHelper args={[20]} /> */}

            {/* Invisible hover area */}
            <mesh
                position={hoverOffset}
                onPointerOver={(event) => {
                    event.stopPropagation();
                    document.body.style.cursor = "pointer";
                    setHovered(true);
                }}
                onPointerOut={(event) => {
                    event.stopPropagation();
                    document.body.style.cursor = "default";
                    setHovered(false);
                }}
                onClick={(event) => {
                    event.stopPropagation();
                    handleClick(event);
                }}
            >
                {/* <sphereGeometry args={[1.5, 16, 16]} /> */}
                <meshBasicMaterial transparent opacity={0} />
            </mesh>

            {/* Actual fruit */}
            <primitive
                object={fruitScene}
                scale={hovered ? 1.2 : 1}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={handleClick}
            />
        </group>
    );
}

export default Fruit;