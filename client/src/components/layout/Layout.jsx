import { Outlet } from 'react-router-dom';
import TreeScene from '../../scenes/TreeScene';
// import Overlay from '../UI/Overlay';

function Layout() {
    return(
        <>
        <TreeScene />
        {/* Outlet is working as an overlay or screen or plan, on which the TreeScene is being displayed. */}
        <Outlet />
        </>
    );
}
export default Layout;