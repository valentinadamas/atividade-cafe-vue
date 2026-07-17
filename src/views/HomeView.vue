<script setup>
import MetricCard from '../components/MetricCard.vue'
import xicara from '../assets/xicara.png'
import pessoa from '../assets/logo_pessoa.png'
import pasta from '../assets/pasta.png'
import trofeu from '../assets/trofeu.png'
import flor from '../assets/flor.png'
</script>

<template>
  <main class="principal">
    <section class="inicio">
      <img :src="xicara" alt="Xícara de café" class="imagem-inicio" />

      <h1 class="titulo">COFFEE QUALITY CHALLENGE</h1>

      <p class="texto">
        Avalie, compare e descubra os melhores cafés através dos seus sentidos.
      </p>
    </section>

    <section class="cards">
      <MetricCard title="Cafés Participantes" :value="4" :icon="pessoa" variant="cafe-card" />
      <MetricCard title="Avaliações Registradas" :value="0" :icon="pasta" variant="avaliacao-card" />
      <MetricCard title="Café com maior nota" :value="9.3" description="Bourbon Amarelo" :icon="trofeu" variant="nota-card" />
    </section>

    <section class="botao-area">
      <RouterLink to="/avaliar" class="botao">
        <img :src="xicara" alt="" class="icone-botao" />
        Ver Avaliações
      </RouterLink>
    </section>

    <section class="sobre">
      <div class="conteudo-sobre">
        <img :src="flor" alt="Flor de café" class="imagem-sobre" />

        <div class="texto-sobre">
          <h3 class="titulo-sobre">Faça a diferença avaliando!</h3>

          <p class="descricao-sobre">
            Cada avaliação é importante para que possamos valorizar o trabalho dos produtores e a qualidade do café brasileiro.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
