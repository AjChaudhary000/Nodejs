import React from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
const DeshBord = () => {
    React.useEffect(()=>{
        fatch();
    },[])
   const [data,setData] = React.useState([]);
    const fatch = () =>{
        axios.post("/Post/PostFetch").then((res)=>{
            console.log(res.data.data); 
            setData(res.data.data)
        })
    }

    return (

        <div>
           <h1>DashBoard</h1>
           <h4>hello {localStorage.getItem('username')}</h4>
           <NavLink to="/AddPost">Add Post</NavLink> <br/>
           <NavLink to="/MyPost">MY Post</NavLink>
        {
            data.map((item)=>(
                <div className='App' style={{width:"20%",height:60,borderWidth:2,borderColor:'black',backgroundColor:'yellowgreen',margin:10 }}>

                    <label>{item.prost_title}</label>
                </div>
            ))
        }
        </div>
    )
}

export default DeshBord
