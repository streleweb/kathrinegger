<template>
  <q-page class="q-pa-lg flex flex-center">
    <div class="column items-center full-width" style="max-width: 900px; width: 100%;">

      <!-- Info card -->
      <q-card
        flat
        bordered
        class="bg-gradient text-white shadow-2xl q-pa-xl q-mb-xl rounded-card"
      >
        <q-card-section>
          <div class="text-h5 text-center q-mb-md">Ich freue mich</div>
          <div class="text-body1 text-center">
            dass Sie mit mir Kontakt aufnehmen möchten. Hinterlassen Sie mir einfach eine Nachricht, ich melde mich bei Ihnen.
          </div>
        </q-card-section>
      </q-card>

      <!-- Kontaktformular -->
      <q-card flat bordered class="form-card q-pa-xl shadow-2xl rounded-card" style="width:100%">
        <q-card-section>
          <div class="text-h5 text-center q-mb-lg text-primary">Kontaktformular</div>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset.prevent="onReset" class="q-gutter-md column">
          <q-input
            v-model="vorname"
            label="Vorname"
            filled
            stack-label
            maxlength="30"
            :rules="requiredRule"
          />

          <q-input
            v-model="nachname"
            label="Nachname"
            filled
            stack-label
            maxlength="30"
            :rules="requiredRule"
          />

          <q-input
            v-model="telefonnummer"
            label="Telefonnummer (optional)"
            filled
            stack-label
            maxlength="20"
            type="tel"
            placeholder="z. B. +49 176 12345678"
            :rules="phoneRules"
          />

          <q-input
            v-model="email"
            label="E-Mail"
            type="email"
            filled
            stack-label
            maxlength="50"
            :rules="emailRules"
            required
          />

          <q-input
            v-model="nachricht"
            label="Nachricht"
            type="textarea"
            filled
            stack-label
            autogrow
            maxlength="3000"
            :rules="requiredRule"
          />

          <div class="row justify-end q-gutter-sm q-mt-md">
            <q-btn type="submit" label="Senden" color="blue" unelevated class="submit-btn" />
          </div>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

// ----- Reactive form fields -----
const vorname = ref<string>('');
const nachname = ref<string>('');
const telefonnummer = ref<string>('');
const email = ref<string>('');
const nachricht = ref<string>('');

// ----- Validation rules (defined in JS so regex is a real RegExp) -----
const requiredRule = [
  (val: string) => !!String(val).trim() || 'Dieses Feld ist erforderlich'
];

const emailRules = [
  (val: string) => !!String(val).trim() || 'Dieses Feld ist erforderlich',
  (val: string) => {
    const v = String(val).trim();
    // simple but robust email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(v) || 'E-Mail-Adresse ist ungültig';
  }
];

const phoneRules = [
  (val: string) => {
    if (!val || !String(val).trim()) return true; // optional
    const v = String(val).trim();
    // allow digits, +, spaces, parentheses and dashes, 5-20 chars
    const re = /^[0-9+()\s-]{5,20}$/;
    return re.test(v) || 'Ungültige Telefonnummer';
  }
];

// ----- EmailJS init: replace with your real public key -----
emailjs.init('f09VuRm22ktmAWgu9'); // <-- replace with your EmailJS public key

// ----- submit handler -----
const onSubmit = async () => {
  // client-side presence checks (rules already enforce but double-check)
  if (!vorname.value.trim() || !nachname.value.trim() || !email.value.trim() || !nachricht.value.trim()) {
    Swal.fire({
      icon: 'warning',
      title: 'Hinweis',
      text: 'Bitte fülle alle erforderlichen Felder aus.'
    });
    return;
  }

  const params = {
    vorname: vorname.value.trim(),
    nachname: nachname.value.trim(),
    telefonnummer: telefonnummer.value.trim(),
    email: email.value.trim(),
    nachricht: nachricht.value.trim()
  };

  try {
    // replace 'service_id' and 'template_id' with your EmailJS service & template IDs
    await emailjs.send('service_ya3y2t5', 'template_eydwy5n', params);

    Swal.fire({
      icon: 'success',
      title: 'Erfolg!',
      text: 'Deine Nachricht wurde erfolgreich gesendet!',
      confirmButtonColor: '#3085d6'
    });

    onReset();
  } catch (err) {
    console.error('EmailJS send error', err);
    Swal.fire({
      icon: 'error',
      title: 'Fehler!',
      text: 'Die Nachricht konnte nicht gesendet werden.',
      confirmButtonColor: '#d33'
    });
  }
};

const onReset = () => {
  vorname.value = '';
  nachname.value = '';
  telefonnummer.value = '';
  email.value = '';
  nachricht.value = '';
};
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(135deg, #7c4dff 0%, #5c6bc0 100%);
}

.text-white {
  color: white !important;
}

.text-primary {
  color: #5c6bc0 !important;
}

.rounded-card {
  border-radius: 16px;
}

.form-card {
  background-color: #e9e9ec;
}

/* Improve input text color and focused label color */
.q-field__native,
.q-field__input {
  color: #222 !important;
}

/* When field is focused, change label to deep blue */
:deep(.q-field--focused .q-field__label) {
  color: #27418a !important; /* deep blue label when active */
}

/* Keep the control background subtle */
.q-field__control {
  background: rgba(255,255,255,0.9);
}

/* Submit button style */
.submit-btn {
  background: linear-gradient(135deg, #7c4dff, #5c6bc0);
  color: white;
  border-radius: 8px;
  transition: 0.2s ease;
}
.submit-btn:hover { opacity: 0.95; }

.shadow-2xl {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* mobile tweaks */
@media (max-width: 767px) {
  .q-page { padding: 16px; }
  .bg-gradient { padding: 20px !important; }
  .form-card { padding: 18px !important; }
}
</style>
