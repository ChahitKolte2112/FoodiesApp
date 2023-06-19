import React from "react";
import TopNav from "../component/TopNav";
import Feature from "../component/Feature";
import Data from "../../Assets/heroComponentdata";
import Deilvery from "../component/Deilvery";
import TopPick from "../component/TopPick";
import Meal from "../component/Meal";
import TrendingCategory from "../component/TrendingCategory";
import Footer from "../component/Footer";
const Home = () => {
    return (
        <div>
            <TopNav />
            <Feature image={Data} />
            <Deilvery />
            <TopPick />
            <Meal />
            <TrendingCategory />
            <Footer />
        </div>
    );
};

export default Home;
