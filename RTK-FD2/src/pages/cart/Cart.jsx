import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorTotalPrice, selectCartItems, removeAll } from "../../redux/feature/cart/cartSlide";
import ProductInCard from "../../components/common/cards/ProductInCard";

const Cart = () => {
  const totalPrice = useSelector(selectorTotalPrice);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <section className="flex justify-center mt-5">
      <section className="max-w-sm items-center w-1/2 bg-slate-100 p-5 rounded-m overflow-scroll h-[80vh]">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Shopping Cart
          </h5>
          <button
            onClick={handleRemoveAll}
            className="text-sm font-medium text-red-600 hover:underline dark:text-cyan-500"
          >
            Remove all
          </button>
        </div>
        {cartItems.map((cartItem, index) => (
          <ProductInCard
            key={index}
            image={cartItem.image}
            title={cartItem.title}
            desc={cartItem.desc}
            id={cartItem.id}
            price={cartItem.price}
            qty={cartItem.qty}
          />
        ))}
        <div className="mt-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          <hr className="mb-5 bg-black font-bold h-[1px]" />
          <div className=" flex justify-between">
            <p>Total Price: </p>
            <p>{totalPrice.toFixed(2)}$</p>
          </div>
          </h5>
        </div>
      </section>
    </section>
  );
};

export default Cart;
