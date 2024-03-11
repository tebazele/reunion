

<template>
  <h5 class="top-heading-5">Please fill out the info below and a payment link will appear.</h5>
  <form @submit.prevent="storeAttendee">
        <label for="name">Name</label><br/>
        <input  type="text" required v-model="formData.name"/><br/>
        <label for="name">PayPal Name (so we can tie your payment to you :)</label>
        <input  type="text" required v-model="formData.payPalName"/><br/>
        <span class="radio-label">Bringing a plus-one?</span>
        <label  for="yes">Yes</label>
        <input class="radio-label" type="radio" :value="1" v-model="formData.plusOne"/>
        <label  for="no">No</label>
        <input class="radio-label" type="radio" :value="0" v-model="formData.plusOne" /><br/>
        <button type="submit">Send</button>
      </form>
      <div class="pt-2" v-if="infoCollected"> 
        <h5>PayPal Link:</h5>
        <h5><span class="material-symbols-outlined">
  local_activity
  </span><a class="purple" target="_blank" href="https://www.paypal.com/paypalme/MonarchHighClassOf04"> @MonarchHighClassOf04</a></h5>
      </div>
</template>

<script>
import { dataService } from '../dataService';
import { ref, reactive } from 'vue';

export default {
  setup() {
    const formData = ref({})
    const infoCollected = ref(false);
    return {
      formData,
      infoCollected,
      async storeAttendee() {
        try {
          console.log(formData.value)
          const stored = await dataService.storeAttendee(formData.value)
          if (stored) {
            infoCollected.value = true;
          }
          formData.value = {}
        } catch (error) {
          console.error(error.message)
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
