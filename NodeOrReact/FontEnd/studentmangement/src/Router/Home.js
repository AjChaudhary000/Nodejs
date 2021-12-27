import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import axios from "axios";

const Home = () => {
  const data = [
    {
      "_id": {
        "$oid": "61c8691a3b339a5a258c337f"
      },
      "UserName": "Arjun",
      "Password": "Arjun123",
      "Dob": {
        "$date": "2000-02-02T00:00:00.000Z"
      },
      "MobileNo": "8969362541",
      "Address": "surat",
      "Gender": "male",
      "__v": 0
    },
    {
      "_id": {
        "$oid": "61c869483b339a5a258c3383"
      },
      "UserName": "Arjun1",
      "Password": "Arjun12345",
      "Dob": {
        "$date": {
          "$numberLong": "38817705600000"
        }
      },
      "MobileNo": "45645648456",
      "Address": "vesu",
      "Gender": "female",
      "__v": 0
    }
  ]
  return (
    <div>
      <Header />
      <div>
        <div style={{ height: 50, width: '95%', display: 'flex', borderRadius: 10, marginLeft: 10, marginBottom: 10, marginTop: 10, marginRight: 10, backgroundColor: 'orange', alignItems: 'center', padding: 10 }}>
          <div style={{ flex: 1, margin: 2 }}>
            <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>ID</h5>
          </div>
          <div style={{ flex: 2, margin: 2 }}>
            <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>UserName</h5>
          </div>
          <div style={{ flex: 2, margin: 2 }}>
            <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>PassWord</h5>
          </div>
          <div style={{ flex: 2, margin: 2 }}>
            <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Mobile No </h5>
          </div>
          <div style={{ flex: 1, margin: 2 }}>
            <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Address</h5>
          </div>
          <div style={{ flex: 1, margin: 2 }}>
            <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>DoB</h5>
          </div>
          <div style={{ flex: 1, margin: 2 }}>
            <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>Gender</h5>
          </div>
        </div>

        {data.map((item) => (
          <div key={item._id.$oid} style={{ height: 50, width: '95%', display: 'flex', borderRadius: 10, marginLeft: 10, marginBottom: 10, marginTop: 10, marginRight: 10, backgroundColor: 'orange', alignItems: 'center', padding: 10 }}>
            <div style={{ flex: 1, margin: 2 }}>
              <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{1}</h5>
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
              <h5 style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.Dob.$date}</h5>
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
