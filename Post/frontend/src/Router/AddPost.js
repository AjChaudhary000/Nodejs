import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const AddPost = () => {
    let nav = useNavigate();
    const [data,setData] = React.useState({
       
        uid:localStorage.getItem('id'),
        prost_title:''
    }) 
    const Add_Data = () =>{
        axios.post("/Post/AddPost",data).then((res)=>{
            nav('/DashBoard',{replace:true});
          console.log(res.data);   
    })
    }
    return (
        <div>
              <h1>Add Post </h1> 
           <textarea rows="4" cols="4" style={{width:"40%"}} placeholder='UserName' onChange={(val)=>{setData({...data,prost_title:val.target.value})}}></textarea><br/>
          
        <button onClick={()=>Add_Data()}>Add Post</button><br/>
        </div>
    )
}

export default AddPost
