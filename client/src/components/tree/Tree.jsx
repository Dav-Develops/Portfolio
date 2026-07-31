import TreeModel from "./TreeModel";
import Fruit from './Fruit';
import fruits from "./fruits";

function Tree() {
    return (<>
        <TreeModel scale={2} position={[0, 0, 0]} rotation={[0, 0, 0]} />
        {fruits.map((fruit)=>(
            <Fruit
            key={fruit.id}
            position={fruit.position}
            color={fruit.color}
            page={fruit.page}
            />
        ))}
    </>
    )
}
export default Tree;