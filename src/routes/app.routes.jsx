import {Routes, Route } from 'react-router-dom';

import{ Home } from '../pages/Home';
import{ AddDish } from '../pages/AddDish';
import{ DishDetails } from '../pages/DishDetails';
import{ EditDish } from '../pages/EditDish';
import{ SignIn } from '../pages/SignIn';


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/addDish" element={<AddDish />} />
            <Route path="/details/:id" element={<DishDetails />} />
            <Route path="/edit/:id" element={<EditDish />} />
        </Routes>
    );
}