import TreeModel from "./TreeModel";
import Fruit from './Fruit';
import fruits from "./fruits";

function Tree() {
    return (
        <group scale={2} position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <TreeModel rotation={[0, -0.4, 0]} />
            {fruits.map((fruit, index) => (
                <Fruit
                    key={fruit.id}
                    id={fruit.id}
                    position={fruit.position}
                    rotation={fruit.rotation}
                    scale={fruit.scale}
                    model={fruit.model}
                    hoverOffset={fruit.hoverOffset || [0, 0, 0]}
                    page={fruit.page}
                    fruitIndex={index + 1}
                />
            ))}
        </group>
    )
}
export default Tree;