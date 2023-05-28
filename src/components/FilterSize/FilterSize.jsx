import { useEffect } from 'react';
import { useState } from 'react';
import styles from "./FilterSize.module.scss"

//  s m l xl
const sizes =["s", "m", "l", "xl"]

const FilterSize = ({filter}) => {
  const [selectedSizes, setSelectedSizes] = useState([])

  const filterProducts = size => {
    setSelectedSizes(sz => sz.includes(size) ? sz.filter(sz => sz !== size) : [...sz, size])
  }

  useEffect(() => filter(selectedSizes), [selectedSizes])


  return ( <div className={styles.box}>
    {sizes.map(size => <div key={size} onClick={() => filterProducts(size)} className={`${styles.item} ${selectedSizes.includes(size) ? styles.active : ""}`}>{size}</div>)}
  </div> );
}
 
export default FilterSize;