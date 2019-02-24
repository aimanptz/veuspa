<template>
  <main class="main">
    <h1 class="main__title">Form Validation</h1>
    <hr>
    <div class="container">
      <form class="form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" class="form-control"
                 :class="{'is-invalid': $v.email.$error}"
                 @blur="$v.email.$touch()"
                 v-model="email"
          >
          <div class="invalid-feedback" v-if="!$v.email.required">Email is required. </div>
          <div class="invalid-feedback" v-if="!$v.email.email">Please provide a valid email.</div>
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" class="form-control"
                 :class="{'is-invalid': $v.password.$error}"
                 @blur="$v.password.$touch()"
                 v-model="password"
          >
          <div class="invalid-feedback" v-if="!$v.password.minLength">Password min length is {{
            $v.password.$params.minLength.min }} characters. </div>
          <div class="invalid-feedback" v-if="!$v.password.required">Password is required. </div>
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" class="form-control"
                 :class="{'is-invalid': $v.confirmPassword.$error}"
                 @blur="$v.confirmPassword.$touch()"
                 v-model="confirmPassword"
          >
          <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Passwords should match. </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
  
	export default {
		name: "FormValidation",
    data() {
		  return {
		    email: '',
		    password: '',
        confirmPassword: ''
      }
    },
    validations: {
		  email: {
		    required,
        email
      },
		  password: {
		    required,
        minLength: minLength(6)
      },
      confirmPassword: {
		    sameAs: sameAs('password')
      }
    }
	}
</script>

<style scoped lang="scss">
  
  .form {
    padding: 20px;
    max-width: 500px;
    margin: 30px auto;
    border: 1px solid $lightGrey;
    border-radius: 5px;
  }
  
  
</style>
