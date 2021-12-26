import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
const SignIn = () => {

    const [data, setdata] = React.useState({
        UserName: '',
        Password: '',
    });
    let navigate = useNavigate();
    const Signin_check = () => {
        console.log(data)
        axios.post("/login/loginStudent/", data).then((res) => {
            console.log(res.data.data.length);
            if ((res.data.data.length) === 1) {
                navigate("/Home", { replace: true })
            } else {
                console.log("Username and Password Wrong ");
            }
        });
    }
    return (
        <div>

            <div className="login" style={{ width: '35%', backgroundColor: "yellowgreen", borderRadius: 15, margin: 'auto', padding: 10, marginTop: 50 }}>
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
                <div className="Submit" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <button onClick={() => { Signin_check() }} type="Submit" value={"Sign In"} style={{ width: '30%', borderWidth: 0, marginLeft: '35%', marginTop: 20, height: 45, borderRadius: 10, backgroundColor: "greenyellow" }} >Sign Up</button>
                    </div>
                </div>
                <div className="SignUp" style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }}>
                        <label>Create Account ? <NavLink to="/signup">Click</NavLink> </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignIn;