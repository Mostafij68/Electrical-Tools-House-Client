import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';
import AllTools from './pages/Tools/AllTools';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className="App relative">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools' element={<AllTools></AllTools>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/addReview' element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
