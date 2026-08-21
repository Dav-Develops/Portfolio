import { Outlet } from 'react-router-dom';
import TreeScene from '../../scenes/TreeScene';
import Overlay from '../UI/Overlay';

function Layout() {
    return(
        <>
        <TreeScene />
        <Overlay />
        <Outlet />
        </>
    );
}
export default Layout;