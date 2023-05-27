import React from 'react';
import "./Modal.scss"
const Modal = ({children}) => {
  return ( <div className='modal-body'>
    <div className='modal-menu'>
      {children}
    </div>
  </div> );
}
 
export default Modal;