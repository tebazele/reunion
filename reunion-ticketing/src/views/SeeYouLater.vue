<template>
  
  <div class="p-4">
    <form @submit.prevent="update">
      <label class="form-label">ID</label><br/><input type="text" v-model="editable.id"/><br/>
      <label class="form-label">Name</label><br/><input type="text" v-model="editable.name"/><br/>
      <label class="form-label">PayPal name</label><br/><input type="text" v-model="editable.payPalName"/><br/>
      <label class="form-label">Plus One</label><br/><input type="text" v-model="editable.plusOne"/><br/>
      <label class="form-label">Paid</label><br/><input type="text" v-model="editable.paid"/><br/>
      <button>Send</button> 
    </form>

  </div>
</template>

<script>
import { ref } from 'vue';
import { dataService } from '../dataService.js';
  export default {
    setup() {
      const editable = ref({})
     return {
      editable,
       async update() {
        try {
          const id= editable.value.id;
          const res = await dataService.update(id, editable.value);
          console.log(res.status)
          editable.value = {}
        } catch (error) {
          console.error(error.message)
        }
     }

      }
    }
  }
</script>

<style scoped>

</style>