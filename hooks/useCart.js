import { useAtom } from "jotai";
import {
  cartItemsAtom,
  totalPriceAtom,
  totalQuantitiesAtom,
} from "../store/cartStore";
import toast from "react-hot-toast";

export function useCart() {
  const [cartItems, updateCartItems] = useAtom(cartItemsAtom);
  const [totalPrice, updateTotalPrice] = useAtom(totalPriceAtom);
  const [totalQuantities, updateTotalQuantities] = useAtom(totalQuantitiesAtom);

  const incQty = () => {
    const updateQty = useSetAtom(qtyAtom);
    updateQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    const updateQty = useSetAtom(qtyAtom);

    updateQty((prevQty) => Math.max(prevQty - 1, 0));
  };

  const onAdd = (productDetail, quantity) => {
    // Use find to check if the item is already in the cart
    console.log("Product ki details", productDetail.name);
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === productDetail._id
    );

    if (existingItem) {
      updateTotalPrice(
        (prevTotalPrice) => prevTotalPrice + productDetail.price * quantity
      );
      updateTotalQuantities(
        (prevTotalQuantity) => prevTotalQuantity + quantity
      );
      const updateCart = cartItems.map((item) => {
        if (item.productId === productDetail._id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });

      updateCartItems(updateCart);
      toast.success(`${quantity} ${productDetail.name} added to the cart.`);
    } else {
      updateCartItems((prevCartItems) => [
        ...prevCartItems,
        {
          productId: productDetail._id,
          productName: productDetail.name,
          price: productDetail.price,
          quantity: productDetail.quantity,
          image: productDetail.image,
        },
      ]);
      updateTotalQuantities(
        (prevTotalQuantities) => prevTotalQuantities + quantity
      );
      updateTotalPrice(
        (prevTotalPrice) => prevTotalPrice + productDetail.price * quantity
      );
      toast.success(`${quantity} ${productDetail.name} added to the cart.`);
    }
  };

  // in the componet import the hook and use the this state like below
  // import { useCount } from '../src/store';

  // function Home() {
  //   const [count, setCount] = useCount();

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  return { onAdd };
}
