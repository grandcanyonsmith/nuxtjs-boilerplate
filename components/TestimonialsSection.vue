<template>
  <section id="testimonials" class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our <span class="gradient-text">Customers</span> Say
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it - hear from satisfied customers who trust us with their A/C needs
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-gray-50 rounded-2xl p-8 card-hover"
        >
          <!-- Rating Stars -->
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <svg v-for="star in 5" :key="star" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span class="ml-2 text-gray-600 text-sm">{{ testimonial.rating }}/5</span>
          </div>

          <!-- Testimonial Content -->
          <blockquote class="text-gray-700 mb-6 italic leading-relaxed">
            "{{ testimonial.content }}"
          </blockquote>

          <!-- Customer Info -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span class="text-white font-semibold text-lg">{{ testimonial.initials }}</span>
            </div>
            <div class="ml-4">
              <div class="font-semibold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-gray-600 text-sm">{{ testimonial.vehicle }}</div>
            </div>
          </div>

          <!-- Service Badge -->
          <div class="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {{ testimonial.service }}
          </div>
        </div>
      </div>

      <!-- Overall Stats -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">4.9</div>
            <div class="text-blue-100">Average Rating</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">500+</div>
            <div class="text-blue-100">Happy Customers</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">98%</div>
            <div class="text-blue-100">Return Rate</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">15+</div>
            <div class="text-blue-100">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    vehicle: "2019 Honda Civic",
    service: "Refrigerant Recharge",
    rating: 5,
    content: "Amazing service! My A/C was barely working and they had it ice cold in under an hour. The technician was knowledgeable and explained everything clearly. Highly recommend!"
  },
  {
    name: "Mike Rodriguez",
    initials: "MR",
    vehicle: "2017 Ford F-150",
    service: "Compressor Replacement",
    content: "I was quoted $1200 elsewhere, but Xpress A/C did the job for much less and it's been working perfectly for 6 months. Great value and excellent work!"
  },
  {
    name: "Emily Chen",
    initials: "EC",
    vehicle: "2020 Toyota Camry",
    service: "Leak Detection",
    rating: 5,
    content: "They found and fixed a leak that three other shops missed. Professional, fast, and honest pricing. My go-to for all A/C needs now."
  },
  {
    name: "David Thompson",
    initials: "DT",
    vehicle: "2016 Jeep Wrangler",
    service: "System Inspection",
    rating: 5,
    content: "Thorough inspection caught problems before they became expensive. Saved me hundreds! These guys know their stuff and care about their customers."
  },
  {
    name: "Lisa Martinez",
    initials: "LM",
    vehicle: "2018 Nissan Altima",
    service: "Climate Control Repair",
    rating: 5,
    content: "My climate control was acting up and they diagnosed it perfectly. Fixed it same day and explained how to prevent it in the future. Outstanding service!"
  },
  {
    name: "James Wilson",
    initials: "JW",
    vehicle: "2015 Chevrolet Silverado",
    service: "Evaporator Service",
    rating: 5,
    content: "Had a musty smell in my truck's A/C. They cleaned everything thoroughly and now it smells fresh and works better than ever. Very satisfied!"
  }
]
</script>