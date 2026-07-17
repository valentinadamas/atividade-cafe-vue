<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="cafe">
    <div class="cafe-esquerda">
      <div class="grao-container">
        <img :src="icon" alt="Grão de café" class="grao-img" />
      </div>
      <div class="cafe-textos">
        <h3>{{ name }}</h3>
        <p>{{ origin }}</p>
      </div>
    </div>
    <RouterLink to="/avaliar" class="botao-avaliar">Avaliar</RouterLink>
  </div>
</template>
