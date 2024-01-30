<template>
  <div>
    <div class="container">
      <span v-for="(hook, index) in hooks" :key="index" v-text="hook"></span>
      <button>
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
