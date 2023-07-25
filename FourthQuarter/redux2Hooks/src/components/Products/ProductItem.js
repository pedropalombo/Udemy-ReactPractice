import React from 'react'; // { useContext }
//import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
import { useStore } from '../../hooks-store/store';
//import { ProductsContext } from '../../context/products-context';
//import { toggleFav } from '../../store/actions/products'; //exported to products-context.js

const ProductItem = props => {
  //const dispatch = useDispatch();

  //const toggleFav = useContext(ProductsContext).toggleFav;  //using Context for favourite products

  //only getting payload from store
  // [0] => globalState | [1] => dispatch
  const dispatch = useStore(false)[1];  //shouldListen == false => doesn't re-render all DOM components

  const toggleFavHandler = () => {
    //dispatch(toggleFav(props.id));
    //toggleFav(props.id);  //toggling product's 'favourite' status based on products ID (Context way)
    
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
