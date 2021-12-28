import React,{useEffect} from 'react';
import Router from './router';
import logo from './285.gif'
const App = () => {
  const [loading,setloading] = React.useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])
if(loading){
  return(
    <div style={{display:'flex'}}>
      <div style={{flex:1,alignSelf:'center',marginTop:400}}>
      <img src={logo} className="App-logo" alt="logo" style={{ display: 'flex',
    margin:'auto'}}/>
      </div>
    
    </div>)
}
  return (
    <div>
      <Router />
    </div>
  );
}
export default App;