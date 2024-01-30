<template>
  <div>
    <div class="container">
      <span class="hook-text" v-for="(hook, index) in hooks" :key="index" v-text="hook"></span>
      <button class="button">
        <ButtonText />
      </button>
    </div>
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
.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.hook-text {
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  color: #333;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.5;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: #0056b3;
}
</style>
