<template>
  <div>
    <div class="login">
      <side-image></side-image>
      <div class="login__con">
        <div class="login__header">
          <router-link to="/" href="#" class="login__logo logo"
            >huntr</router-link
          >
          <h3 class="login__heading">Need a job? Login</h3>
        </div>
        <form action="login" class="login__form" @submit.prevent="submit">
          <input
            type="email"
            class="login__email animate__animated animate__fadeInUp"
            placeholder="Email Address"
            v-model="form.email"
            autocomplete="email"
          />
          <input
            type="password"
            class="login__password animate__animated animate__fadeInUp"
            placeholder="Password"
            v-model="form.password"
            required
          />
          <input
            type="submit"
            value="Sign In"
            class="login__submit animate__animated animate__shakeY"
            required
          />
        </form>
        <p class="login__alert">
          Don't have an account?
          <router-link to="/register">Sign Up</router-link>
        </p>
        <notifications group="foo" position="bottom center" />
      </div>
    </div>
  </div>
</template>

<script>
import sideImage from "../components/sideImage";
import fb from "../firebase";
import { action } from "vuex";
import store from "../store";
import router from "../router";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },

  components: {
    sideImage
  },
  created() {},
  methods: {
    submit() {
      fb.auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          fb.auth().onAuthStateChanged(user => {
            store.dispatch("fetchUser", user);
            router.push("/dashboard");
          });
          

        })
        .catch(err => {
          this.error = err.message;
          this.$notify({
            group: "foo",
            type: "error",
            text: this.error
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
