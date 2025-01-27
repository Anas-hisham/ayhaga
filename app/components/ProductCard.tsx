// To Change All Component to Client Component
// "use client";

import React from "react";
import AddToCard from "./AddToCard";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-slate-700 duration-300">
      <div className={styles.card}>
        <AddToCard />
      </div>
    </div>
  );
};

export default ProductCard;
