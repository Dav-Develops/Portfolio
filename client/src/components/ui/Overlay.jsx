import{ Outlet } from 'react-router-dom';

function Overlay () {
    return(
        <div style={{
            // position: 'relative',
            // zIndex: 1,
            // color: 'white',
            // padding: '20px',
        }}>
            <Outlet />
        </div>
    )
}
export default Overlay;