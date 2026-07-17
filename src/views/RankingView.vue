<script setup>
const rankings = [
  { position: '1º', name: 'Bourbon Amarelo', origin: 'Minas Gerais', score: '8.7' },
  { position: '2º', name: 'Arara', origin: 'Espírito Santo', score: '8.3' },
  { position: '3º', name: 'Catuaí Vermelho', origin: 'Paraná', score: '7.9' },
  { position: '4º', name: 'Mundo Novo', origin: 'Bahia', score: '7.2' },
]
</script>

<template>
  <main class="ranking">
    <section class="ranking-geral">
      <div class="texto-sobre">
        <h3 class="titulo-sobre">Ranking Geral</h3>
        <p class="descricao-sobre">
          Classificação dos cafés avaliados no campeonato, de acordo com a média das notas recebidas.
        </p>
      </div>

      <div class="card cafe-avaliado">
        <div class="info-card">
          <p class="titulo-card">Cafés Participantes</p>
          <h2 class="numero-card">4</h2>
        </div>
      </div>
    </section>

    <section class="card-ranking">
      <div v-for="item in rankings" :key="item.position" class="linha">
        <div class="posicao">{{ item.position }}</div>
        <div class="informacoes">
          <span class="cafe">{{ item.name }}</span>
          <span class="origem">{{ item.origin }}</span>
        </div>
        <div class="nota">{{ item.score }}</div>
      </div>
    </section>

    <section class="funcionamento">
      <div class="texto-sobre">
        <h3 class="titulo-sobre">Como funciona a pontuação?</h3>
        <p class="descricao-sobre">
          As notas são atribuídas de acordo com a metodologia da SCA, que avalia os cafés em diferentes critérios, como aroma, sabor, corpo e acidez. A média das notas recebidas determina a posição do café no ranking.
        </p>
      </div>
    </section>
  </main>
</template>
