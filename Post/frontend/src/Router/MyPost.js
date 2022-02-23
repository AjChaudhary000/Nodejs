import React from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
const MyPost = () => {
    React.useEffect(()=>{
        fatch();
    },[])
   const [data,setData] = React.useState([]);
   const [update_show,setupdate_show] = React.useState(false);
    const fatch = () =>{
        axios.post("/Post/MyPostFetch",{uid:localStorage.getItem('id')}).then((res)=>{
            console.log(res.data.data); 
            setData(res.data.data)
        })
    }
    const deleteData =(id)=>{
        axios.delete("/Post/MyPostDelete",{_id:id}).then((res)=>{
            console.log(res); 
           fatch();
        })
    }
    const editData = (id)=>{
        setupdate_show(true)
    }
    const [post,setPost] = React.useState({
        uid:localStorage.getItem('id'),
        prost_title:''
    }) 
    const Update_Data = () =>{
        axios.post("/Post/AddPost",post).then((res)=>{
           
         fatch();  
    })
    }
    return (
        
        <div>
            {update_show?

            <div>
              <h1>Update Post </h1> 
           <textarea rows="4" cols="4" style={{width:"40%"}} placeholder='UserName' onChange={(val)=>{setPost({...data,prost_title:val.target.value})}}></textarea><br/>
          
        <button onClick={()=>Update_Data()}>Update Post</button><br/>
        </div>
        :
        <div>
           <h1>DashBoard</h1>
           <h4>hello {localStorage.getItem('username')}</h4>
           <NavLink to="/AddPost">Add Post</NavLink><br/>
           <NavLink to="/DashBoard">All Post</NavLink>
        {
            data.map((item)=>(
                <div key={item._id} className='App' style={{width:"20%",height:60,borderWidth:2,borderColor:'black',backgroundColor:'yellowgreen',margin:10 }}>

                    <label>{item.prost_title}</label>
                    <button onClick={()=>{deleteData(item._id)}} style ={{marginLeft:40}}>Delete</button><br/>
                    <button onClick={()=>{editData(item._id)}} style ={{marginLeft:20}}>Edit</button>
                </div>
            ))
        }
        </div>
}
        </div>
    )
}
export default MyPost
