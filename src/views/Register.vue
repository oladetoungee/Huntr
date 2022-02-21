<template>
  <div class="register">
    <side-image></side-image>
    <div class="register__con">
      <div class="register__header">
        <router-link to="/" href="#" class="register__logo logo"
          >huntr</router-link
        >
        <h3 class="register__heading">Need a job? Register</h3>
      </div>
      <form action="" class="register__form" @submit.prevent="submit">
        <input
          type="text"
          class="register__name animate__animated animate__fadeInUp"
          placeholder="Your Name"
          v-model="form.name"
          required
          autocomplete="name"
        />
        <input
          type="email"
          class="register__email animate__animated animate__fadeInUp"
          placeholder="Email Address"
          v-model="form.email"
          required
          autocomplete="email"
        />
        <input
          type="password"
          class="register__password animate__animated animate__fadeInUp"
          placeholder="Password"
          v-model="form.password"
          required
        />
        <input
          type="submit"
          value="Register"
          class="register__submit animate__animated animate__shakeX"
        />
      </form>
      <p class="register__alert">
        Have an Account?
        <router-link to="/login">Log In</router-link>
      </p>
      <notifications group="foo" position="bottom center" />
    </div>
  </div>
</template>

<script>
import sideImage from "../components/sideImage";
import fb from "../firebase";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      message: "",
      messageClass: "",
      show: ""
    };
  },
  watch: {
    show: function() {
      if (this.show === true) {
      }
    }
  },
  components: {
    sideImage
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    async submit() {
      const user = fb
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(data => {
              this.form.email = "";
              this.form.name = "";
              this.form.password = "";
              this.$notify({
                group: "foo",
                type: "success",
                text: "Account Created Sucessfully, Kindly Login"
              });
              
            });
           const signOut = fb.auth().signOut() 
        })
        .catch(err => {
          this.message = err.message;
          this.$notify({
            group: "foo",
            type: "error",
            text: this.message
          });
        });
    }
  }
};
</script>

<style lang="scss">
.vue-notification {
  padding: 20px;
  right: 6em;
  width: 100%;
  font-size: 14px;

  color: #ffffff;
  background: #44a4fc;
  border-left: none;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
</style>
