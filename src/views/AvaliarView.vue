<script setup>
import { ref } from 'vue'
import CafeItem from '../components/CafeItem.vue'
import graoCafe from '../assets/grao-cafe.png'

const cafes = [
  { name: 'Bourbon Amarelo', origin: 'Origem: Minas Gerais' },
  { name: 'Catuaí Vermelho', origin: 'Origem: Paraná' },
  { name: 'Arara', origin: 'Origem: Espírito Santo' },
  { name: 'Mundo Novo', origin: 'Origem: Bahia' },
]

const cafeSelecionado = ref('Bourbon Amarelo')
const aroma = ref(8)
const doçura = ref(9)
const acidez = ref(7)
const corpo = ref(8)
const finalizacao = ref(9)

const media = ref(8.2)

const calcularMedia = () => {
  const notas = [aroma.value, doçura.value, acidez.value, corpo.value, finalizacao.value]
  const soma = notas.reduce((total, item) => total + Number(item), 0)
  media.value = Number((soma / notas.length).toFixed(1))
}
</script>

<template>
  <main class="pagina-avaliar">
    <section class="cafes">
      <h2 class="titulo-pagina">
        <span class="icone-titulo">☕</span>
        Cafés Participantes
      </h2>

      <section class="pagina-cafes">
        <CafeItem
          v-for="cafe in cafes"
          :key="cafe.name"
          :name="cafe.name"
          :origin="cafe.origin"
          :icon="graoCafe"
        />
      </section>

      <form class="formulario" @submit.prevent="calcularMedia">
        <h2 class="titulo-formulario">Nova Avaliação</h2>

        <div class="campo-grupo campo-largo">
          <label for="cafe">Café</label>
          <div class="select-wrapper">
            <select id="cafe" v-model="cafeSelecionado">
              <option>Bourbon Amarelo</option>
              <option>Catuaí Vermelho</option>
              <option>Arara</option>
              <option>Mundo Novo</option>
            </select>
          </div>
        </div>

        <div class="grid-atributos">
          <div class="campo-grupo">
            <label>Aroma</label>
            <input v-model.number="aroma" type="number" min="0" max="10" placeholder="8" />
          </div>

          <div class="campo-grupo">
            <label>Doçura</label>
            <input v-model.number="doçura" type="number" min="0" max="10" placeholder="9" />
          </div>

          <div class="campo-grupo">
            <label>Acidez</label>
            <input v-model.number="acidez" type="number" min="0" max="10" placeholder="7" />
          </div>

          <div class="campo-grupo">
            <label>Corpo</label>
            <input v-model.number="corpo" type="number" min="0" max="10" placeholder="8" />
          </div>

          <div class="campo-grupo">
            <label>Finalização</label>
            <input v-model.number="finalizacao" type="number" min="0" max="10" placeholder="9" />
          </div>

          <div class="campo-grupo box-media-container">
            <div class="box-media">
              <span class="media-label">Média Atual</span>
              <span class="media-valor">{{ media }}</span>
            </div>
          </div>
        </div>

        <button class="botao-salvar" type="submit">
          <span class="icone-salvar">💾</span>
          Salvar Avaliação
        </button>
      </form>

      <section class="metodologia">
        <h2>Metodologia</h2>
        <p>Citérios da metodologia SCA. Os critérios são avaliados de 0 a 10.</p>
        <ul>
          <li>Aroma</li>
          <li>Doçura</li>
          <li>Acidez</li>
          <li>Corpo</li>
          <li>Finalização</li>
        </ul>
      </section>
    </section>
  </main>
</template>
