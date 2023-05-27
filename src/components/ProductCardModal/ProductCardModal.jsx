import React, {useState} from 'react';
import Modal from '../ui/modal/Modal';
import styles from './ProductCardModal.module.scss'
import ProductCardModalText from '../ProductCardModalText/ProductCardModalText';
import Sizes from '../Sizes/Sizes';
import Buttons from '../Buttons/Buttons';

const ProductCardModal = ({product, setIsShow, prodInBasket, setProdInBasket}) => {

  const [selectedSize, setSelectedSize] = useState("")

  return ( 
    <Modal>
      <div className={styles.body}>
        <div className={styles.image}><img src={product.img} alt={product.name} /></div>  
        <div>
          <ProductCardModalText
           name={product.name}
           price={product.price}
           description={product.description} />
          <Sizes
           availableSizes={product.availableSizes}
           selectedSize={selectedSize}
           setSelectedSize={setSelectedSize}/>
          <Buttons
          product={product}
          selectedSize={selectedSize}
          prodInBasket={prodInBasket}
          setProdInBasket={setProdInBasket} />
        </div>
        <button className={styles.btnClose} onClick={() => setIsShow({isShow: false,index: null,})}>X</button>
      </div>
    </Modal>
   );
}
 
export default ProductCardModal;