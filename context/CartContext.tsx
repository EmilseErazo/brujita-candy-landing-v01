'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type CartItem = {
    id: string | number;
    title: string;
    price: number; // Keeps compatibility, but will represent the base price (usually cash)
    priceCash: number;
    priceCard: number;
    image: string;
    quantity: number;
};

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: any) => void;
    removeFromCart: (id: string | number) => void;
    updateQuantity: (id: string | number, quantity: number) => void;
    clearCart: () => void;
    totalPrice: number; // This will be a derived value based on a payment method state if we moved it here, but for now we can keep it as sum of 'price' * quantity
    isCartOpen: boolean;
    toggleCart: () => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (error) {
                console.error("Failed to parse cart from local storage", error);
            }
        }
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product: any) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Ensure we have both prices. If not provided, fallback to price for both or calculate card price
                const priceCash = product.priceCash || product.price;
                const priceCard = product.priceCard || (product.price * 1.2); // Fallback 20% markup if not specified

                return [...prevItems, {
                    id: product.id,
                    title: product.title,
                    price: priceCash, // Default to cash price for the main price field
                    priceCash: priceCash,
                    priceCard: priceCard,
                    image: product.image,
                    quantity: 1
                }];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: string | number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string | number, quantity: number) => {
        if (quantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.priceCash * item.quantity), 0); // Defaulting to cash price for now
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalPrice,
            isCartOpen,
            toggleCart,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
