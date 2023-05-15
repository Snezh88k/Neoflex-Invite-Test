import React from "react";

import ProductInCart from "../product_card/ProductInCart";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const totalPrice = useSelector((state) => state.counter.totalPrice);
  const products = useSelector((state) => state.counter.items);

  return (
    <div className={styles.cartWrapper}>
      <h3 className={styles.titleCategory}>Корзина</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={styles.prodWrapper}>
          {products
            ? products.map((product) => {
                return <ProductInCart key={product.id} data={product} />;
              })
            : ""}
        </div>
        <div className={styles.info}>
          <div className={styles.price}>
            <span>ИТОГО</span>
            <span>₽ {totalPrice}</span>
          </div>

          <div className={styles.blackBlock}>
            <span>Перейти к оформлению</span>
          </div>
        </div>
      </div>
    </div>
  );
}
