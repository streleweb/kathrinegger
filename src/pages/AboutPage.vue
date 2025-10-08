<template>
  <q-page padding class="text-primary q-mt-xl q-mx-md q-mx-xl-lg">

  <!-- Mobile & Tablet Layout -->
  <div class="row lt-md q-col-gutter-md justify-center text-center">
    <div class="col-12 column items-center">
      <h1 class="text-white agrandir-thin-italic q-mb-md">Herzlich Willkommen!</h1>

      <div class="q-mb-md">
        <img
          src="/images/kathrin_aboutpage.png"
          alt="Kathrin with Euphonium"
          style="max-width:100%; height:auto;"
        />
      </div>

      <h6 class="text-body2" style="text-align: left;">
        <div class="q-mb-xl">
          Ich bin Kathrin, Musikerin, Pädagogin, Musikvermittlerin und Autorin.
        </div>

        <!-- 20px headline -->
        <div class="q-mb-lg text-accent" style="font-size:20px;">
          Was gibt es über mich zu sagen?
        </div>

        <ul class="q-mb-xl q-pl-none" style="list-style-type:none;">
          <li>Ich liebe es, kreativ und vielseitig zu sein.</li>
          <q-separator spaced inset vertical dark />
          <li>Ich mache gerne Musik und begeistere andere für Musik.</li>
          <q-separator spaced inset vertical dark />
          <li>Ich mag die Arbeit mit Menschen, daher liegt mir das Unterrichten sehr am Herzen.</li>
        </ul>

        Aus diesen drei Gründen habe ich Euphonium in Augsburg bei Markus Mikusch und Steven Mead
        und später in Luzern bei Thomas Rüedi studiert.
        <br /><br />
        Derzeit unterrichte ich an verschiedenen Musikschulen in Südtirol tiefes Blech
        und Musikalische Früherziehung.
        <br /><br />
        Um meine Kreativität auszuleben, habe ich eine Ausbildung zur Musikvermittlerin in Luzern absolviert
        und in diesem Rahmen mein Herzensprojekt, das Kinderbuch „die kleine Miss Euph,“ veröffentlicht.
        <br /><br />
        Möchtest du noch mehr über mich erfahren? Kontaktiere mich gerne!
      </h6>
    </div>
  </div>

  <!-- Desktop Layout -->
<div class="row gt-sm items-start q-col-gutter-xl q-mx-xl desktop-fullheight">
  <!-- Left Side (Text) -->
  <div class="col-7 column items-start text-left">
    <h1 class="text-white agrandir-thin-italic q-mb-md" style="font-size: 59px;">
      Herzlich Willkommen!
    </h1>

    <h6>
      <div class="q-mb-xl">
        Ich bin Kathrin, Musikerin, Pädagogin, Musikvermittlerin und Autorin.
      </div>

      <!-- 20px headline -->
      <div class="q-mb-lg text-accent" style="font-size:25px;">
        Was gibt es über mich zu sagen?
      </div>

      <ul class="q-mb-xl q-pl-none" style="list-style-type:none;">
        <li>Ich liebe es, kreativ und vielseitig zu sein.</li>
        <q-separator spaced inset vertical dark />
        <li>Ich mache gerne Musik und begeistere andere für Musik.</li>
        <q-separator spaced inset vertical dark />
        <li>Ich mag die Arbeit mit Menschen, daher liegt mir das Unterrichten sehr am Herzen.</li>
      </ul>

      Aus diesen drei Gründen habe ich Euphonium in Augsburg bei Markus Mikusch und Steven Mead
      und später in Luzern bei Thomas Rüedi studiert.
      <br /><br />
      Derzeit unterrichte ich an verschiedenen Musikschulen in Südtirol tiefes Blech
      und Musikalische Früherziehung.
      <br /><br />
      Um meine Kreativität auszuleben, habe ich eine Ausbildung zur Musikvermittlerin in Luzern absolviert
      und in diesem Rahmen mein Herzensprojekt, das Kinderbuch „die kleine Miss Euph,“ veröffentlicht.
      <br /><br />
      Möchtest du noch mehr über mich erfahren? Kontaktiere mich gerne!
    </h6>
  </div>

  <!-- Right Side (Image) -->
  <div class="col-5 flex justify-center">
    <q-img
      src="/images/kathrineuphonium6.webp"
      alt="Kathrin with Euphonium"
      style="width:80%; height:auto;"
    />
  </div>
</div>


</q-page>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
@media (min-width: 1024px) {
  .desktop-fullheight {
    min-height: 100vh; /* ensures full viewport height */
  }
}
</style>
