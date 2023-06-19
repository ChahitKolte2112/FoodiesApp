import React from "react";
import { useState } from "react";
import {
    BsChevronCompactLeft,
    BsChevronCompactRight,
    BsJustify,
} from "react-icons/bs";

const Data = [
    {
        id: 1,

        cover: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80E",
    },
    {
        id: 2,

        cover: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        id: 3,

        cover: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    },
    {
        id: 4,

        cover: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
        id: 5,

        cover: "https://img.freepik.com/free-photo/delicious-asian-noodles-concept_23-2148773773.jpg?size=626&ext=jpg&ga=GA1.1.1938089433.1684673881&semt=sph",
    },
    {
        id: 6,

        cover: "https://img.freepik.com/premium-photo/bowl-food-with-smoke-coming-out-it_197463-2406.jpg?size=626&ext=jpg&ga=GA1.1.1938089433.1684673881&semt=sph",
    },
    {
        id: 7,

        cover: "https://img.freepik.com/free-photo/selection-food-tray_1340-23421.jpg?size=626&ext=jpg&ga=GA1.1.1938089433.1684673881&semt=sph",
    },
];

const Feature = (prop) => {
    const [index, setIndex] = useState(0);

    const LeftArrow = () => {
        if (index === 0) {
            setIndex(5);
        } else {
            setIndex((index - 1) % 6);
        }
    };
    const RightArrow = () => {
        if (index === 5) {
            setIndex(0);
        }
        setIndex((index + 1) % 6);
    };

    // console.log("1");
    // console.log(prop.image[0].cover);
    // console.log(index);
    // console.log(Data[2].id);
    return (
        <>
            <div className=" max-w-[1480px] h-[500px]  w-full  py-4 px-4 bg-blue realtive group ">
                <div className="w-full h-full  flex justify-center items-center rounded-2xl box-border bg-center bg-cover duration-500">
                    <img
                        className="group-hover/parent"
                        src={Data[index].cover}
                        style={{
                            width: "45%",
                            height: "100%",
                            borderRadius: "1rem",
                            border: "5px solid white  ",
                            marginRight: "5px",
                        }}
                    />
                    <img
                        src={Data[index + 1].cover}
                        style={{
                            width: "45%",
                            height: "100%",
                            borderRadius: "1rem",
                            border: "5px solid white  ",
                            marginLeft: "5px",
                        }}
                    />
                </div>
                <div
                    className=" hidden group-hover:block  absolute  z-5 top-[45%] left-2  text-2xl rounded-full p-2 cursor-pointer bg-orange-600"
                    onClick={LeftArrow}
                >
                    <BsChevronCompactLeft size={25} />
                </div>
                <div
                    className=" hidden  group-hover:block  absolute z-10 top-[45%] right-4  text-2xl rounded-full p-2 cursor-pointer bg-orange-600"
                    onClick={RightArrow}
                >
                    <BsChevronCompactRight size={25} />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p
                        onClick={() => {
                            setIndex(0);
                        }}
                        style={{ textDecoration: "solid", margin: "8px" }}
                    >
                        o
                    </p>
                    <p
                        onClick={() => {
                            setIndex(2);
                        }}
                        style={{ textDecoration: "solid", margin: "8px" }}
                    >
                        o
                    </p>
                    <p
                        onClick={() => {
                            setIndex(4);
                        }}
                        style={{ textDecoration: "solid", margin: "8px" }}
                    >
                        o
                    </p>
                </div>
            </div>
        </>
    );
};

export default Feature;
