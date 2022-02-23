import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddPost from './Router/AddPost';
import DeshBord from './Router/DeshBord';
import Login from './Router/Login';
import MyPost from './Router/MyPost';
import SignUp from './Router/SignUp';

const Router = () => {
    return (
        <div>
                <BrowserRouter>
                    <Routes>
                        <Route  path="/" element={<Login />}/>
                        <Route  path="/SignUp" element={<SignUp />}/>
                        <Route  path="/DashBoard" element={<DeshBord />}/>
                        <Route  path="/AddPost" element={<AddPost />}/>
                        <Route  path="/MyPost" element={<MyPost />}/>
                    </Routes>
                </BrowserRouter>
        </div>
    )
}

export default Router
