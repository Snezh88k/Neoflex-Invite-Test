import React from "react";
import styles from "./Footer.module.css";

import vkIcon from "../../image/VK.svg";
import tlIcon from "../../image/Telegram.svg";
import wtIcon from "../../image/Whatsapp.svg";
import LangIcon from "../../image/Lang.svg";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.logo}>
        <span>QPICK</span>
      </div>
      <div className={styles.links}>
        <ul>
          <li>Избранное</li>
          <li>Корзина</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className={styles.service}>
        <span>Условия сервиса</span>
        <div className={styles.selectLang}>
          <img src={LangIcon} alt="" />
          <span>Рус</span>
          <span>Eng</span>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <img src={vkIcon} alt="" />
        <img src={tlIcon} alt="" />
        <img src={wtIcon} alt="" />
      </div>
    </div>
  );
}
