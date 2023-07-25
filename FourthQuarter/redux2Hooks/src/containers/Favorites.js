import React from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import { useStore } from '../hooks-store/store';

const Favorites = props => {

  //getting only globalState from store.js
  // \-> OBS: [0] => globalState | [1] => dispatch/payload
  const state = useStore()[0];

  //hook-based
  const favoriteProducts = state.products.filter(
    prod => 
      prod.isFavorite
  );
    
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
