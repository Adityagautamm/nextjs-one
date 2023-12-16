import { atom, useAtom, useSetAtom } from "jotai";
import toast from "react-hot-toast";

// Define your atoms (state) using the `atom` function
export const showCartAtom = atom(false);
//cartItemsAtom looks like [{productName: "abc", price: 12, quantity: 10}]
export const cartItemsAtom = atom([]);
export const totalPriceAtom = atom(0);
export const totalQuantitiesAtom = atom(0);
export const qtyAtom = atom(1);

// in the app uselike below
//   const [user] = useAtom(userAtom);
//   const [theme] = useAtom(themeAtom);

// Create a custom hook to use the state
export function UseShowCart() {
  return useAtom(showCartAtom);
}

export function UseCartItems() {
  return useAtom(cartItemsAtom);
}

export function UseTotalPrice() {
  return useAtom(totalPriceAtom);
}

export function UseTotalQuantities() {
  return useAtom(totalQuantitiesAtom);
}

export function UseQty() {
  return useAtom(qtyAtom);
}

export const incQty = () => {
  const updateQty = useSetAtom(qtyAtom);
  updateQty((prevQty) => prevQty + 1);
};

export const decQty = () => {
  const updateQty = useSetAtom(qtyAtom);

  updateQty((prevQty) => Math.max(prevQty - 1, 0));
};

export const onAdd = (productDetail, quantity) => {
  const updateCartItems = useSetAtom(cartItemsAtom);
  const updateTotalPrice = useSetAtom(totalPriceAtom);
  const updateTotalQuantities = useSetAtom(totalQuantitiesAtom);

  // Use find to check if the item is already in the cart
  const existingItem = updateCartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItem) {
    updateTotalPrice((prevTotalPrice) => {
      prevTotalPrice + productDetail.price * quantity;
    });
    updateTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);
    const updateCart = updateCartItems.map((item) => {
      if (item._id === productDetail._id) {
        return { ...item, quantity: item.quantity + quantity };
      }
    });

    updateCartItems(updateCart);
    toast.success(`${quantity} ${productDetail.name} added to the cart.`);
  } else {
    updateCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        productName: productDetail.name,
        price: productDetail.price,
        quantity: productDetail.quantity,
      },
    ]);
    updateTotalPrice((prevTotalPrice) => prevTotalPrice + quantity);
    updateTotalPrice((prevTotalPrice) => {
      prevTotalPrice + productDetail.price * quantity;
    });
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
