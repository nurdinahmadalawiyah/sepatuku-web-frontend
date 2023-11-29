import "./styles/App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import {Navbar} from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import Product from "./pages/Product.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/detail" element={<DetailProduct />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
