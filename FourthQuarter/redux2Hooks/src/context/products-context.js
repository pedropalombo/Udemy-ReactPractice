import React, { useState } from "react";

//creates context to be used
export const ProductsContext = React.createContext({
    products: [],
    toggleFav: (id) => {}
});

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    //copied from ./reducers/products.js
    const [productsList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]);

    const toggleFavourite = (productId) => {
        setProductsList(currentProdList => {
            //logic copied from ./store/reducers/products.js
            const prodIndex = currentProdList.findIndex(
                p => p.id === productId
            );
            const newFavStatus = !currentProdList[prodIndex].isFavorite;
            const updatedProducts = [...currentProdList];
            updatedProducts[prodIndex] = {
                ...currentProdList[prodIndex],
                isFavorite: newFavStatus
            };

            return updatedProducts;
        });
    };

    //returning filled Context components based on given products, together with a toggling method
    return (
        <ProductsContext.Provider 
            value={{ products: productsList, toggleFav: toggleFavourite}}>
            {props.children}
        </ProductsContext.Provider>
    );
};