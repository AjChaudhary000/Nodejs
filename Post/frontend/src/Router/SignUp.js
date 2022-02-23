import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom';
import axios from 'axios';
const SignUp = () => {
const [data,setData] = React.useState({
    username:'',
    email:'',
    password:''
})    
let nav = useNavigate();
const SignUp_Check =()=>{
    axios.post("/User/SignUp",data).then((res)=>{
        
            nav('/',{replace:true});
       
       
    })
    console.log(data)
}

    return (
        <div>
           <h1>Reg </h1> 
           <input type="text"  placeholder='UserName' onChange={(val)=>{setData({...data,username:val.target.value})}} /><br/>
           <input type="email"  placeholder='Email'  onChange={(val)=>{setData({...data,email:val.target.value})}} /><br/>
           <input type="password"  placeholder='Password'  onChange={(val)=>{setData({...data,password:val.target.value})}} /><br/>
        <button onClick={()=>SignUp_Check()}>SignUp</button><br/>
        <label>Already Account  <NavLink to="/"> Click Here </NavLink></label>
        </div>
    )
}

export default SignUp
