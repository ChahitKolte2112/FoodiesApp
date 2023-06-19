import React, { useState } from "react";

const List = (prop) => {
    // console.log(prop);
    const data = prop.expense;
    const [totalPerItem, settotalPerItem] = useState(data.price);

    const addHandler = () => {
        // console.log("button");
        prop.grandTotal((prev) => {
            return (prev = prev + data.price);
        });
        settotalPerItem((prev) => {
            return (prev = prev + data.price);
        });
    };
    const subHandler = () => {
        // console.log("suntract");
        if (totalPerItem > 0) {
            let amt = totalPerItem;

            amt = amt - data.price;
            prop.grandTotal((prev) => {
                return (prev = prev - data.price);
            });
            // console.log(amt);
            settotalPerItem(amt);
        }
    };
    // console.log(totalPerItem);
    return (
        <div>
            <div className="w-[full] min-w-[500px] flex justify-between items-center mx-auto min-h-[90px] max-h-[250px] my-1  border-b-2 border-solid border-black ">
                <div className=" mx-2">
                    <p>{data.name}</p>
                </div>
                <div className="">
                    <p>{data.price}</p>
                </div>

                <div className=" flex-col items-center border-spacing-1 border-dotted border-white">
                    <div className="w-[100%] flex justify-center">
                        <button onClick={addHandler} className="text-[28px]">
                            +
                        </button>
                    </div>
                    <p className="border-2 border-white">Add</p>
                    <div className="w-[100%] flex justify-center">
                        <button onClick={subHandler} className="text-[28px]">
                            -
                        </button>
                    </div>
                </div>
                <div className="mx-2">
                    <p>{totalPerItem}</p>
                </div>
            </div>
        </div>
    );
};

export default List;
