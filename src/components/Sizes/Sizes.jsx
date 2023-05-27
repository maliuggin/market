import React from 'react';
import { useState } from 'react';
import styles from "./Sizes.module.scss"

const sizes = ["s","m","l","xl"]

const Sizes = ({availableSizes, selectedSize, setSelectedSize}) => {


  function chooseSize(e) {
   if(e.target.innerText === selectedSize) {
    setSelectedSize("")
   } else {
    setSelectedSize(e.target.innerText)
    }
  }

  return ( <div className={styles.box}>
    {sizes.map(size => <button
     key={size}
     className={`${styles.item} ${selectedSize === size ? styles.active : ""}`}
     disabled={!availableSizes.includes(size)}
     onClick={chooseSize}
     >{size}</button>)}
  </div> );
}
 
export default Sizes;