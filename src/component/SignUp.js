import { Box } from '@mui/material';
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = (props) => {
  let history =useNavigate()
  const host = process.env.REACT_APP_SERVER_URL;
  // const host = "http://localhost:5000" ;
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",cnf_password:""})
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response= await fetch(`${host}/api/auth/userauth`,{
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({name:credentials.name,email:credentials.email, password:credentials.password}), // body data type must match "Content-Type" header
  })
  const json=await response.json();
   console.log(json);
  if(json.success){
    localStorage.setItem('token',json.token)
    props.showAlert("success","Account Created Successfully");
    history('/')
  }
  else{
    props.showAlert("danger","This id already exit,Please use different email!");
  }
    }
  
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }

 const handleLog=()=>{
  history('/login')
 }

  return (
    <Box sx={{ display: "flex" ,flexDirection:"column" ,alignItems:"center" }} width="70%">
      <div className="my-3">
        <h2>Register</h2>
        <hr />
      </div>
      <form onSubmit={handleSubmit}  >
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" value={credentials.name} autoComplete="username"  onChange={onChange} name='name' required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credentials.email} autoComplete="username"  onChange={onChange} required aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={credentials.password} autoComplete="current-password"  onChange={onChange} required minLength={8} name='password'/>
  </div>
  <div className="mb-3">
    <label htmlFor="cnf_password" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cnf_password" value={credentials.cnf_password}  onChange={onChange} required minLength={8} name='cnf_password'/>
  </div>
  <div className="d-flex ">
  <button type="submit" className="btn btn-primary mx-4">Sign Up</button>
   <p>Already have an Account, <i onClick={handleLog} className="text-primary" >Login</i> Instead </p>
  </div>
</form>
    </Box>
  )
}

export default SignUp
