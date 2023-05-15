import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.css";
import ProductCard from "../product_card/ProductCard";

export default function Catalog() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://64611a6f491f9402f49ea5c8.mockapi.io/Catalog")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.catalogWrapper}>
      <h3 className={styles.titleCategory}>Наушники</h3>
      <div className={styles.productsWrapper}>
        {products
          ? products.map((product) => {
              return <ProductCard key={product.id} data={product} />;
            })
          : ""}
      </div>
    </div>
  );
}
