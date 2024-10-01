import { useState } from 'react'
import './App.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Reigster = () => {
    const [email,setEmail ] = useState();
    const [name,setName ] = useState();
    const [password,setPassword ] = useState();
    const navigate= useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/createuser",{email,name,password})
    .then(navigate("/login"))
    .catch(e=>console.log(e))
      
  }
  return (
    <div>
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <label>Username</label>
          <input type="text " onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Reigster;
