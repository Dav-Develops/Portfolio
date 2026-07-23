import { provider } from 'react-redux';
import store from './store';

export default function AppProvider({children}){
    return(
        <provider store={store}>{children}</provider>
    )
}