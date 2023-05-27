import React from 'react';
import "./Market.scss"
import { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import ProductCardModal from './components/ProductCardModal/ProductCardModal';
import BasketButton from './components/BasketButton/BasketButton';
import BasketModal from './components/BasketModal/BasketModal';
import FilterSize from './components/FilterSize/FilterSize';

const Market = () => {
  const [products, setProducts] = useState([
    {
      name: "Кепка бейсбольная",
      price: 450,
      availableSizes: ["s", "m", "l", "xl"],
      img: "https://ae04.alicdn.com/kf/HTB1_4xiX_JYBeNjy1zeq6yhzVXay/-.jpg",
      id: 1,
      description: "Красивая удобная кепочка, подойдет в любую погоду, хороший аксессуар.",
    },
    {
      name: "Футболка 'Я русский'",
      price: 2000,
      availableSizes: ["s", "l"],
      img: "https://maek-mir.ru/image/cache/data/catalog/muzhskie-futbolki/5/ya_russkiy_612-1000x1000.jpg",
      id: 2,
      description: "Очень красивая футболка. Качественный материал - хлопок 100%. Турецкое качество! Шик и Блеск!.",
    },
    {
      name: "Джинсы",
      price: 1200,
      availableSizes: ["s", "m", "l"],
      img: "https://ae04.alicdn.com/kf/He9677be3fad74c4c8785b0e76b9207950.jpg",
      id: 3,
      description: "Хорошие джинсы унисекс модные. Сидят хорошо на любом человека. Материал бомбезный!",
    },
    {
      name: "Футболка Смешная",
      price: 4000,
      availableSizes: ["s", "m"],
      img: "https://litb-cgis.rightinthebox.com/images/500x500/202011/qhsn1605715062300.jpg",
      id: 4,
      description: "Очень красивая футболка. Топ за свои деньги! Бери бери, не пожалеешь!",
    },
    {
      name: "Футболка Смешная",
      price: 4000,
      availableSizes: ["s", "m"],
      img: "https://litb-cgis.rightinthebox.com/images/500x500/202011/qhsn1605715062300.jpg",
      id: 5,
      description: "Очень красивая футболка. Топ за свои деньги! Бери бери, не пожалеешь!",
    },
    {
      name: "Футболка Смешная",
      price: 4000,
      availableSizes: ["s", "m"],
      img: "https://litb-cgis.rightinthebox.com/images/500x500/202011/qhsn1605715062300.jpg",
      id: 6,
      description: "Очень красивая футболка. Топ за свои деньги! Бери бери, не пожалеешь!",
    },
    {
      name: "Футболка Смешная",
      price: 4000,
      availableSizes: ["s", "m"],
      img: "https://litb-cgis.rightinthebox.com/images/500x500/202011/qhsn1605715062300.jpg",
      id: 7,
      description: "Очень красивая футболка. Топ за свои деньги! Бери бери, не пожалеешь!",
    },
  ]);

  const [modalIsShow, setModalIsShow] = useState({
    isShow: false,
    index: null,
  })

  const [basketModalIsShow, setBasketModalIsShow] = useState(false)

  const [productsInBasket, setProductsInBasket] = useState([])
  
  const [productsCopy, setProductsCopy] = useState(products);


  return ( <div className='market'>
    <h1 className='title'>Магазин товаров</h1>
    <FilterSize productsCopy={productsCopy} setProducts={setProducts}/>
    <div className='cards-list'>
      {products.map((product, index) => <ProductCard
       onClick={() => setModalIsShow({isShow: true, index: index})}
       key={product.id}
       name={product.name}
       price={product.price}
       image={product.img}/>)}
    </div>
    {modalIsShow.isShow && <ProductCardModal
     product={products[modalIsShow.index]}
     setIsShow={setModalIsShow}
     prodInBasket={productsInBasket}
     setProdInBasket={setProductsInBasket}/>}
    <BasketButton num={productsInBasket.reduce((acc,prod) => acc + prod.qtyInBasket, 0)} setIsShow={setBasketModalIsShow} isShow={basketModalIsShow}/>
    {basketModalIsShow && <BasketModal
     prodInBasket={productsInBasket}
     setProdInBasket={setProductsInBasket}/>}
  </div> );
}
 
export default Market;