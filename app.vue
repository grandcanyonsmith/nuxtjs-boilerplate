<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1 class="logo">Xpress A/C Specialists</h1>
        <nav class="nav">
          <a href="#services" class="nav-link">Services</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h2 class="hero-title">Professional Automotive A/C Services</h2>
          <p class="hero-subtitle">
            Xpress A/C Specialists offers a full range of automotive A/C services to keep you comfortable on the road. 
            We handle cars, trucks, and SUVs of all makes and models.
          </p>
          <button class="cta-button">
            <ButtonText />
          </button>
        </div>
      </div>
    </section>

    <!-- Marketing Hooks Section -->
    <section class="hooks-section">
      <div class="container">
        <div class="hooks-grid">
          <div class="hook-card" v-for="(hook, index) in hooks" :key="index">
            <p class="hook-text" v-text="hook"></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🔍</div>
            <h3 class="service-title">A/C Inspection</h3>
            <p class="service-description">
              Our thorough system check diagnoses any underlying issues so we can fix them before they become major problems.
            </p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">❄️</div>
            <h3 class="service-title">Refrigerant Recharge</h3>
            <p class="service-description">
              We restore your system's cooling power by recharging refrigerant levels, ensuring optimal cold air output.
            </p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🔧</div>
            <h3 class="service-title">Compressor Replacement</h3>
            <p class="service-description">
              We replace faulty compressors, the heart of your A/C system, to get your car climate control back on track.
            </p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🔎</div>
            <h3 class="service-title">Leak Detection & Repair</h3>
            <p class="service-description">
              With specialized tools, we pinpoint leaks in hoses or seals and fix them before they cause major damage.
            </p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">⚙️</div>
            <h3 class="service-title">Evaporator & Condenser Service</h3>
            <p class="service-description">
              Proper care for evaporators and condensers keeps your system running efficiently, prolonging component lifespan.
            </p>
          </div>
          
          <div class="service-card">
            <div class="service-icon">🌡️</div>
            <h3 class="service-title">Climate Control Diagnostics</h3>
            <p class="service-description">
              We troubleshoot electronic climate control issues to ensure precise temperature regulation in any weather.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">Get Your A/C Fixed Today</h2>
        <p class="contact-text">
          Don't let a broken A/C system ruin your drive. Contact Xpress A/C Specialists for fast, reliable service.
        </p>
        <button class="cta-button large">
          <ButtonText />
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Xpress A/C Specialists. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { HOOKS } from './hooks.js';

export default {
  data() {
    return {
      hooks: HOOKS
    }
  }
}
</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
}

.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #87CEEB;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(30, 60, 114, 0.8), rgba(42, 82, 152, 0.8)), 
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23f0f8ff" width="1200" height="600"/><path fill="%23e6f3ff" d="M0,300 Q300,200 600,300 T1200,300 V600 H0 Z"/></svg>');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

/* Hooks Section */
.hooks-section {
  padding: 80px 0;
  background-color: #f8f9fa;
}

.hooks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.hook-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hook-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.hook-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
  margin: 0;
}

/* Services Section */
.services-section {
  padding: 80px 0;
  background-color: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1e3c72;
  font-weight: bold;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  border-color: #2a5298;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1e3c72;
  font-weight: bold;
}

.service-description {
  color: #666;
  line-height: 1.6;
  font-size: 1rem;
}

/* Contact Section */
.contact-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: white;
  text-align: center;
}

.contact-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Button Styles */
.cta-button {
  background: linear-gradient(45deg, #FF6B6B, #FF8E8E);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
}

.cta-button:hover {
  background: linear-gradient(45deg, #FF5252, #FF7575);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}

.cta-button.large {
  padding: 20px 40px;
  font-size: 1.3rem;
}

/* Footer */
.footer {
  background-color: #1a1a1a;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .hooks-grid {
    grid-template-columns: 1fr;
  }
  
  .header .container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav {
    gap: 1rem;
  }
}
</style>
