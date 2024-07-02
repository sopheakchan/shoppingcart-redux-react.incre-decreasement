import React from "react";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeAll } from "../../../redux/feature/cart/cartSlide";

const ProductInCard = ({ image, title, price, id, desc, qty }) => {
    const dispatch = useDispatch();
    //handle increase product
    const handleIncreaseProduct = ()=>{
      dispatch(increaseQty({id}));
    }
    const handleDecreaseProduct = ()=>{
      dispatch(decreaseQty({id}));
    }
  return (
    <>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Neil image"
                  height="40"
                  src={image}
                  width="40"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xl font-medium text-gray-900 dark:text-white">
                  {title}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {desc}
                </p>
                <div className="flex">
                <button onClick={()=>handleDecreaseProduct()} className="mr-3 font-bold">-</button>
                <p>{qty}</p>
                <button onClick={()=>handleIncreaseProduct()} className="ml-3 font-bold">+</button>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {price}$
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductInCard;
