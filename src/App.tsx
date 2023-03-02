import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from 'pages/Navbar/Navbar';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import MyPage from 'pages/MyPage/MyPage';
import KakaoSignUp from 'pages/KakaoSignUp/KakaoSignUp';
import Product from 'pages/Product/Product';
import Register from 'pages/Register/Register';
import Search from 'pages/Search/Search';
import Cart from 'pages/Cart/Cart';
import About from 'pages/About/About';
import Shop from 'pages/Shop/Shop';
import Inquiry from 'pages/Inquiry/Inquiry';
import Comment from 'pages/Comment/Comment';
import Board from 'pages/Board/Board';
import Contact from 'pages/Contact/Contact';
import Order from 'pages/Order/Order';
import OrderSuccess from 'pages/OrderSuccess/OrderSuccess';

function App() {
  return (
    <>
      <Navbar />
      ``
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/kakaosignup" element={<KakaoSignUp />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/board" element={<Board />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />
        <Route path="*" element={<div>404 not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
