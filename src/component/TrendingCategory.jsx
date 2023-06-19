import React from "react";
import { categories } from "../../Assets/category";
const TrendingCategory = () => {
    const category = {};
    return (
        <div className="w-[1520px] m-auto px-4 py-4">
            <h1 className=" flex items-center justify-center font-bold text-orange-500 text-[30px] p-2">Trending Category</h1>

            <div className=" grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1">
                {categories.map((items) => {
                    return (
                        <div className="flex-col items-center m-4">
                            <h1>{items.name}</h1>
                            <img
                                src={items.img}
                                style={{ width: "150px", height: "70px" }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrendingCategory;
