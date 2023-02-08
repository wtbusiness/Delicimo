import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

const business = {
  imageSrc: "https://i.imgur.com/QDw2hsn.jpg",
  name: "Delicimo Pizza",
  address: "5040 Ellington Way",
  city: "Pizzaville",
  state: "NY",
  zipCode: "17098",
  category: "Italian",
  rating: 4.7,
  reviewCount: 95,
};

const businesses = [business, business, business, business, business, business, business];

class App extends React.Component {
  render () {
  return (
      <div className="App">
        <h1>Delicimo</h1>
        <SearchBar />
        <BusinessList business={businesses} /> 
      </div>
  );
}
}

export default App;
