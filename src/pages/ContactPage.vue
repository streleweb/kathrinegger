<template>
  <q-page class="q-pa-md">
    <q-card bordered class="q-ma-md q-px-md q-py-lg bg-card">
      <q-card-section>
        <div class="text-h5 q-mb-md"></div>
      </q-card-section>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-y-md column"

      >
        <q-input
          v-model="nachricht"
          label="Nachricht"
          type="textarea"
          filled
          stack-label
          :counter="3000"
          maxlength="3000"
          autogrow
          required
          :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
        />

        <q-input
          v-model="vorname"
          label="Vorname"
          type="text"
          filled
          stack-label
          maxlength="30"
          required
          :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
        />

        <q-input
          v-model="nachname"
          label="Nachname"
          type="text"
          filled
          stack-label
          maxlength="30"
          required
          :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
        />

        <q-input
          v-model="adresse"
          label="Adresse"
          type="text"
          filled
          stack-label
          maxlength="100"
          required
          :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
        />

        <q-input
          v-model="email"
          label="E-Mail"
          type="email"
          filled
          stack-label
          maxlength="50"
          required
          :rules="[
            val => !!val || 'Dieses Feld ist erforderlich',
            val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'E-Mail-Adresse ist ungültig'
          ]"
        />

        <q-input
          v-model="steuernummer"
          label="Steuernummer"
          type="text"
          filled
          stack-label
          maxlength="16"
          placeholder="Nur für italienische Staatsbürger"
          :rules="[val => !val || /^[A-Z0-9]{11,16}$/.test(val) || 'Ungültige Steuernummer']"
        />

        <q-input
          v-model="mwst"
          label="Mwst."
          type="text"
          filled
          stack-label
          maxlength="13"
          :rules="[val => !val || /^IT\d{11}$/.test(val) || 'Ungültige Mwst.-Nummer (Format: IT12345678901)']"
        />

        <q-separator spaced inset vertical dark />

        <div class="row q-col-gutter-md">
          <q-btn type="submit" label="Senden" color="secondary" class="q-btn-center" />
          <q-btn type="reset" label="Zurücksetzen" color="secondary" flat class="q-btn-center" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Swal from 'sweetalert2';

export default defineComponent({
  name: 'Kontaktformular',
  setup() {
    const vorname = ref('');
    const nachname = ref('');
    const adresse = ref('');
    const email = ref('');
    const steuernummer = ref('');
    const mwst = ref('');
    const nachricht = ref('');

    const onSubmit = () => {
      if (vorname.value && nachname.value && email.value && nachricht.value) {
        const templateParams = {
          vorname: vorname.value,
          nachname: nachname.value,
          adresse: adresse.value,
          email: email.value,
          steuernummer: steuernummer.value,
          mwst: mwst.value,
          nachricht: nachricht.value,
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Erfolg!',
              text: 'Deine Kontaktanfrage wurde gesendet!',
            });
          })
          .catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'Fehler!',
              text: 'Deine Nachricht konnte nicht gesendet werden!',
            });
          });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Hinweis',
          text: 'Bitte füllen Sie alle erforderlichen Felder aus.',
        });
      }
    };

    const onReset = () => {
      vorname.value = '';
      nachname.value = '';
      adresse.value = '';
      email.value = '';
      steuernummer.value = '';
      mwst.value = '';
      nachricht.value = '';
    };

    return {
      vorname,
      nachname,
      adresse,
      email,
      steuernummer,
      mwst,
      nachricht,
      onSubmit,
      onReset,
    };
  },
});
</script>

<style scoped>
.q-btn-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  line-height: 1.5;
}

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
  background-color: #c5c5c5;
}
</style>
