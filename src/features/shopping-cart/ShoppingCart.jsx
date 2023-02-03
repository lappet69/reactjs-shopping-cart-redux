import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { FaHeart, FaTrash } from "react-icons/fa";
import {
  countPrice,
  countTotalPrice,
  countTotalQuantity,
  removeFromCart,
  updateQuantity,
} from "./shoppingCartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingCart.cart);

  const handleUpdateQuantity = (id, quantity) => {
    quantity > 0
      ? dispatch(updateQuantity({ id, quantity }))
      : removeFromCart(items, id);
  };

  return (
    <div className="w-screen h-screen flex flex-col py-10 px-5 md:px-10">
      <h2 className="text-center text-3xl">ShoppingCart</h2>
      <div className=" flex flex-grow flex-col gap-4">
        <div className="md:flex gap-5">
          <div className="grow p-5 rounded-lg shadow-2xl md:px-10">
            <h3 className="pt-5">
              Cart {`(${countTotalQuantity(items)} items)`}
            </h3>
            {items &&
              items.map((item) => (
                <div className="flex md:flex-grow flex-col md:flex-row rounded-lg gap-5 py-5">
                  <div className="w-full md:max-w-[160px] max-h-[300px] flex items-center justify-center py-10 rounded-lg bg-[#dadade] relative">
                    <img src={item?.imgSrc} alt="" className="h-full " />
                  </div>
                  <div className="w-full">
                    <div className="grid grid-cols-2 ">
                      <p className="">{item?.name}</p>
                      <div className="flex ml-auto border border-slate-300 px-2 rounded-lg">
                        <button
                          onClick={() =>
                            handleUpdateQuantity(item?.id, item.quantity - 1)
                          }
                          className="py-1 px-3 border-r "
                        >
                          -
                        </button>
                        <span className="py-1 px-3">{item?.quantity}</span>
                        <button
                          className="py-1 px-3 border-l"
                          onClick={() =>
                            handleUpdateQuantity(item?.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <p className="uppercase">
                        {item.type} - {item?.color}
                      </p>
                      <br />
                      <p className="uppercase">color {item?.color}</p>
                      <br />
                      <p className="mr-auto uppercase">size {item?.size}</p>
                    </div>
                    <div className="flex gap-2 md:gap-3 items-center ">
                      <button
                        className="flex gap-1 items-center uppercase text-xs"
                        onClick={() => removeFromCart(item?.id)}
                      >
                        {/* <FaTrash /> */}
                        remove item
                      </button>
                      <button className="flex gap-1 items-center uppercase text-xs">
                        {/* <FaHeart /> */}
                        move to wishlist
                      </button>
                      <p className="ml-auto">
                        {countPrice(item.price, item?.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col p-5 shadow-2xl rounded-lg">
              <h3>The total amount of</h3>
              <div className="grid grid-cols-2 border-b border-slate-300 gap-1 pb-5">
                <p>Temporary amount</p>
                <p className="ml-auto"> ${countTotalPrice(items)}</p>
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
            <button className="w-full bg-white flex border border-slate-300 py-3 rounded-lg px-5">
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
