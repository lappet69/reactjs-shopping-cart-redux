import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaTrash } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import {
  countPrice,
  countTotalPrice,
  countTotalQuantity,
  removeFromCart,
  totalCheckout,
  updateQuantity,
} from "./shoppingCartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingCart.cart);

  const handleUpdateQuantity = (id, quantity) => {
    quantity > 0
      ? dispatch(updateQuantity({ id, quantity }))
      : dispatch(removeFromCart(id));
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
                <div
                  key={item?.id}
                  className="flex md:flex-grow flex-col md:flex-row rounded-lg gap-5 py-5"
                >
                  <div className="w-full md:max-w-[160px] max-h-[300px] flex items-center justify-center py-10 rounded-lg bg-[#dadade] relative">
                    <img src={item?.imgSrc} alt="" className="h-full " />
                  </div>
                  <div className="w-full">
                    <div className="grid grid-cols-2 gap-y-5 relative">
                      <p className="md:col-span-2 lg:col-span-1 lg:-order-1">
                        {item?.name}
                      </p>
                      <div className="flex ml-auto border border-slate-300 px-2 rounded-lg md:-order-1 md:ml-0 md:w-fit lg:ml-auto ">
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
                      <p className="uppercase md:text-sm lg:text-base">
                        {item.type} - {item?.color}
                      </p>
                      <br />
                      <p className="uppercase md:text-sm lg:text-base">
                        color {item?.color}
                      </p>
                      <br />
                      <p className="mr-auto uppercase md:text-sm lg:text-base">
                        size {item?.size}
                      </p>
                    </div>
                    <div className="flex gap-2 md:gap-3 items-center md:flex-col md:items-start md:mt-8 relative lg:flex-row">
                      <button
                        className="flex gap-1 items-center uppercase text-xs"
                        onClick={() => dispatch(removeFromCart(item?.id))}
                      >
                        <FaTrash />
                        remove item
                      </button>
                      <button className="flex gap-1 items-center uppercase text-xs">
                        <FaHeart />
                        move to wishlist
                      </button>
                      <p className="ml-auto md:absolute md:right-0 md:-bottom-1 lg:relative">
                        {countPrice(item.price, item?.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col p-5 shadow-2xl rounded-lg">
              <h3 className="font-semibold text-lg my-3">
                The total amount of
              </h3>
              <div className="grid grid-cols-2 border-b border-slate-300 gap-y-4 pb-5">
                <p>Temporary amount</p>
                <p className="ml-auto"> ${countTotalPrice(items)}</p>
                <p>Shipping </p>
                <p className="ml-auto">Gratis</p>
              </div>
              <div className="grid grid-cols-2 py-2 my-4">
                <p className="flex w-full md:text-sm lg:text-base">
                  The total amount of <br /> (Including VAT)
                </p>
                <p className="ml-auto">
                  ${totalCheckout(countTotalPrice(items), 0)}
                </p>
              </div>
              <button className="text-white bg-blue-500 py-3 rounded-lg">
                GO TO CHECKOUT
              </button>
            </div>
            <button className="w-full font-semibold text-sm bg-white flex justify-between items-center border border-slate-300 py-4 rounded-lg px-5">
              Add a checkout code [optional]
              <FiChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
