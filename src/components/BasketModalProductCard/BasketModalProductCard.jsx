import React from 'react';
import styles from "./BasketModalProductCard.module.scss"
import Buttons from '../Buttons/Buttons';

const BasketModalProductCard = ({name, price, qty, size, img, ...props}) => {
  console.log(props)
  return ( <div className={styles.card}>
    <div className={styles.image}><img src={img} alt={name} /></div>
    <div className={styles.text}>
      <p>{name}</p>
      <p>Размер: {size}</p>
      <p>Кол-во: {qty} шт.</p>
      <p>Цена: {price} Х {qty} = {price*qty} руб.</p>
      <Buttons {...props} selectedSize={size} />
    </div>
  </div> );
}
 
export default BasketModalProductCard;