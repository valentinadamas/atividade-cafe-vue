<script setup>
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'

const route = useRoute()

const isActive = (name) => route.name === name
</script>

<template>
  <header class="topo">
    <div class="conteudo-topo">
      <div class="caixa-logo">
        <img :src="logo" alt="Logo" class="logo" />
      </div>

      <nav class="menu">
        <ul class="lista-menu">
          <li>
            <RouterLink to="/" :class="{ selecionado: isActive('home') }">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/avaliar" :class="{ selecionado: isActive('avaliar') }">Avaliar</RouterLink>
          </li>
          <li>
            <RouterLink to="/ranking" :class="{ selecionado: isActive('ranking') }">Ranking</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
