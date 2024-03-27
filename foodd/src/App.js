import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Cart from './screens/Cart.js';
import Order from './screens/Order.js';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
//import { CartProvider } from './components/ContextReducer.js';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/createuser" element={<Signup></Signup>}></Route>
        <Route exact path="/cart" element={<Cart></Cart>}></Route>
        <Route exact path="/order" element={<Order></Order>}></Route>
      </Routes>
    </div>
    </Router>
    </ChakraProvider>
  );
}

export default App;
