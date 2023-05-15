import React from "react";
import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

import starIcon from "../../image/star.svg";

export default function ProductCard({ data }) {
  const dispatch = useDispatch();

  const { id, title, rate, imgUrl, price } = data;

  const onClickAddQuantity = () => {
    const product = {
      id,
      title,
      rate,
      imgUrl,
      price,
      count: +1,
    };

    dispatch(addItem(product));
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={styles.description}>
        <div className={styles.firstRow}>
          <span>{title}</span>
          <span className={styles.price}>{price} ₽</span>
        </div>

        <div className={styles.secondRow}>
          <span className={styles.rate}>
            <img src={starIcon} alt="" />
            <span>{rate}</span>
          </span>
          <span className={styles.buy} onClick={onClickAddQuantity}>
            Купить
          </span>
        </div>
      </div>
    </div>
  );
}
