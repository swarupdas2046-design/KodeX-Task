import React from "react";

const Card = (elem) => {
  console.log(elem);

  return (
    <div className="w-75 text-black bg-[#FFFFFF] shadow-2xl shadow-gray-300 hover:-translate-y-1.5 transition-all duration-200 ease-linear hover:cursor-pointer rounded-xl flex items-center p-3 flex-col gap-2 ">
      <img className="h-50 w-full rounded-xl mt-5" src={elem.image} alt="" />
      <h1 className="text-2xl font-semibold ">{elem.productName}</h1>
      <p className="text-xl font-light"> {elem.category} </p>
      <h3 className="text-green-600 font-bold text-xl">₹{elem.price} </h3>
      <button className="px-4 py-2 mb-3 text-white rounded border-none font-medium bg-[#007BFF] hover:bg-[#0056B3]">
        Add to cart
      </button>
    </div>
  );
};

export default Card;
