import { useState } from "react"
import {useNavigate}from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username,setusername] = useState();
    const [password,setPassword]= useState();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/login",{username,password})
        .then(result=>{console.log(result)
            if(result.data=="Success"){
                navigate('/home')
            }
        })
        .catch(e=>console.log("theres some error",e));
    }
  return (
    <div>
      <h1>Hello world</h1>

      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input type="text" onChange={(e) => setusername(e.target.value)} required/>
        </div>
     
        <div>
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Login
