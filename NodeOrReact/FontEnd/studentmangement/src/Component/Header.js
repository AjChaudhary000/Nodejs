import React from 'react';
import logo from '../Vnsgu.png'
import profile from '../profile.png'
const Header = () => (
  <div>
    <div style={{ display: 'flex', backgroundColor: 'yellowgreen', height: 150, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
      <div style={{ marginRight: 10, flex: 1 }}>
        <img src={logo} className="App-logo" alt="logo" style={{ height: 120, width: 120, padding: 20 }} />
      </div>
      <div style={{ marginLeft: 10, flex: 8 }}>
        <h3 style={{ fontSize: 35, color: 'black', textAlign: 'left' }}>Veer Narmad South Gujarat University
        </h3>
      </div>
      <div style={{ marginRight: 10, marginTop: 5, flex: 2, }}>
        <div style={{ display: 'flex' }}>
          <img src={profile} className="App-logo" alt="logo" style={{ height: 80, width: 80, paddingTop: 5 }} />
          <h4 style={{ fontSize: 20, color: 'white', marginLeft: 20 }}>Arjun Chaudhary</h4>
        </div>
        <button type="Submit" value={"Sign In"} style={{ width: '40%', borderWidth: 0, marginLeft: '35%', marginTop: -5, height: 40, borderRadius: 5, backgroundColor: "orangered" }} >LogOut </button>

      </div>

    </div>
  </div>
)
export default Header;