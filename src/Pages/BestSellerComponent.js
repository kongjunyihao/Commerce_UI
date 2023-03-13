import React, { useContext } from 'react';
import { CommerceContext } from '../App';
import Rating from "./Rating";
import "./BestProductStyle.css";
import { Link } from 'react-router-dom';

export default function BestProduct({product}){
    
    const Globalstate = useContext(CommerceContext);
    const dispatch = Globalstate.dispatch;
    // let opts = { format: "%s%v", symbol: "€" };
    return (
        <div className='productCard__wrapper'>
          <div>
            <Link to={`/${product.id}`} state={product}>
            <img className='productCard__img' src={product.image} alt='' />
            </Link>
            <h4>{product.name}</h4>
            <div className='ProductCard__price'>
              <h5>${product.price}</h5>
            </div>
            <div className='ProductCard__Rateing'>
              <Rating
                value={product.rating.rate}
                text={`${product.rating.count} reviews`}
              />
            </div>
            <button
              className='ProductCard__button'
              // onClick={() => addToCart(product)}
              onClick={() => {
                product.quantity = 1;
                dispatch({ type: "ADD", payload: product })
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
}