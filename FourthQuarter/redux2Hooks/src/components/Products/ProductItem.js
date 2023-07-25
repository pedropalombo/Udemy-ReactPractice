import React from 'react';

import Card from '../UI/Card';
import './ProductItem.css';
import { useStore } from '../../hooks-store/store';


const ProductItem = props => {
  //only getting payload from store
  // [0] => globalState | [1] => dispatch
  const dispatch = useStore(false)[1];  //shouldListen == false => doesn't re-render all DOM components

  const toggleFavHandler = () => {  
    //triggering 'TOGGLE_FAV' action set on products-store.js, together with the product's ID
    dispatch('TOGGLE_FAV', props.id);
  
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;