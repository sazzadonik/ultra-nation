import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // let totalPopulation = 0;
    // cart.forEach(element => {
    //     totalPopulation = totalPopulation +  +element.population;
    // });

    const totalPopulation = cart.reduce((sum, country)=> sum + country.population,0);
    return (
        <div>
            Population: {totalPopulation}
        </div>
    );
};

export default Cart;