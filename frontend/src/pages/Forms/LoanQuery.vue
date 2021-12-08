<template>
  <div class="row">
    <div class="col-md-12">
      <card class="stacked-form" title="Stacked Form">
        <h4 slot="header" class="card-title">Loan Inquery</h4>
        <form @submit.prevent>
          <div>
            <base-input
              label="Name"
              type="text"
              placeholder="Enter name"
            ></base-input>
            <base-input
              label="Email address"
              type="email"
              placeholder="Enter email"
            >
            </base-input>
            <base-input
              label="Phone"
              type="text"
              placeholder="Enter phone number"
            >
            </base-input>
            <base-input
              label="Address"
              type="text"
              placeholder="Enter address"
            >
            </base-input>
            <base-input
              label="City"
              type="text"
              placeholder="Enter city"
            >
            </base-input>
            <base-input
              label="Province"
              type="text"
              placeholder="Enter province"
            >
            </base-input>
            <base-input
              label="House Value"
              type="text"
              placeholder="Enter house value"
            >
            </base-input>
            <base-input
              label="Owing Against"
              type="text"
              placeholder="Enter owing against"
            >
            </base-input>
            <base-input
              label="Amount Requested"
              type="text"
              placeholder="Enter amount requested"
            >
            </base-input>
            <base-button class="mt-3" native-type="submit" type="primary"
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
import { BaseCheckbox, BaseRadio } from 'src/components/index';

export default {
  data() {
    return {

    };
  }
};
</script>
<style></style>
