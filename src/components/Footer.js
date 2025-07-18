import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.addressSection}>
            <span style={styles.locationIcon}>📍</span>
            <p style={styles.address}>287/1, Kamaraj Street, D.G.Pudur, Erode</p>
          </div>
        </div>

        {/* Map Section */}
        <div style={styles.mapContainer}>
          <iframe
            title="Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.4423679056595!2d77.30556606955338!3d11.496546899293717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba923007a3570d7%3A0x62b6008970a0f26e!2sKaliyur%20Pirivu%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1749085607400!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Order & Payment Info */}
        <div style={styles.infoCard} className="info-card">
          <div style={styles.cardContent}>
            <div style={styles.orderSection}>
              <span style={styles.icon}>📞</span>
              <span style={styles.infoText}>
                <strong>Bulk Orders:</strong> Call <a href="tel:9788375194" style={styles.phoneLink} className="phone-link">9788375194</a>
              </span>
            </div>
            <div style={styles.orderSection}>
              <span style={styles.icon}>💳</span>
              <span style={styles.infoText}>
                <strong>Payment:</strong> Link sent via WhatsApp after order placed
              </span>
            </div>
            <div style={styles.orderSection}>
              <span style={styles.icon}>💬</span>
              <span style={styles.infoText}>
                <strong>Updates:</strong> Holiday notifications via WhatsApp/phone call
              </span>
            </div>
          </div>
        </div>

        {/* Payment Policy */}
        <div style={styles.policySection}>
          <span style={styles.policyIcon}>✅</span>
          <span style={styles.policyText}>
            Payment is accepted <strong>after</strong> the order is received by customers
          </span>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #2ed573, #7bed9f)',
    color: '#fff',
    padding: '40px 20px 20px',
    marginTop: '40px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 -10px 40px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  },
  header: {
    textAlign: 'center',
    marginBottom: '25px',
    position: 'relative'
  },
  addressSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    background: 'rgba(255,255,255,0.1)',
    padding: '15px 25px',
    borderRadius: '25px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
  },
  locationIcon: {
    fontSize: '1.5rem',
    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
    animation: 'pulse 2s infinite'
  },
  address: {
    fontSize: '1.1rem',
    margin: 0,
    color: '#fff',
    fontWeight: '500',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  },
  mapContainer: {
    marginBottom: '25px',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '3px solid rgba(255,255,255,0.3)',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    transform: 'translateY(0)',
    transition: 'all 0.3s ease'
  },
  map: {
    border: 0,
    display: 'block',
    filter: 'brightness(0.9) contrast(1.1)'
  },
  infoCard: {
    background: 'linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '20px',
    padding: '25px',
    marginBottom: '25px',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transform: 'translateY(0)',
    transition: 'all 0.3s ease'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  orderSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.3s ease'
  },
  icon: {
    fontSize: '1.4rem',
    minWidth: '30px',
    filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))',
    animation: 'float 3s ease-in-out infinite'
  },
  infoText: {
    fontSize: '1rem',
    color: '#fff',
    flex: 1,
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  },
  phoneLink: {
    color: '#FFD700',
    textDecoration: 'none',
    fontWeight: '700',
    padding: '5px 12px',
    borderRadius: '20px',
    background: 'rgba(255,215,0,0.2)',
    border: '1px solid rgba(255,215,0,0.3)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255,215,0,0.3)'
  },
  policySection: {
    background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8))',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '25px',
    padding: '20px 25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    backdropFilter: 'blur(10px)',
    transform: 'translateY(0)',
    transition: 'all 0.3s ease'
  },
  policyIcon: {
    fontSize: '1.4rem',
    filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))',
    animation: 'bounce 2s infinite'
  },
  policyText: {
    margin: 0,
    fontSize: '1rem',
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: '500',
    textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
  }
};

// Enhanced CSS animations and hover effects
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-3px); }
    }
    
    .info-card:hover {
      transform: translateY(-8px) !important;
      box-shadow: 0 20px 50px rgba(0,0,0,0.3) !important;
      background: linear-gradient(145deg, rgba(255,255,255,0.35), rgba(255,255,255,0.15)) !important;
    }
    
    .phone-link:hover {
      background: rgba(255,215,0,0.9) !important;
      color: #2c3e50 !important;
      transform: scale(1.05) !important;
      box-shadow: 0 6px 20px rgba(255,215,0,0.5) !important;
    }
    
    .info-card .orderSection:hover {
      background: rgba(255,255,255,0.1) !important;
      border-radius: 15px !important;
      padding: 15px !important;
      margin: 0 -5px !important;
    }
    
    .info-card .orderSection:hover .icon {
      transform: scale(1.2) !important;
    }
    
    .policySection:hover {
      transform: translateY(-5px) scale(1.02) !important;
      box-shadow: 0 15px 40px rgba(0,0,0,0.25) !important;
    }
    
    .mapContainer:hover {
      transform: translateY(-5px) !important;
      box-shadow: 0 20px 50px rgba(0,0,0,0.3) !important;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .addressSection {
        flex-direction: column !important;
        text-align: center !important;
      }
      
      .orderSection {
        flex-direction: column !important;
        text-align: center !important;
        gap: 8px !important;
      }
      
      .policySection {
        flex-direction: column !important;
        text-align: center !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Footer;