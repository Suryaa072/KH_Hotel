import React, { useState } from 'react';
import { ShoppingCart, User, Phone, MapPin, Star, Plus, IndianRupee } from 'lucide-react';

const HomePage = ({ 
  hotelInfo, 
  menuItems, 
  cart, 
  addToCart, 
  setCurrentView, 
  getCategories 
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="brand-section">
            <div className="brand-main">
              <h1 className="hotel-name">{hotelInfo.name}</h1>
              
            </div>
            <p className="slogan">"{hotelInfo.slogan}"</p>
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>{hotelInfo.phone}</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>{hotelInfo.address}</span>
              </div>
            </div>
          </div>
          <div className="header-actions">
            
            <div className="cart-container">
              <button
                onClick={() => setCurrentView('cart')}
                className="btn btn-primary cart-btn"
              >
                <ShoppingCart className="btn-icon" />
                <span>Cart ({cart.length})</span>
              </button>
              {cart.length > 0 && (
                <div className="cart-badge">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="category-filter">
          {getCategories().map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} className="food-image" />
                <div className="category-tag">{item.category}</div>
              </div>
              <div className="card-content">
                <h3 className="food-name">{item.name}</h3>
                <p className="tamil-name">{item.tamilName}</p>
                <p className="description">{item.description}</p>
                <div className="card-footer">
                  <div className="price">
                    <IndianRupee className="rupee-icon" />
                    <span className="price-text">{item.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-add"
                  >
                    <Plus className="btn-icon" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;