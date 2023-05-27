import React from 'react';
import styles from "../ProductCardModal/ProductCardModal.module.scss"

const ProductCardModalText = ({name, price, description}) => {
  return ( 
  <div className={styles.text}>
    <h1>{name}</h1>
    <p>Цена: {price} руб.</p>
    <p>Описание: {description}</p>
  </div> );
}
 
export default ProductCardModalText;