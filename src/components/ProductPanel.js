

import React, { useState } from "react";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import CartContext from "../CartContext";
import "../App.css";

export default function ProductPanel() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const val = { cartItems, setCartItems, addToCart, removeFromCart };

    const products = [
    { id: 9, name: "Aurora Crown Diamond Necklace", price: "₹6,000", stock: 7, image: "https://i.pinimg.com/736x/09/20/fe/0920fe302d4352731a4edb34738f557e.jpg" },
    { id: 8, name: "Evra’s Signature Jewelry Set", price: "₹25,000", stock: 2, image: "https://i.pinimg.com/1200x/19/be/3e/19be3ee7ed7fc767afca02db3fe6db8b.jpg" },
    { id: 10, name: "Rose Quartz Bangles", price: "₹950", stock: 10, image: "https://i.pinimg.com/736x/91/6e/ed/916eed1008a7191799b9cb9bb40b2410.jpg"  },
    { id: 1, name: "Enchanted Accessories Collection", price: "₹800", stock: 15, image: "https://i.pinimg.com/1200x/a7/03/40/a7034071e8e429da16b1635521746b77.jpg" },
    { id: 2, name: "Serenity Diamond Pendant Necklace", price: "₹15,000", stock: 4, image: "https://i.pinimg.com/736x/a5/96/8f/a5968faba6d8dd17512f72740d888a77.jpg" },
    { id: 5, name: "Lustrous Crown Earrings", price: "₹3,200", stock: 5, image: "https://i.pinimg.com/1200x/b7/90/8a/b7908a553880c6d29770649b0c10526e.jpg"  },
    { id: 3, name: "Starlight Diamond Necklace", price: "₹18,500", stock: 3, image: "https://i.pinimg.com/1200x/82/17/0d/82170dc3e21c796b0d1d611000769a2c.jpg" },
    { id: 4, name: "Moonlit Diamond Drops", price: "₹2,500", stock: 6, image: "https://i.pinimg.com/736x/4a/d4/e1/4ad4e1a417d0cf0a073bd064f783342b.jpg"  },
    { id: 6, name: "Radiant Diamond Necklace", price: "₹8,000", stock: 5, image: "https://i.pinimg.com/1200x/dd/12/8f/dd128fbfe75b3da7f36a626c13e5a346.jpg"  },
    { id: 7, name: "Emerald Glow Bangles", price: "₹1,000", stock: 12, image: "https://i.pinimg.com/736x/14/6e/88/146e88341e77fe48e3802f55dea9fd48.jpg"  },
    { id: 11, name: "Crimson Radiance Bangles", price: "₹1,200", stock: 8, image: "https://i.pinimg.com/1200x/ad/c7/44/adc74420c20f1f90a1e2491445781a3b.jpg"  },
    { id: 12, name: "Divine Glow Diamond Bangles", price: "₹1,200", stock: 8, image: "https://i.pinimg.com/736x/02/27/a9/0227a910e499cd649a4fca3d43ad6b3e.jpg"  }
  ];

  return (
    <CartContext.Provider value={val}>
      <div className="product-cart-container">
        <div className="product-panel">
          {products.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              stock={p.stock}
              image={p.image}
            />
          ))}
        </div>
        <ShoppingCart />
      </div>
    </CartContext.Provider>
  );
}
