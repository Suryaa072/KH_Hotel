import React from 'react';
import { ShoppingCart, Phone, Plus, Minus } from 'lucide-react';

const CartPage = ({ 
  cart, 
  updateQuantity, 
  calculateTotal, 
  customerInfo, 
  setCustomerInfo, 
  sendOrderToWhatsApp, 
  setCurrentView 
}) => {
  return (
    <div className="app-container">
      <header className="header simple">
        <div className="header-content">
          <h1 className="page-title">Your Cart</h1>
          <button
            onClick={() => setCurrentView('menu')}
            className="btn btn-secondary"
          >
            ← Back to Menu
          </button>
        </div>
      </header>

      <main className="main-content">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingCart className="empty-icon" />
            <h2>Your cart is empty</h2>
            <p>Add some delicious items to get started!</p>
            <button
              onClick={() => setCurrentView('menu')}
              className="btn btn-primary"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              <div className="cart-section">
                <h2>Order Items</h2>
                <div className="items-list">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} className="item-image" />
                      <div className="item-details">
                        <h3>{item.name}</h3>
                        <p className="tamil-name">{item.tamilName}</p>
                        <p className="item-price">₹{item.price} each</p>
                      </div>
                      <div className="quantity-controls">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn"
                        >
                          <Minus className="qty-icon" />
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn"
                        >
                          <Plus className="qty-icon" />
                        </button>
                        <div className="item-total">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-summary">
              <div className="summary-card">
                <h2>Customer Details</h2>
                <div className="form-section">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div className="total-section">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <div className="total-row final">
                    <span>Total:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                  <button
                    onClick={sendOrderToWhatsApp}
                    className="btn btn-whatsapp"
                  >
                    <Phone className="btn-icon" />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;