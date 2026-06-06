import { createContext, useContext, useState, ReactNode } from "react";

export interface Treatment {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  savings: number;
  description: string;
}

interface CartContextType {
  cartItems: Treatment[];
  addToCart: (treatment: Treatment) => void;
  removeFromCart: (treatmentId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalSavings: () => number;
  isInCart: (treatmentId: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Treatment[]>([]);

  const addToCart = (treatment: Treatment) => {
    setCartItems((prev) => {
      // Check if item already exists
      if (prev.find((item) => item.id === treatment.id)) {
        return prev;
      }
      return [...prev, treatment];
    });
  };

  const removeFromCart = (treatmentId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== treatmentId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getTotalSavings = () => {
    return cartItems.reduce((total, item) => total + item.savings, 0);
  };

  const isInCart = (treatmentId: number) => {
    return cartItems.some((item) => item.id === treatmentId);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getTotalSavings,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

