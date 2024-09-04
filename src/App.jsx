import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from './pages/Payment'
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute"
import PaymentForm from "./components/PaymentForm";
const App = () => {
  const {cart}=useSelector((state)=>state)
  return (<div>

        <div className=" bg-richblack-800  flex justify-center">
          <Navbar/>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>

          <Route path="/Payment" element={
            <PrivateRoute cart={cart} >
              <Payment cart={cart}/>
            </PrivateRoute>
          }>

          </Route>

          <Route path="/PaymentForm" element={
            <PrivateRoute cart={cart}>
              <PaymentForm  ></PaymentForm>
            </PrivateRoute>
          }>

          </Route>
        </Routes>

  </div>)
};

export default App;
