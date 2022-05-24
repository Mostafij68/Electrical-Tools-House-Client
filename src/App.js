import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className="App relative">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
