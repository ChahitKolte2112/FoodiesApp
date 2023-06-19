import React from "react";
import { topPickData } from "../../Assets/data";

const TopPickCard = () => {
    return (
        <div className="relative mx-3 min-w-[250px] max-w-[350px] ">
            <div>
                <img
                    className=" w-[250px] h-[250px]"
                    src={topPickData[0].cover}
                ></img>

                <div className="absolute font mono bottom-7 left-8 p-2 font-mono text-[24px] text-white ">
                    <button className="border-white"> Add to cart</button>
                </div>
            </div>
            <div
                className="  flex justify-between  border-black-50 "
                style={{ border: "2px solid black", padding: "10px" }}
            >
                <h1>{topPickData[0].name}</h1>

                <h1>{`Price: $${topPickData[0].price}`}</h1>
            </div>
            <div></div>
        </div>
    );
};

export default TopPickCard;
