"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

type CartDataType = {
  id: number;
  year: string;
  location_id: number;
  subject_id: number;
  start_time: string;
  end_time: string;
  day: string;
  type: string;
  price: string;
  loc_name: string;
  full_name: string;
};

interface BasketContextType {
  cartData: CartDataType[];
  addToCart: (data: CartDataType) => void;
  removeToCart: (id: number) => void;
}

export const BasketContext = createContext<BasketContextType | null>(null);

const BasketContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartData, setCartData] = useState<CartDataType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartData = localStorage.getItem("meow_cart_data");
      if (storedCartData) {
        setCartData(JSON.parse(storedCartData));
      }
    }
  }, []);
  const addToCart = (data: CartDataType) => {
    const storeData = JSON.stringify([...cartData, data]);
    if (typeof window !== "undefined") {
      localStorage.setItem("meow_cart_data", storeData);
    }
    setCartData(JSON.parse(storeData));
  };

  const removeToCart = (id: number) => {
    const filterData = cartData.filter((f) => f.id !== id);
    const storeData = JSON.stringify([...filterData]);
    if (typeof window !== "undefined") {
      localStorage.setItem("meow_cart_data", storeData);
    }
    setCartData(JSON.parse(storeData));
  };

  return (
    <BasketContext.Provider value={{ cartData, addToCart, removeToCart }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
