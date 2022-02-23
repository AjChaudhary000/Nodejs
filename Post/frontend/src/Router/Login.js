import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const [data,setData] = React.useState({
       
        email:'',
        password:''
    })    
    let nav = useNavigate();
    const SignIn_Check =()=>{
        axios.post("/User/SignIn",data).then((res)=>{
            console.log(res.data.data);
            if(res.data.data.length === 1 ){
                localStorage.setItem("username",res.data.data[0].username);
                localStorage.setItem("id",res.data.data[0]._id);
                nav('/DashBoard',{replace:true});
            }
        })
        console.log(data)
    }
    return (
        <div>
           <h1>Login</h1> 
           <input type="email"  placeholder='Email' onChange={(val)=>{setData({...data,email:val.target.value})}} /><br/>
           <input type="password"  placeholder='Password' onChange={(val)=>{setData({...data,password:val.target.value})}} /><br/>
        <button onClick={()=>{SignIn_Check()}}> Login</button><br/>
        <label>Create Account  <NavLink to="/SignUp"> Click Here </NavLink></label>
        </div>
    )
}

export default Login
