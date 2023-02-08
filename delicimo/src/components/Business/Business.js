import React from 'react';
import "./Business.css";

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

class Business extends React.Component {
    render() {
        return (
          <div className="Business">
            <div className="image-container">
              <img src="https://i.imgur.com/QDw2hsn.jpg" alt="" />
            </div>
            <h2>{business.name}</h2>
            <div className="Business-information">
              <div className="Business-address">
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{business.state} {business.zipCode}</p>
              </div>
              <div className="Business-reviews">
                <h3>{business.category}</h3>
                <h3 className="rating">{business.rating} stars</h3>
                <p>{business.reviewCount} reviews</p>
              </div>
            </div>
          </div>
        );
    }
}

export default Business;