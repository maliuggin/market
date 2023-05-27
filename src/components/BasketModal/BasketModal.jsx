import React from 'react';
import styles from "./BasketModal.module.scss"
import BasketModalProductCard from '../BasketModalProductCard/BasketModalProductCard';

const BasketModal = (props) => {
  return ( <div className={styles.menu}>
    <h1 className={styles.title}>Корзина товаров</h1>
    {props.prodInBasket.length ? 
    <>
     <p className={styles.text}>Всего товаров: <span className={styles.bold}>{props.prodInBasket.reduce((acc, prod) => acc + prod.qtyInBasket, 0)}</span></p>
     {props.prodInBasket.map(prod => prod.qtyInBasket ? <BasketModalProductCard {...props} product={prod} name={prod.name} price={prod.price} qty={prod.qtyInBasket} size={prod.selectedSize} img={prod.img} /> : null)}
     <p>Итого: <span className={styles.bold}>{props.prodInBasket.reduce((acc, prod) => acc + prod.qtyInBasket * prod.price, 0)}</span> руб.</p>
    </>
    :
    <p style={{fontSize: "20px", textAlign: "center"}}>Товаров нет</p>}
  </div> );
}
 
export default BasketModal;