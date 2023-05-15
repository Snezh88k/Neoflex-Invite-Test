import React from "react";
import styles from "./Header.module.css";
import favIcon from "../../image/like.svg";
import cartIcon from "../../image/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) => state.counter.allCount);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logo}>
        <Link to="/">
          <span>QPICK</span>
        </Link>
      </div>
      <div className={styles.bar}>
        <div className={styles.favor}>
          <img src={favIcon} alt="fav" />
          <span className={styles.countLike}>3</span>
        </div>
        <div className={styles.cart}>
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <span className={styles.countCart}>{count}</span>
        </div>
      </div>
    </div>
  );
}
