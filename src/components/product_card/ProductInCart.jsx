import React, { useEffect, useState } from "react";
import styles from "./ProductInCart.module.css";

import delIcon from "../../image/Del.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, reduceQuantity } from "../../store/cartSlice";

export default function ProductInCart({ data }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.counter.items);

  const { id, title, imgUrl, price } = data;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const item = items.find((item) => item.id === id);
    setCount(item.count);
  }, [id, items]);

  const onClickReduceQuantity = () => {
    if (count === 0) {
      return;
    }
    dispatch(reduceQuantity(id));
  };

  const onClickAddQuantity = () => {
    const product = {
      id,
      count: +1,
    };

    dispatch(addItem(product));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstColumn}>
        <div className={styles.imgWrapper}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={styles.qtyChange}>
          <span onClick={onClickReduceQuantity}>-</span>
          <span>{count}</span>
          <span onClick={onClickAddQuantity}>+</span>
        </div>
      </div>

      <div className={styles.secondColumn}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price} ₽</span>
      </div>
      <span className={styles.delIcon}>
        <img src={delIcon} alt="" />
      </span>

      <span className={styles.priceFinal} style={{ color: "black" }}>
        {price * count} ₽
      </span>
    </div>
  );
}
