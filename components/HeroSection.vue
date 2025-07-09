<template>
  <section class="hero-gradient text-white section-padding relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
    
    <!-- Animated background elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full opacity-5 animate-pulse" style="animation-delay: 2s;"></div>
    
    <div class="container-custom relative">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main heading -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 fade-in">
          <span class="block">Professional</span>
          <span class="block text-blue-200">A/C Services</span>
        </h1>
        
        <!-- Subheading -->
        <p class="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed fade-in fade-in-delay-1">
          Keep your vehicle comfortable year-round with our expert automotive A/C services. 
          Fast, reliable, and affordable solutions for all makes and models.
        </p>
        
        <!-- Features list -->
        <div class="flex flex-wrap justify-center gap-6 mb-10 fade-in fade-in-delay-2">
          <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-sm font-medium">Same-Day Service</span>
          </div>
          <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-sm font-medium">Certified Technicians</span>
          </div>
          <div class="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-sm font-medium">All Makes & Models</span>
          </div>
        </div>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 fade-in fade-in-delay-3">
          <button 
            class="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
            @click="scrollTo('#contact')"
          >
            Get Free Quote
          </button>
          <button 
            class="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 w-full sm:w-auto justify-center"
            @click="scrollTo('#services')"
          >
            <span class="font-medium">View Services</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Stats section -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in fade-in-delay-3">
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-blue-200 mb-2">500+</div>
          <div class="text-sm text-blue-100">Happy Customers</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-blue-200 mb-2">15+</div>
          <div class="text-sm text-blue-100">Years Experience</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-blue-200 mb-2">100%</div>
          <div class="text-sm text-blue-100">Satisfaction Rate</div>
        </div>
        <div class="text-center">
          <div class="text-3xl md:text-4xl font-bold text-blue-200 mb-2">24/7</div>
          <div class="text-sm text-blue-100">Support Available</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (target) => {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>