// // import { useNavigate } from 'react-router-dom';
// import UserContext from './userContext'
// const UserState=(props)=>{
//     const host = "http://localhost:5000";

// const login=async(email,password)=>{
//     // const history=useNavigate()
//     const response= await fetch(`${host}/api/auth/login`,{
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           "Content-Type": "application/json",
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: JSON.stringify({email, password}), // body data type must match "Content-Type" header
//     })
//     const json=await response.json();
//     // console.log(login_res);
//      if(json.success){
//         ///Save the auth token and redirect
//          localStorage.setItem('token',response)
//          history('/')  

//        } 
//        else{
//          alert("Invalid Credentials!")
//        }
// }

// return(
//     <UserContext.Provider  value={{login}}>
//     {props.children}
//     </UserContext.Provider>

//     )

// }

// export default UserState;