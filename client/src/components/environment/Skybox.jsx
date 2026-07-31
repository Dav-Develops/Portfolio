import { Environment, Sky } from "@react-three/drei";
//This is 360 degree background
function Skybox() {
    return (
        <>
            <Environment files={"/hdri/meadow_2_2k.hdr"} background/>
            </>
    );
}

export default Skybox;