import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import axios from "axios";

const Home = () => {
React.useEffect(()=>{
  fatch();
},[])
  const [data, setData] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [search,setSearch]=React.useState({
    Searchname:''
})
  const fatch = () => {
    axios.post("/fatch/StudentDetails").then((res) => {
      const list = res.data.data;
      setData(list)
      console.log(data)
    })
  }

  const search_fatch = (searchItem)=> {
    axios.post("/search/searchStudent",{Searchname:searchItem}).then((res) => {
      const list = res.data.data;
      setResult(list)
    })
    return result;
  }
  const Data = (search.Searchname !== '') ? 
   search_fatch(search.Searchname) :
   data.map(item=>{return item }) 
  return (
    <div>
      <Header />
      <div>
      <div style={{height:50,width:'95%',borderRadius:10,margin:10,display:'flex',backgroundColor:'orange',flexDirection:'row', padding: 10 }}>
            <div style={{ width: '95%',margin:2}}>
            <input
            type={"search"}
                     style={{
                         marginLeft: 20,
                         marginRight: 10,
                         borderWidth:0,
                         borderBottomColor: "white",
                         borderBottomWidth: 2,
                         width: '100%',
                         fontSize: 20,
                         padding: 5,
                         height:40,
                         backgroundColor:'orange',
                        color: 'black'
                     }}
                     placeholder="Search "
                    onChange={(val)=>{setSearch({...search,Searchname:val.target.value})}}
                   />
            </div>
            <div style={{width: '5%',margin:2,marginLeft:30,marginTop:10}}>
            <img src="https://img.icons8.com/ios-filled/35/000000/search.png" />
            </div>
            </div>
        <div style={{ height: 50, width: '95%', display: 'flex', borderRadius: 10, marginLeft: 10, marginBottom: 10, marginTop: 10, marginRight: 10, backgroundColor: 'orange', alignItems: 'center', padding: 10 }}>
          <div style={{ flex: 1, margin: 2 }}>
            <p style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>ID</p>
          </div>
          <div style={{ flex: 2, margin: 2 }}>
            <p style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>UserName</p>
          </div>
          <div style={{ flex: 2, margin: 2 }}>
            <p style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>PassWord</p>
          </div>
          <div style={{ flex: 2, margin: 2 }}>
            <p style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Mobile No </p>
          </div>
          <div style={{ flex: 1, margin: 2 }}>
            <p style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Address</p>
          </div>
          <div style={{ flex: 1, margin: 2 }}>
            <p style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>DoB</p>
          </div>
          <div style={{ flex: 1, margin: 2 }}>
            <p style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Gender</p>
          </div>
        </div>

        {Data.map((item,index) => (
         <div key={item._id} style={{ height: 50, width: '95%', display: 'flex', borderRadius: 10, marginLeft: 10, marginBottom: 10, marginTop: 10, marginRight: 10, backgroundColor: 'orange', alignItems: 'center', padding: 10 }}>
         <div style={{ flex: 1, margin: 2 }}>
           <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{index + 1}</h5>
         </div>
         <div style={{ flex: 2, margin: 2 }}>
           <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.UserName}</h5>
         </div>
         <div style={{ flex: 2, margin: 2 }}>
           <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.Password}</h5>
         </div>
         <div style={{ flex: 2, margin: 2 }}>
           <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.MobileNo}</h5>
         </div>
         <div style={{ flex: 1, margin: 2 }}>
           <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.Address}</h5>
         </div>
         <div style={{ flex: 1, margin: 2 }}>
           <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.Dob}</h5>
         </div>
         <div style={{ flex: 1, margin: 2 }}>
           <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.Gender}</h5>
         </div>
       </div>
         ))} 
      </div>
      <Footer />
    </div>
  );

};
export default Home;