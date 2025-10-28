<template>
  <q-page class="q-pa-xl flex flex-center bg-secondary text-white">
    <q-card flat bordered class="bg-transparent q-pa-lg" style="max-width: 900px; width: 100%;">
      <h2 class="text-h6 text-primary text-center q-mb-lg">Datenschutzerklärung</h2>

      <div class="q-gutter-md text-body1">
        <p>
          Diese Website verarbeitet personenbezogene Daten gemäß der EU-Datenschutz-Grundverordnung (DSGVO, Verordnung (EU) 2016/679)
          und den geltenden italienischen Datenschutzbestimmungen (D.Lgs. 196/2003).
        </p>

        <h3 class="text-h6 text-primary">1. Verantwortliche Person</h3>
        <p>Kathrin Egger, Kapuzinerstraße 9, 39011 Lana, BZ, ITALIEN</p>

        <h3 class="text-h6 text-primary">2. Zweck der Datenverarbeitung</h3>
        <ul>
          <li>Beantwortung von Kontaktanfragen;</li>
        </ul>

        <h3 class="text-h6 text-primary">3. Art der verarbeiteten Daten</h3>
        <ul>
          <li>Identifikationsdaten (Name, E-Mail, ggf. über Kontaktformular);</li>
          <li>Nutzungsdaten (IP-Adresse, Browserdaten, Cookies).</li>
        </ul>

        <h3 class="text-h6 text-primary">4. Rechte der betroffenen Personen</h3>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit
          sowie das Recht, eine erteilte Einwilligung jederzeit zu widerrufen.
        </p>

        <h3 class="text-h6 text-primary">5. Cookies</h3>
        <p>
          Diese Website verwendet ausschließlich technische Cookies, die für den Betrieb erforderlich sind.
          Es werden keine Cookies zu Werbe- oder Profilierungszwecken gesetzt.
        </p>


      </div>
    </q-card>
  </q-page>
</template>

<script setup>
// Static Datenschutzseite – keine Logik erforderlich
</script>

<style scoped>
ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}
p {
  line-height: 1.6;
}
</style>
