<template>
  <q-page padding class="text-primary">
    <div class="content-container">
      <div class="text-and-image">
        <!-- Text Section -->
        <div class="text-container">
          <h1 class="text-white agrandir-thin-italic">Herzlich willkommen!</h1>
          <h6 class="text-content">
            Ich bin Kathrin, Musikerin, Pädagogin, Musikvermittlerin und Autorin.
          </h6>
        </div>
        <!-- Image Section -->
        <div class="image-container">
          <img
            src="/images/kathrin_aboutpage.png"
            alt="Kathrin with Euphonium"
            class="background-image"
          />
        </div>
      </div>
      <!-- Remaining Text Below -->
      <div class="text-container">
        <h6 class="text-content">
          Was gibt es über mich zu sagen?
          <ul style="list-style-type: none;" class="q-mb-xl">
            <li>Ich liebe es, kreativ und vielseitig zu sein.</li>
            <q-separator spaced inset vertical dark />
            <li>Ich mache gerne Musik und begeistere andere für Musik.</li>
            <q-separator spaced inset vertical dark />
            <li>Ich mag die Arbeit mit Menschen, daher liegt mir das Unterrichten sehr am Herzen.</li>
          </ul>
          Aus diesen drei Gründen habe ich Euphonium in Augsburg bei Markus Mikusch und Steven Mead und später in Luzern bei Thomas Rüedi studiert.
          <br /><br />
          Derzeit unterrichte ich an verschiedenen Musikschulen in Südtirol tiefes Blech und Musikalische Früherziehung.
          <br /><br />
          Um meine Kreativität auszuleben, habe ich eine Ausbildung zur Musikvermittlerin in Luzern absolviert und in diesem Rahmen mein Herzensprojekt, das Kinderbuch „die kleine Miss Euph,“ veröffentlicht.
          <br /><br />
          Möchtest du noch mehr über mich erfahren? Kontaktiere mich gerne!
        </h6>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
/* Main container */
.content-container {
  padding: 32px;
  @media (min-width: 768px){
    padding:80px;
  }
}

.text-and-image {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.image-container {
  flex: 1;
  max-width: 50%;
}

.background-image {
  width: 100%;
  max-height: 50vh;
  object-fit: contain;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0));
}

.text-container {
  flex: 1;
  padding: 10px;
  max-width: 800px;
  text-align: justify;
  margin: 0;
}

.text-content {
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .text-and-image {
    flex-direction: column;
  }

  .image-container,
  .text-container {
    max-width: 100%;
  }

  .text-container {
    padding: 10px 0;
  }
}
</style>
