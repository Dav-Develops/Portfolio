import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentFruit } from "../../features/camera/cameraSlice";

function Fruit({
    position = [0, 0, 0],
    color = "red",
    page = "/",
    fruitIndex = 0,
}) {
    const [hovered, setHovered] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setCurrentFruit(fruitIndex));

        // Navigation will happen after camera animation.
        // For now, we'll keep it immediate.
        navigate(page);
    }

    return (
        <mesh
            position={position}
            scale={hovered ? 1.2 : 1}
            onPointerOver={() => {
                document.body.style.cursor = "pointer";
                setHovered(true);
            }}
            onPointerOut={() => {
                document.body.style.cursor = "default";
                setHovered(false);
            }}
            onClick={handleClick}
        >
           <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

export default Fruit;