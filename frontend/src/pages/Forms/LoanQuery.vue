<template>
  <div class="row">
    <div class="col-md-12">
      <div v-if="hasError" type="warning" >
        <strong class="text-danger" v-for="(error, key) in errorMessages" :key="key">{{String(error.msg)}}<br/></strong>
      </div>
      <div v-if="storeSuccessfully" type="warning" >
        <strong class="text-success">{{String(successMessage)}}<br/></strong>
      </div>
      <card class="stacked-form" title="Stacked Form">
        <h4 slot="header" class="card-title">Loan Inquery</h4>
        <form ref="loanForm" @submit.prevent>
          <div>
            <base-input
              label="Name"
              type="text"
              placeholder="Enter name"
              v-model="loaninqury.name"
            ></base-input>
            <base-input
              label="Email address"
              type="email"
              placeholder="Enter email"
              v-model="loaninqury.email"
            >
            </base-input>
            <base-input
              label="Phone"
              type="text"
              placeholder="Enter phone number"
              v-model="loaninqury.phone"
            >
            </base-input>
            <base-input
              label="Address"
              type="text"
              placeholder="Enter address"
              v-model="loaninqury.address"
            >
            </base-input>
            <base-input
              label="City"
              type="text"
              placeholder="Enter city"
              v-model="loaninqury.city"
            >
            </base-input>
            <base-input
              label="Province"
              type="text"
              placeholder="Enter province"
              v-model="loaninqury.province"
            >
            </base-input>
            <base-input
              label="House Value"
              type="text"
              placeholder="Enter house value"
              v-model="loaninqury.house_value"
            >
            </base-input>
            <base-input
              label="Owing Against"
              type="text"
              placeholder="Enter owing against"
              v-model="loaninqury.owing_against"
            >
            </base-input>
            <base-input
              label="Amount Requested"
              type="text"
              placeholder="Enter amount requested"
              v-model="loaninqury.amount_requested"
            >
            </base-input>
            <base-button class="mt-3" native-type="submit" type="primary" @click="saveLoaninquery"
              >Submit</base-button
            >
          </div>
        </form>
      </card>
    </div>
    <!-- end card -->

  </div>
</template>
<script>
import api from '../../repository/api'

export default {
  data() {
    return {
      loaninqury: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: '',
        house_value: '',
        owing_against: '',
        amount_requested: '',
      },
      errorMessages:[],
      hasError: false,
      successMessage: '',
      storeSuccessfully:false,
    };
  },

  methods: {
    saveLoaninquery(){
      api.
        post('loanquery', {
        name: this.loaninqury.name,
        email: this.loaninqury.email,
        phone: this.loaninqury.phone,
        address: this.loaninqury.address,
        city: this.loaninqury.city,
        province: this.loaninqury.province,
        house_value: this.loaninqury.house_value,
        owing_against: this.loaninqury.owing_against,
        amount_requested: this.loaninqury.amount_requested,
      })
    .then(response => {
      if(response.data.errors){
        this.errorMessages = response.data.errors
        this.hasError = true
        this.storeSuccessfully = false
      }
      else {
        console.log(response.data)
        this.hasError = false
        this.storeSuccessfully = true
        this.successMessage = "Your Inquery Submitted Successfully"
        this.resetForm()
      }
    })
      .catch(error => {
        console.log(error)
      })
    },

    resetForm() {
      var self = this; //you need this because *this* will refer to Object.keys below`

      //Iterate through each object field, key is name of the object field`
      Object.keys(this.loaninqury).forEach(function(key,index) {
        self.loaninqury[key] = '';
      });
    }
  }
};
</script>
<style></style>
