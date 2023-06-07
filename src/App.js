import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import NoteState from './context/noteState';
import Alert from './component/Alert';
import Login from './component/Login';
import SignUp from './component/SignUp';
import { useState} from 'react';



function App() {
  const [alert,setAlert]=useState(null);

  const showAlert=(type,messege)=>{
    setAlert({
       msg:messege,
       type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    
      <NoteState>
      <Router>
      <Navbar/>
      <Alert alert={alert}/>
      {/* <Home showAlert={showAlert}/> */}
       <Routes>
        <Route exact path='/'  element={<Home showAlert={showAlert}/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/login' element={<Login  showAlert={showAlert}/>}></Route>
        <Route exact path='/signup' element={<SignUp showAlert={showAlert} />}></Route>
       </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
