import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./component/TopNav";
import Feature from "./component/Feature";
import Data from "../Assets/heroComponentdata";
import Deilvery from "./component/Deilvery";
import TopPick from "./component/TopPick";
import Meal from "./component/Meal";
import TrendingCategory from "./component/TrendingCategory";
import Footer from "./component/Footer";
// import Routes from "react-dom";
import AddtoCart from "./pages/AddtoCart";
import Home from "./pages/Home";
function App() {
    // console.log(Data);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AddtoCart" element={<AddtoCart />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
