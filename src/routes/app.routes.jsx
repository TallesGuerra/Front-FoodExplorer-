import {Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';


import{ Home } from '../pages/Home';
import{ SignIn } from '../pages/SignIn';
import{ AddDish } from '../pages/AddDish';
import{ DishDetails } from '../pages/DishDetails';
import{ EditDish } from '../pages/EditDish';




export function AppRoutes() {
    const { user, isAuthenticated } = useAuth();
    const isAdmin = user?.is_admin;

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            {isAuthenticated && isAdmin && (
                <>
                    <Route path="/addDish" element={<AddDish />} />
                    <Route path="/editDish/:id" element={<EditDish />} />
                </>
            )}
            {isAuthenticated && (
                <Route path="/details/:id" element={<DishDetails />} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}



/* export function AppRoutes({ isAdmin }){    
    return(
        <Routes>
            <Route path="/" element={<Home isAdmin={isAdmin}/>} />
            <Route path="/signIn" element={<SignIn isAdmin={isAdmin} />} />           
            <Route path="/addDish" element={<AddDish isAdmin={isAdmin}/>}  />
            <Route path="/details/:id" element={<DishDetails isAdmin={isAdmin} />} />
            <Route path="/editDish/:id" element={<EditDish  isAdmin={isAdmin}/>} />

            <Route path="*" element={<Navigate to="/"/>} />  
        </Routes>
    );
} */