import { Routes, Route } from 'react-router';
import UsersPage from '../UsersPage';
import Form from '../../Components/Form';

const AppRouter = () => {
    return(
        <Routes>
            <Route>
                <Route index='UsersPage' element={<UsersPage/>}/>
                <Route path='Form' element={<Form/>}/>
            </Route>
        </Routes>
    )
}
export default AppRouter;