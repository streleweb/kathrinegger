<template>
  <q-page class="q-pa-md">
    <q-card bordered class="q-ma-md q-px-md q-py-lg bg-card">
      <q-card-section>
        <div class="text-h5 q-mb-md">Kontaktformular</div>
      </q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          v-model="vorname"
          label="Vorname"
          type="text"
          required
          :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
        />

        <q-input
          v-model="nachname"
          label="Nachname"
          type="text"
          required
          :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
        />

        <q-input
          v-model="email"
          label="E-Mail"
          type="email"
          required
          :rules="[
            val => !!val || 'Dieses Feld ist erforderlich',
            val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'E-Mail-Adresse ist ungültig'
          ]"
        />

        <q-input
          v-model="nachricht"
          label="Nachricht"
          type="textarea"
          :counter="3000"
          maxlength="3000"
          autogrow
          required
          :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
        />

        <div class="row q-col-gutter-md">
          <q-btn type="submit" label="Senden" color="primary" />
          <q-btn type="reset" label="Zurücksetzen" color="secondary" flat />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Kontaktformular',
  setup() {
    const vorname = ref('');
    const nachname = ref('');
    const email = ref('');
    const nachricht = ref('');

    const onSubmit = () => {
      if (vorname.value && nachname.value && email.value && nachricht.value) {
        // Hier können Sie die Daten an Ihren Server senden
        alert('Ihre Nachricht wurde gesendet!');
      } else {
        alert('Bitte füllen Sie alle Felder aus.');
      }
    };

    const onReset = () => {
      vorname.value = '';
      nachname.value = '';
      email.value = '';
      nachricht.value = '';
    };

    return {
      vorname,
      nachname,
      email,
      nachricht,
      onSubmit,
      onReset,
    };
  },
});
</script>

<style scoped>
.q-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.q-card {
  max-width: 600px;
  width: 100%;
}

.row {
  justify-content: flex-end;
}

.bg-card {
  background-color: #e9e8df;
}
</style>
