<template>
  <section id="services" class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span class="gradient-text">Services</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive automotive A/C solutions to keep you cool and comfortable on the road
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card card-hover group"
        >
          <!-- Service Icon -->
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <component :is="service.icon" class="w-8 h-8 text-white" />
          </div>
          
          <!-- Service Content -->
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ service.title }}
          </h3>
          
          <p class="text-gray-600 mb-4 leading-relaxed">
            {{ service.description }}
          </p>
          
          <!-- Features -->
          <ul class="space-y-2 mb-6">
            <li 
              v-for="feature in service.features" 
              :key="feature"
              class="flex items-center text-sm text-gray-700"
            >
              <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {{ feature }}
            </li>
          </ul>
          
          <!-- Pricing -->
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-blue-600">{{ service.price }}</span>
            <span class="text-sm text-gray-500">{{ service.timeframe }}</span>
          </div>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">
            Not sure which service you need?
          </h3>
          <p class="text-gray-600 mb-8 text-lg">
            Our certified technicians will diagnose your A/C system and recommend the best solution for your vehicle.
          </p>
          <button 
            class="btn-primary text-lg px-8 py-4"
            @click="scrollTo('#contact')"
          >
            Get Free Diagnosis
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

const scrollTo = (target) => {
  const element = document.querySelector(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Icon components
const SearchIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
])

const SnowflakeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 2l3.09 6.26L22 9l-5.91 3.74L18 19l-6-4-6 4 1.91-6.26L2 9l6.91-.74L12 2z' })
])

const WrenchIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' })
])

const EyeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' })
])

const CogIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' })
])

const ThermometerIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
])

const services = [
  {
    icon: SearchIcon,
    title: 'A/C System Inspection',
    description: 'Comprehensive diagnostic evaluation of your entire A/C system to identify issues before they become costly repairs.',
    features: [
      'Complete system pressure test',
      'Refrigerant level check',
      'Component functionality assessment',
      'Leak detection scan'
    ],
    price: '$89',
    timeframe: '30-45 minutes'
  },
  {
    icon: SnowflakeIcon,
    title: 'Refrigerant Recharge',
    description: 'Restore your A/C system\'s cooling power with professional refrigerant recharge service.',
    features: [
      'R-134a & R-1234yf refrigerants',
      'Proper evacuation & recharge',
      'System pressure optimization',
      'Performance verification'
    ],
    price: '$129',
    timeframe: '45-60 minutes'
  },
  {
    icon: WrenchIcon,
    title: 'Compressor Replacement',
    description: 'Expert installation of new A/C compressors to restore full system functionality.',
    features: [
      'OEM & aftermarket options',
      'Complete system flush',
      'New receiver/drier installation',
      '12-month warranty'
    ],
    price: '$599',
    timeframe: '2-3 hours'
  },
  {
    icon: EyeIcon,
    title: 'Leak Detection & Repair',
    description: 'Advanced leak detection technology to locate and repair refrigerant leaks quickly.',
    features: [
      'UV dye leak detection',
      'Electronic leak detection',
      'Seal & gasket replacement',
      'System integrity testing'
    ],
    price: '$149',
    timeframe: '1-2 hours'
  },
  {
    icon: CogIcon,
    title: 'Evaporator & Condenser Service',
    description: 'Professional cleaning and maintenance of critical A/C system components.',
    features: [
      'Evaporator coil cleaning',
      'Condenser coil service',
      'Airflow optimization',
      'Efficiency improvement'
    ],
    price: '$199',
    timeframe: '1.5-2 hours'
  },
  {
    icon: ThermometerIcon,
    title: 'Climate Control Diagnostics',
    description: 'Advanced electronic diagnostics for complex climate control systems.',
    features: [
      'Electronic system scan',
      'Sensor calibration',
      'Control module testing',
      'Actuator functionality check'
    ],
    price: '$119',
    timeframe: '60-90 minutes'
  }
]
</script>