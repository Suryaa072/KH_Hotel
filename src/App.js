import React, { useState } from 'react';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import Footer from './components/Footer'; 
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('menu');
  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({ name: '', phone: '' });

  // Hotel Information
  const hotelInfo = {
    name: 'Surya Harini Tifen Center',
    slogan: 'Here customers are almost regular',
    phone: '9788375194',
    address: '287/1, Kamaraj Street, D.G.Pudur, Erode'
  };

  // Menu items array would go here (not included as requested)
 const menuItems = [
    { 
      id: 1, 
      name: 'Idly (2 Idly - 1 set)', 
      tamilName: 'இட்லி', 
      price: 15, 
      category: 'Idly', 
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop',
      description: 'Soft and fluffy steamed rice cakes'
    },
    { 
      id: 2, 
      name: 'Dosa', 
      tamilName: 'தோசை', 
      price: 15, 
      category: 'Dosa', 
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Crispy rice and lentil crepe'
    },
    { 
      id: 3, 
      name: 'Roast', 
      tamilName: 'ரோஸ்ட்', 
      price: 30, 
      category: 'Dosa', 
      image: 'https://images.pexels.com/photos/20422129/pexels-photo-20422129/free-photo-of-food-on-plate-with-bowls-of-sauces.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Golden brown crispy dosa with ghee'
    },
    { 
      id: 4, 
      name: 'Egg Dosa', 
      tamilName: 'முட்டை தோசை', 
      price: 35, 
      category: 'Dosa', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyItiG7l_Nwv_k6ZF41moLYR85sOAbAJx6sw&s',
      description: 'Dosa topped with beaten egg'
    },
    { 
      id: 5, 
      name: 'Egg Roast', 
      tamilName: 'முட்டை ரோஸ்ட்', 
      price: 50, 
      category: 'Dosa', 
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&h=200&fit=crop',
      description: 'Roasted dosa with egg topping'
    },
    { 
      id: 6, 
      name: 'Onion Othappam', 
      tamilName: 'வெங்காய ஊத்தப்பம்', 
      price: 50, 
      category: 'Dosa', 
      image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/05/4-13.jpg',
      description: 'Thick pancake with vegetables'
    },
    { 
      id: 7, 
      name: 'Onion Roast', 
      tamilName: 'வெங்காய ரோஸ்ட்', 
      price: 50, 
      category: 'Dosa', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AHKlhKijos2ctq0_HzmHbRjxPKAC9B9KEA&s',
      description: 'Roasted dosa with onions'
    },
    { 
      id: 8, 
      name: 'Onion Dosa', 
      tamilName: 'வெங்காய தோசை', 
      price: 40, 
      category: 'Dosa', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDiTNN_pNgSJjpa76Mi9wVPwuP-iwa1RD_g&s',
      description: 'Dosa filled with onions'
    },
    { 
      id: 9, 
      name: 'Podi Dosa', 
      tamilName: 'பொடி தோசை', 
      price: 35, 
      category: 'Dosa', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpJ57fIWI5XGjFucY0CyxoxwAQy4PrHL3-g&s',
      description: 'Dosa with spiced powder'
    },
    { 
      id: 10, 
      name: 'Parotta', 
      tamilName: 'பரோட்டா', 
      price: 15, 
      category: 'Parotta', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTe6VHRZqrIZzuwS3iYSM7l5MpoL4pKZOYQ&s',
      description: 'Layered flatbread'
    },
    { 
      id: 11, 
      name: 'Kothu Parotta', 
      tamilName: 'கொத்து பரோட்டா', 
      price: 75, 
      category: 'Parotta', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri3rD33CsqqttxiVh2E6ZMqs7pS5kMIRSAg&s',
      description: 'Shredded parotta with curry'
    },
    { 
      id: 12, 
      name: 'Special Kothu', 
      tamilName: 'ஸ்பெஷல் கொத்து', 
      price: 90, 
      category: 'Parotta', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri3rD33CsqqttxiVh2E6ZMqs7pS5kMIRSAg&s',
      description: 'Special kothu with extra toppings'
    },
    { 
      id: 13, 
      name: 'Mutta Lapa', 
      tamilName: 'முட்டை லாப்பா', 
      price: 40, 
      category: 'Parotta', 
      image: 'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/20-nov/Srilankan_Ceylon_Egg_Muttai_Parotta_Paratha_Recipe-1_400.jpg',
      description: 'Egg curry preparation'
    },
    { 
      id: 14, 
      name: 'Mutta Veechu', 
      tamilName: 'முட்டை வீச்சு', 
      price: 35, 
      category: 'Parotta', 
      image: 'https://selfiefamily.com/wp-content/uploads/2021/07/Muttai-Veechu-Parotta.jpg',
      description: 'Scrambled eggs preparation'
    },
    { 
      id: 15, 
      name: 'Satha Veechu', 
      tamilName: 'சாதா வீச்சு', 
      price: 20, 
      category: 'Parotta', 
      image: 'https://i.pinimg.com/564x/49/85/82/4985824ce9ba8d7465196c08f3f96271.jpg',
      description: 'Plain scrambled eggs'
    },
    { 
      id: 16, 
      name: 'Half Boil', 
      tamilName: 'அரை வேக்கட்டு', 
      price: 15, 
      category: 'Egg', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnIVv1fwNUuv6MckbeR36jYB8WYAHv6wQg&s',
      description: 'Half boiled eggs'
    },
    { 
      id: 17, 
      name: 'Full Boil', 
      tamilName: 'முழு வேக்கட்டு', 
      price: 15, 
      category: 'Egg', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnIVv1fwNUuv6MckbeR36jYB8WYAHv6wQg&s',
      description: 'Hard boiled eggs'
    },
    { 
      id: 18, 
      name: 'Omelet', 
      tamilName: 'ஆம்லெட்', 
      price: 20, 
      category: 'Egg', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_5_pPbXOd8FxrfxHF7_AgIEYakhTd_0xqg&s',
      description: 'Fluffy egg omelet'
    },
    { 
      id: 19, 
      name: 'Kalaki', 
      tamilName: 'கலக்கி', 
      price: 15, 
      category: 'Egg', 
      image: 'data:image/jpeg;base64,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',
      description: 'Mixed egg preparation'
    },
    { 
      id: 20, 
      name: 'Egg Fry', 
      tamilName: 'முட்டை ஃப்ரை', 
      price: 20, 
      category: 'Egg', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedaZARQ2jV_5H-kpF_Hiyu54ZOWhr2vTe2g&s',
      description: 'Fried eggs sunny side up'
    }
  ];

  const ownerWhatsApp = '918883461677';

  // Cart functions
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // WhatsApp order function
  const sendOrderToWhatsApp = () => {
    if (!customerInfo.name || !customerInfo.phone) {
      alert('Please enter your name and phone number');
      return;
    }

    const orderDetails = cart.map(item => 
      `${item.name} (${item.tamilName}) x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const total = calculateTotal();
    const message = ` *New Order from ${hotelInfo.name}*\n\n *Customer:* ${customerInfo.name}\n *Phone:* ${customerInfo.phone}\n\n *Order Details:*\n${orderDetails}\n\n *Total Amount:* ₹${total}\n\n *Order Time:* ${new Date().toLocaleString()}\n\n *Hotel:* ${hotelInfo.address}`;
    
    const whatsappURL = `https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    setCart([]);
    setCustomerInfo({ name: '', phone: '' });
    alert('Order sent successfully! You will be redirected to WhatsApp.');
  };

  const getCategories = () => {
    const categories = ['All', ...new Set(menuItems.map(item => item.category))];
    return categories;
  };

  // Common props for components
  const commonProps = {
    hotelInfo,
    menuItems,
    cart,
    setCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    calculateTotal,
    customerInfo,
    setCustomerInfo,
    sendOrderToWhatsApp,
    setCurrentView,
    getCategories
  };

  return (
    <div>
      {currentView === 'menu' && <HomePage {...commonProps} />}
      {currentView === 'cart' && <CartPage {...commonProps} />}
      
      {/* Footer is always visible */}
      <Footer />
    </div>
  );
};

export default App;