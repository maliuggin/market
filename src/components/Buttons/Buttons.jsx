import React from 'react';
import Button from '../ui/button/Button';
import styles from "./Buttons.module.scss";

const Buttons = ({product,selectedSize, prodInBasket, setProdInBasket}) => {
  

  function addInBasket() {
    if (isProductInBasket) {
      setProdInBasket(prodInBasket.map(prod => prod.id === product.id && selectedSize === prod.selectedSize ? {...prod, qtyInBasket: prod.qtyInBasket + 1} : prod ).filter(prod => prod.qtyInBasket))
    } else {
      setProdInBasket([...prodInBasket,{...product, selectedSize, qtyInBasket: 1}])
    }
  }

  function removeFromBasket() {
    setProdInBasket(prodInBasket.map(prod => (prod.id === product.id && selectedSize === prod.selectedSize) ? (prod.qtyInBasket === 0 ) ? null : {...prod, qtyInBasket: prod.qtyInBasket - 1} : prod).filter(prod => prod && prod.qtyInBasket))
  }

  const isProductInBasket = !!prodInBasket.filter(prod => prod.id === product.id && selectedSize === prod.selectedSize && prod.qtyInBasket).length;

  return ( <div>
    {isProductInBasket ?
    <div className={styles.btns}>
      <Button onClick={removeFromBasket}>-</Button>
      <p>{prodInBasket.find(prod => prod.id === product.id && selectedSize === prod.selectedSize).qtyInBasket}</p>
      <Button onClick={addInBasket}>+</Button>
    </div>
    :
    <Button onClick={addInBasket} disabled={!selectedSize} style={{backgroundColor: !selectedSize && "gray"}}>Добавить в корзину</Button>
    }
  </div> );
}
 
export default Buttons;