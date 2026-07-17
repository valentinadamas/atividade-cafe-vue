<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'cafe-card',
  },
})
</script>

<template>
  <div class="card" :class="variant">
    <div class="circulo">
      <img :src="icon" alt="" class="icone-card" />
    </div>

    <div class="info-card">
      <p class="titulo-card">{{ title }}</p>
      <h2 class="numero-card">{{ value }}</h2>
      <p v-if="description" class="descricao-card">{{ description }}</p>
    </div>
  </div>
</template>
