import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// import userContext  from '../context/userContext';
const Login = (props) => {
  // const context=useContext(userContext);
  // const {login}=context;
  let history=useNavigate()
  const host = process.env.REACT_APP_SERVER_URL ;
  const [credentials,setCredentials]=useState({email:"",password:""})
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response= await fetch(`${host}/api/auth/login`,{
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password}), // body data type must match "Content-Type" header
  })
  const json=await response.json();
   console.log(json);
    // login(credentialKs.email,credentials.password)
    // localStorage.setItem('token',response)
  if(json.success){
    localStorage.setItem('token',json.token)
    props.showAlert("success","LoggedIn Successfully");
    history('/')

  }
  else{
    props.showAlert("danger","Invalid Credentials!")
  }
    }
  
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const handleReg=()=>{
    history('/signup')
  }
  return (
    <div className='container'>
      <div className="my-3">
        <h2>Login to Continue</h2>
        <hr />
      </div>
      <form onSubmit={handleSubmit}  >
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credentials.email} autoComplete="username"  onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={credentials.password} autoComplete="current-password"  onChange={onChange} name='password'/>
  </div>
  <div className="mb-3 form-check">
    <p>Haven't Account, <i onClick={handleReg} className="text-primary">Register</i> here </p>
  </div>
  {/* <button type="submit" className="btn btn-primary">Login</button> */}
  <Button submit variant='contained' color='primary'>Login</Button>
</form>
    </div>
  )
}

export default Login
