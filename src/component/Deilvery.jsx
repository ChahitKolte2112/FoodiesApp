import React from "react";
import { useState, useEffect } from "react";
const Deilvery = () => {
    const arr = [
        "Hungry ?",
        "Game Night ?",
        "Cooking Gone Wrong ?",
        "Movie Marathon ?",
        "Unexpected Guest ?",
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % 4);
        }, 2500);
    }, [index]);

    return (
        <div className="w-[1300px] flex  flex-col items-center my-10 mx-10">
            <div className="w-[full] flex justify-evenly items-center">
                <div className="w-[40%] flex justify-start items-center ">
                    <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
                        style={{ width: "45%" }}
                    />
                    <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn "
                        style={{ width: "45%" }}
                    />
                </div>
                <div className="flex  flex-col items-center w-[40%]">
                    <div>
                        <h1
                            style={{
                                color: "green",
                                fontWeight: "bolder",
                                fontSize: "20px",
                            }}
                        >
                            Get The APP
                        </h1>
                    </div>
                    <div>
                        <div
                            style={{
                                fontWeight: "bolder",
                                fontSize: "30px",
                            }}
                        >{`${arr[index]}`}</div>
                    </div>
                    <div
                        style={{
                            fontSize: "24px",
                            margin: "20px",
                            width: "90%",
                        }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim aliquid dolore cumque temporibus provident facere
                        numquam nam quas maiores consequatur voluptas in
                        doloremque nemo earum, ipsam suscipit ullam laborum
                        aspernatur.
                    </div>
                    <div>
                        <button
                            className="p-1"
                            style={{ background: "green", borderRadius: "5px" }}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deilvery;
