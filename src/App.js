import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import { Home } from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUserPage/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router>
      <div >
        <Topbar/>
          <div className="container">
            <SideBar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path='/users' element={<UserList/>}/>
              <Route path="/user/:userId" element={<User/>}/>
              <Route path="/newUser" element={<NewUser/>}/>
              <Route path="/products" element={<ProductList/>}/>
              <Route path="/product/:productId" element={<Product/>}/>
              <Route path="/newproduct" element={<NewProduct/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
