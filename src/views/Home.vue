<template>
  <div class="home">
    <header class="header">
      <img src="../assets/images/mask2.png" alt="" class="header__illust" />
      <div class="header__navbar">
        <div class="header__navbar-left">
          <a href="#" class="header__logo logo animate__animated animate__bounceInDown">huntr</a>
        </div>
        <div
          class="header__navbar-mobile animate__animated animate__rotateInUpRight
          "
          v-bind:style="navStyle"
        >
          <img
            src="../assets/images/close.svg"
            alt=""
            class="header__close close"
            @click="closeNav"
          />
          <div class="header__navbar-middle">
            <a href="#" class="header__link">Get  Jobs</a>
            <a href="#" class="header__link">Get  Jobs</a>
            <a href="#" class="header__link">Post Jobs</a>
          </div>
          <div class="header__navbar-right">
            <router-link to="/login" class=" btn btn--small header__btn"
              >Log In</router-link
            >
            <router-link
              to="/register"
              href="#"
              class="btn btn--small header__btn btn--active"
              >Sign Up</router-link
            >
          </div>
        </div>

        <img
          src="../assets/images/menu.svg"
          alt=""
          class="header__menu menu"
          @click="openNav"
        />
      </div>
      <div class="header__content">
        <img
          src="../assets/images/mask.png"
          alt="Illustration"
          class="header__illust--small"
        />
        <div class="header__info">
          <h3 class="header__heading--small">Get Started</h3>
          <h1 class="header__heading--big">Find Your Dream Job</h1>
          <p class="header__paragraph">
            We will boost your skills and profile, provide you with personalised
            career guidance and match you with the right opportunities, so that
            you can be the Best and the Brightest.
          </p>
        </div>
      </div>
    </header>
    <section class="filter">
      <form action="" class="filter__form">
        <input
          type="text"
          class="filter__search"
          placeholder="Job Title or Keyword"
        />
        <span><button class="filter__button">Search</button></span>
      </form>
    </section>
    <section class="job">
      <h1 class="job__heading">Latest Job</h1>
      <div class="job__con">
        <div class="job__child" v-for="job in jobs">
          <p class="job__title">{{ job.title }}</p>
          <div class="job__details">
            <p class="job__location">{{ job.location }}</p>
            <p class="job__time">{{ job.published_at.for_humans }}</p>
          </div>

          <div class="job__company">
            <img :src="job.company.avatar" alt="" class="job__icon" />
            <p class="job__name">{{ job.company.name }}</p>
          </div>

          <router-link to="/login"
            ><button href="#" class="job__apply">Apply Now</button></router-link
          >
        </div>
      </div>
    </section>
    <section class="category">
      <h1 class=" heading category__heading--big">Job Category</h1>
      <div class="category__con">
        <div class="category__child">
          <img
            src="/icons/ic_invert_colors_24px.png"
            alt=""
            class="category__icon"
          />
          <h3 class="category__heading--small">Design</h3>
          <p class="category__info">150 Job Vacancy</p>
        </div>
        <div class="category__child">
          <img
            src="/icons/ic_phonelink_24px.png"
            alt=""
            class="category__icon"
          />
          <h3 class="category__heading--small">Development</h3>
          <p class="category__info">200 Job Vacancy</p>
        </div>
        <div class="category__child">
          <img src="/icons/ic_poll_24px.png" alt="" class="category__icon" />
          <h3 class="category__heading--small">Project Management</h3>
          <p class="category__info">120 Job Vacancy</p>
        </div>
      </div>
    </section>
    <section class="about">
      <div class="about__img-con">
        <img
          src="../assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash.png"
          alt=""
          class="about__img"
        />
      </div>

      <div class="about__con">
        <h1 class="about__heading">We will help you get your dream job easy</h1>
        <p class="about__paragraph">
          We connect tech talents with the right job and have helped a lot of
          people (and counting) gain access to tech jobs across the World. We
          Assess We help techies assess their skill-level or talent based on
          their ability to solve problems, learning speed, and strength of
          character.
        </p>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__child">
        <p class="footer__logo logo">huntr</p>
        <div class="footer__icon-con">
          <img src="../assets/icons/twitter.svg" class="footer__icon" />
          <img src="../assets/icons/medium.svg" class="footer__icon" />
          <img src="../assets/icons/facebook.svg" class="footer__icon" />
          <img src="../assets/icons/instagram.svg" class="footer__icon" />
        </div>
      </div>
      <div class="footer__child">
        <p class="footer__link">
          Home
          <br />Pricing <br />Features <br />About us
          <br />
        </p>
      </div>
      <div class="footer__child">
        <p class="footer__link">
          Career
          <br />Community <br />Privacy Policy
        </p>
      </div>
      <div class="footer__child">
        <p class="footer__link">
          Sign In
          <br />Register <br />Know more
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      navStyle: {}
    };
  },

  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const baseURI = "https://vuejobs.com/api/jobs";
      this.$http.get(baseURI).then(result => {
        this.jobs = result.data;
      });
    },
    openNav() {
      this.navStyle = { display: "block" };
    },
    closeNav() {
      this.navStyle = { display: "none" };
    }
  }
};
</script>

<style></style>
