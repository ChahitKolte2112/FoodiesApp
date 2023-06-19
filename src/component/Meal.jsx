import React, { useState } from "react";
import { topPickData } from "../../Assets/data";
import { useNavigate } from "react-router-dom";
const Meal = () => {
    const [food, setFood] = useState(topPickData);
    const fileterData = (category) => {
        setFood(
            topPickData.filter((items) => {
                return items.category === category;
            })
        );
    };

    const [cartItem, setCartItem] = useState([]);
    // const navigate = useNavigate();
    console.log(cartItem);
    const addToCart = (id) => {
        const items = food.filter((it) => {
            return it.id === id;
        });
        const item1 = Object.assign({}, items);

        setCartItem([...cartItem, item1]);

        // navigate("http://localhost:5173/AddtoCart", { state: { id: 1, name: "sabaoon" } });
    };

    return (
        <div className="max-w-[1520px] m-auto px-4 py-12">
            <h1 className="text-red-500 font bold text-2xl text-center py-2">
                {" "}
                OUR Meal
            </h1>

            <div className="flex items-center justify-center px-3 my-4">
                <button
                    onClick={() => {
                        setFood(topPickData);
                    }}
                    className="px-4 hover:bg-orange-300  mx-2 rounded-lg text-white bg-orange-500"
                >
                    All
                </button>
                <button
                    onClick={() => {
                        fileterData("pizza");
                    }}
                    className="px-4 hover:bg-orange-300 mx-2 rounded-lg text-white bg-orange-500"
                >
                    Pizza
                </button>
                <button
                    onClick={() => {
                        fileterData("burger");
                    }}
                    className="px-4 hover:bg-orange-300 mx-2 rounded-lg text-white bg-orange-500"
                >
                    Burger
                </button>
                <button
                    onClick={() => {
                        fileterData("salad");
                    }}
                    className="px-4 hover:bg-orange-300 mx-2 rounded-lg text-white bg-orange-500"
                >
                    Salad
                </button>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-5">
                {food.map((items) => {
                    return (
                        <div
                            key={items.id}
                            className="border-none relative  flex-col hover:scale-250 duration-300 flex items-center justify-center "
                        >
                            <img
                                className="rounded-md"
                                src={items.cover}
                                style={{
                                    width: "350px",
                                    height: "300px",
                                }}
                            />
                            <div
                                className=" absolute bottom-1 left-2 border-2 border-solid border-white rounded-md"
                                onClick={() => {
                                    addToCart(items.id);
                                }}
                            >
                                <h1 className="text-white m-1">ADD TO CART</h1>
                            </div>
                            <div></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Meal;
