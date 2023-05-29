import React from 'react';
const SortProducts = ({setProd}) => {
  
const sortingProducts = (value) => {
  if(value === "price") {
    setProd(products => console.log(products) || [...products].sort((a,b) => a.price-b.price)) 
  }
  if(value === "name") {
    setProd(products => [...products].sort((a,b) => a[value].localeCompare(b[value]))) 
  }
}


  return ( <select name="sorting" onChange={(e) => sortingProducts(e.target.value)}>
    <option value={12} disabled selected>Сортировка по</option>
    <option value="name">По названию</option>
    <option value="price">По цене</option>
  </select> );
}
 
export default SortProducts;