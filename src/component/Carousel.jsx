import React from "react";
import TopPickCard from "./TopPickCard";
const Carousel = () => {
    let box = document.querySelector("flex items-center overflow-hidden p-3 ");
    const left = () => {
        let width = "1520px";
        box.scrollLeft = box.scrollLeft - width;
    };
    const right = () => {
        let width = box.clientWidth;
        box.scrollRight = box.scrollRight + width;
    };
    return (
        <div id="carousel" className="flex items-center overflow-scroll p-3">
            <button className="prevbtn" onClick={left}>
                <p>&lt;</p>
            </button>
            <button className="nextbtn" onClick={right}>
                <p>&gt;</p>
            </button>
            <TopPickCard key={1} />
            <TopPickCard key={2} />
            <TopPickCard key={3} />
            <TopPickCard key={4} />
            <TopPickCard key={5} />
            <TopPickCard key={6} />
            <TopPickCard key={7} />
            <TopPickCard key={8} />
            <TopPickCard key={9} />
        </div>
    );
};

export default Carousel;
