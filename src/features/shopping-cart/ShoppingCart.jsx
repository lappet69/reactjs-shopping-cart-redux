import React from "react";

const ShoppingCart = () => {
  return (
    <div className="w-screen h-screen flex flex-col py-10 px-5">
      <h2 className="text-center">ShoppingCart</h2>
      <div className=" flex flex-col gap-4">
        <div className="p-5 rounded-lg shadow-2xl">
          <h3>Cart 2 item</h3>
          <div className="flex flex-col rounded-lg gap-5 py-5">
            <div className="w-full flex items-center justify-center py-10 rounded-lg bg-[#dadade]">
              <img
                src="https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8069.png"
                alt=""
              />
            </div>
            <div className="w-full  grid grid-cols-2 ">
              <p className="">denim</p>
              <div className="flex ml-auto">
                <button>-</button>
                <span>5</span>
                <button>+</button>
              </div>
              <p className="">typ</p>
              <br />
              <p className="">color</p>
              <br />
              <p className="mr-auto">size</p>
            </div>
            <div className="flex gap-2 ">
              <p>remove item</p>
              <p>move to wishlist</p>
              <p className="ml-auto">harga</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5 shadow-2xl rounded-lg">
          <h3>The total amount of</h3>
          <div className="grid grid-cols-2 border-b border-slate-300 gap-1 pb-5">
            <p>Temporary amount</p>
            <p className="ml-auto"> $56</p>
            <p>Shipping </p>
            <p className="ml-auto">Gratis</p>
          </div>
          <div className="grid grid-cols-2 py-2">
            <p>
              The total amount of <br /> (Including VAT)
            </p>
            <p className="ml-auto"> $56</p>
          </div>
          <button className="text-white bg-blue-500 py-3 rounded-lg">
            GO TO CHECKOUT
          </button>
        </div>
        <button className="flex border border-slate-300 py-3 rounded-lg px-5">
          GO TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
