import { atom, useAtom } from "jotai";

// Define your atoms (state) using the `atom` function
export const showCartAtom = atom(false);
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

// in the componet import the hook and use the this state like below
// import { useCount } from '../src/store';

// function Home() {
//   const [count, setCount] = useCount();

//   const increment = () => {
//     setCount(count + 1);
//   };
