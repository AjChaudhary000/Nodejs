import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";

function SignUp() {

    const [data, setdata] = React.useState({
        UserName: '',
        Password: '',
        Dob: '',
        MobileNo: '',
        Address: '',
        Gender: ''
    });
    let navigate = useNavigate();
    const Signup_check = () => {
        // console.log(data)
        axios.post("/fatch/StudentDetails").then((res, req) => {
            if ((res.data.data).length == 0) {
                axios.post("/signup/signupStudent/", data).then((res) => {
                    if (res.statusText === "OK") {
                        console.log("Username")
                        navigate("/", { replace: true })
                    } else {
                        <h1>invalid Data</h1>
                    }
                });
            } else {
                (res.data.data).map((item) => {
                    if (item.UserName == data.UserName) {
                        console.log("Username already  exists")
                    } else {
                        axios.post("/signup/signupStudent/", data).then((res) => {
                            if (res.statusText === "OK") {
                                console.log("Username")
                                navigate("/", { replace: true })
                            } else {
                                <h1>invalid Data</h1>
                            }
                        });
                    }
                });
            }

        })
    }
    return (
        <div>

            <div className="login" style={{ width: '50%', backgroundColor: "yellowgreen", borderRadius: 15, margin: 'auto', padding: 20, marginTop: 100 }}>
                <div className="username" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <img src="https://img.icons8.com/color/40/000000/user.png" />
                    </div>
                    <div style={{ flex: 10 }}>
                        <input onChange={(val) => { setdata({ ...data, UserName: val.target.value }) }} type="text" placeholder="Enter UserName  " style={{ width: '100%', borderWidth: 0, height: 45, borderBottomWidth: 2, borderBottomColor: 'black', backgroundColor: "yellowgreen", color: 'black' }} />
                    </div>
                </div>
                <div className="password" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <img src="https://img.icons8.com/ios-glyphs/40/000000/password--v2.png" />
                    </div>
                    <div style={{ flex: 10 }}>
                        <input onChange={(val) => { setdata({ ...data, Password: val.target.value }) }} type="password" placeholder="Enter Password  " style={{ width: '100%', borderWidth: 0, height: 45, borderBottomWidth: 2, borderBottomColor: 'black', backgroundColor: "yellowgreen", color: 'black' }} />
                    </div>
                </div>
                <div className="DoB" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <img src="https://img.icons8.com/ios-filled/35/000000/calendar.png" />
                    </div>
                    <div style={{ flex: 10 }}>
                        <input onChange={(val) => { setdata({ ...data, Dob: val.target.value }) }} type="date" placeholder="Enter Password  " style={{ width: '100%', borderWidth: 0, height: 45, borderBottomWidth: 2, borderBottomColor: 'black', backgroundColor: "yellowgreen", color: 'black' }} />
                    </div>
                </div>
                <div className="mobile No" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/35/000000/external-mobile-phone-children-toys-vitaliy-gorbachev-fill-vitaly-gorbachev.png" />
                    </div>
                    <div style={{ flex: 10 }}>
                        <input onChange={(val) => { setdata({ ...data, MobileNo: val.target.value }) }} type="number" placeholder="Enter mobile No  " style={{ width: '100%', borderWidth: 0, height: 45, borderBottomWidth: 2, borderBottomColor: 'black', backgroundColor: "yellowgreen", color: 'black' }} />
                    </div>
                </div>
                <div className="Address" style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginTop: 20 }}>
                        <img src="https://img.icons8.com/ios-filled/35/000000/address.png" />
                    </div>
                    <div style={{ flex: 10, marginTop: 10 }}>
                        <textarea onChange={(val) => { setdata({ ...data, Address: val.target.value }) }} rows="4" cols="4" placeholder="Enter Address  " style={{ width: '100%', borderWidth: 0, borderBottomWidth: 2, borderBottomColor: 'black', backgroundColor: "yellowgreen", color: 'black' }}></textarea>

                    </div>
                </div>
                <div className="Gender" style={{ display: 'flex' }}>
                    <div style={{ flex: 1, marginTop: 20 }}>
                        <img src="https://img.icons8.com/ios-filled/35/000000/gender.png" />
                    </div>
                    <div style={{ flex: 10, marginTop: 10 }}>
                        <select onChange={(val) => { setdata({ ...data, Gender: val.target.value }) }} style={{ width: '100%', borderWidth: 0, height: 45, borderBottomWidth: 2, borderBottomColor: 'black', backgroundColor: "yellowgreen", color: 'black' }}>
                            <option>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>

                        </select>
                    </div>
                </div>
                <div className="Submit" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <button onClick={() => { Signup_check() }} type="Submit" value={"SignUp"} style={{ width: '30%', borderWidth: 0, marginLeft: '35%', marginTop: 20, height: 45, borderRadius: 10, backgroundColor: "greenyellow" }} >Sign Up</button>
                    </div>
                </div>
                <div className="SignUp" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <label>Already Account  Exists? <NavLink to="/">Click</NavLink> </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;