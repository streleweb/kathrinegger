<template>
  <q-page class="q-pa-lg flex flex-center">
    <div class="column items-center full-width" style="max-width: 900px; width: 100%;">

      <!-- Info card -->
      <q-card flat bordered class="bg-gradient text-white shadow-2xl q-pa-xl q-mb-xl rounded-card">
        <q-card-section>
          <div class="text-h5 text-center q-mb-md">Ich freue mich</div>
          <div class="text-body1 text-center">
            dass Sie Interesse an meinem Kinderbuch haben.
            Bitte füllen Sie das Formular aus und teilen Sie mir in der Nachricht mit,
            wie viele Bücher Sie bestellen möchten.
          </div>
        </q-card-section>
      </q-card>

      <!-- Bestellformular -->
      <q-card flat bordered class="form-card q-pa-xl shadow-2xl rounded-card" style="width:100%">
        <q-card-section>
          <div class="text-h5 text-center q-mb-lg text-primary">Bestellformular</div>
        </q-card-section>

        <q-form @submit.prevent="onSubmit" @reset="onReset" ref="form" class="q-gutter-md column">
          <q-input
            v-model="vorname"
            label="Vorname"
            filled
            stack-label
            maxlength="30"
            :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
          />

          <q-input
            v-model="nachname"
            label="Nachname"
            filled
            stack-label
            maxlength="30"
            :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
          />

          <q-input
            v-model="adresse"
            label="Adresse"
            filled
            stack-label
            maxlength="100"
            :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
          />

          <q-input
            v-model="telefonnummer"
            label="Telefonnummer (optional)"
            filled
            stack-label
            maxlength="20"
            type="tel"
            placeholder="z. B. +49 176 12345678"
            :rules="[val => !val || /^[0-9+()\s-]{5,20}$/.test(val) || 'Ungültige Telefonnummer']"
          />

          <q-input
            v-model="email"
            label="E-Mail"
            type="email"
            filled
            stack-label
            maxlength="50"
            :rules="emailRules"
          />

          <q-input
            v-model="steuernummer"
            label="Steuernummer"
            filled
            stack-label
            maxlength="16"
            placeholder="Nur für italienische Staatsbürger"
            :rules="[val => !val || /^[A-Z0-9]{11,16}$/.test(val) || 'Ungültige Steuernummer']"
          />

          <q-input
            v-model="empfaengercodex"
            label="Empfängercodex"
            filled
            stack-label
            maxlength="16"
            placeholder="Optionalfeld (7-stelliger Code)"
          />

          <q-input
            v-model="mwst"
            label="Mwst."
            filled
            stack-label
            maxlength="13"
            :rules="[val => !val || /^IT\\d{11}$/.test(val) || 'Ungültige Mwst.-Nummer (Format: IT12345678901)']"
          />

          <q-input
            v-model="nachricht"
            label="Nachricht"
            type="textarea"
            filled
            stack-label
            autogrow
            maxlength="3000"
            :rules="[val => !!val || 'Dieses Feld ist erforderlich']"
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
import { ref } from 'vue'
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser'

const vorname = ref('')
const nachname = ref('')
const adresse = ref('')
const telefonnummer = ref('')
const email = ref('')
const steuernummer = ref('')
const empfaengercodex = ref('')
const mwst = ref('')
const nachricht = ref('')
const form = ref()

emailjs.init('f09VuRm22ktmAWgu9')

const emailRules = [
  (val: string) => !!val || 'Dieses Feld ist erforderlich',
  (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val).trim()) || 'E-Mail-Adresse ist ungültig'
]

const onSubmit = async () => {
  const valid = await form.value?.validate()
  if (!valid) return

  const params = {
    vorname: vorname.value,
    nachname: nachname.value,
    adresse: adresse.value,
    telefonnummer: telefonnummer.value,
    email: email.value,
    steuernummer: steuernummer.value,
    empfaengercodex: empfaengercodex.value,
    mwst: mwst.value,
    nachricht: nachricht.value
  }

  try {
    await emailjs.send('service_ya3y2t5', 'template_hv2rmol', params)
    Swal.fire({
      icon: 'success',
      title: 'Erfolg!',
      text: 'Deine Nachricht wurde erfolgreich gesendet!',
      confirmButtonColor: '#3085d6'
    })
    onReset()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Fehler!',
      text: 'Die Nachricht konnte nicht gesendet werden.',
      confirmButtonColor: '#d33'
    })
  }
}

const onReset = () => {
  vorname.value = ''
  nachname.value = ''
  adresse.value = ''
  telefonnummer.value = ''
  email.value = ''
  steuernummer.value = ''
  empfaengercodex.value = ''
  mwst.value = ''
  nachricht.value = ''
}
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
  background-color: #e2e1e3;
}

.q-field--focused .q-field__label {
  color: #0033aa !important; /* deep blue label on focus */
}

.q-field--focused .q-field__control {
  border-color: #0033aa !important;
  box-shadow: 0 0 0 2px rgba(0, 51, 170, 0.2);
}

.submit-btn {
  background: linear-gradient(135deg, #7c4dff, #5c6bc0);
  color: white;
  border-radius: 8px;
  transition: 0.2s ease;
}

.submit-btn:hover {
  opacity: 0.9;
}

.shadow-2xl {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

@media (max-width: 767px) {
  .q-page {
    padding: 16px;
  }
  .bg-gradient {
    padding: 24px !important;
  }
  .form-card {
    padding: 20px !important;
  }
}
</style>
