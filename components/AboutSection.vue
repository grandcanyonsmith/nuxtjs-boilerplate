<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span class="gradient-text">Xpress A/C?</span>
          </h2>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            For over 15 years, we've been the trusted choice for automotive A/C services. 
            Our certified technicians combine expertise with state-of-the-art equipment to deliver 
            exceptional results every time.
          </p>

          <!-- Features -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Certified Technicians</h3>
                <p class="text-gray-600 text-sm">ASE-certified professionals with extensive A/C training</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Fast Service</h3>
                <p class="text-gray-600 text-sm">Most repairs completed same day</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Fair Pricing</h3>
                <p class="text-gray-600 text-sm">Transparent quotes with no hidden fees</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-3">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Warranty Protection</h3>
                <p class="text-gray-600 text-sm">12-month warranty on all repairs</p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <button 
            class="btn-primary text-lg px-8 py-4"
            @click="scrollTo('#contact')"
          >
            Schedule Service Today
          </button>
        </div>

        <!-- Image/Stats -->
        <div class="relative">
          <!-- Main Content Card -->
          <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-6">Our Track Record</h3>
            
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">15+</div>
                <div class="text-blue-100 text-sm">Years in Business</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">500+</div>
                <div class="text-blue-100 text-sm">Satisfied Customers</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">98%</div>
                <div class="text-blue-100 text-sm">Customer Satisfaction</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold mb-2">24/7</div>
                <div class="text-blue-100 text-sm">Emergency Service</div>
              </div>
            </div>

            <!-- Certifications -->
            <div class="border-t border-blue-500 pt-6">
              <h4 class="font-semibold mb-4">Certifications & Memberships</h4>
              <div class="space-y-2 text-sm">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  ASE Certified Technicians
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Better Business Bureau Member
                </div>
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  EPA 609 Certified
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </div>
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