import { Card } from "flowbite-react";
import ProductInCard from "../../components/common/cards/ProductInCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/feature/cart/cartSlide";
import { removeAll } from "../../redux/feature/cart/cartSlide";
export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
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
            onClick={()=>handleRemoveAll()}
            className="text-sm font-medium text-red-600 hover:underline dark:text-cyan-500"
          >
            Remove all
          </button>
        </div>
        {cartItems.map((cartItems, index) => {
          return (
            <ProductInCard
              key={index}
              image={cartItems.image}
              title={cartItems.title}
              desc={cartItems.desc}
              id={cartItems.id}
              price={cartItems.price}
              qty={cartItems.qty}
            />
          );
        })}
      </section>
    </section>
  );
}
