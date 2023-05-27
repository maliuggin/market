import React from 'react';
import styles from "./BasketButton.module.scss"

const BasketButton = ({num, setIsShow, isShow}) => {

  const basketSvg = (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>)

  const crossSvg = (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg>)

  return ( <div className={styles.basketButton} onClick={() => setIsShow(!isShow)}>
   {isShow ?
    <>
    {crossSvg}
    </>
   :
    <>
      {basketSvg}
      {num ? <div className={styles.circle}>{num > 99 ? "99+" : num}</div> : ""} 
    </>
   }
  </div> );
}
 
export default BasketButton;