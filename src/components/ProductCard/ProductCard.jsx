import React from 'react';
import styles from "./ProductCard.module.scss"

const ProductCard = ({name, price, image, onClick}) => {
  return ( <div className={styles.card} onClick={onClick}>
    <div className={styles.image}><img src={image} alt={name} /></div>
    <h1>{name}</h1>
    <p>{price} руб.</p>
  </div> );
}
 
export default ProductCard;