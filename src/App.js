// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountry] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(countries => {
      setCountry(countries);
    })
    .catch(error => console.log(error));
  },[]);

  const handleAddCountry = (country)=> {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h6>Cart Item: {cart.length}</h6>
        <Cart cart = {cart}></Cart>
        {countries.map(country => 
          <Country country = {country} key = {country.alpha3Code} handleAddCountry = {handleAddCountry}></Country>
        )}
        
      </header>
    </div>
  );
}

export default App;
