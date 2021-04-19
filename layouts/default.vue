<template>
  <div class="wrapper">
    <BaseHeader />
    <Nuxt />
    <ContactUs />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '~/components/BaseHeader'
import BaseFooter from '~/components/BaseFooter'
import ContactUs from '~/components/ContactUs'

export default {
  components: {
    BaseHeader,
    BaseFooter,
    ContactUs
  }
}
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>

<style lang="scss">
$fa-font-path: "~/assets/webfonts/";
$primary-font: 'Open Sans', sans-serif;
$secondary-font: 'Poppins', sans-serif;

$basic-size: 16px;
$sec-spacing: 140px 0;
$sec-spacing2: 155px 0;

$para-color: #5D6978;
$primary-color: #f26a3c;
$heading-color: #1e66a0;
$bg-color: #22262F;

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import '~@fortawesome/fontawesome-free/scss/fontawesome.scss';

@import '~@fortawesome/fontawesome-free/scss/regular.scss';
@import '~@fortawesome/fontawesome-free/scss/solid.scss';
@import '~@fortawesome/fontawesome-free/scss/brands.scss';

$primary: #1e66a0;
$secondary: #f26a3c;
@import "~bootstrap/scss/bootstrap";
@import "assets/scss/main";

* {
    font-family: Open Sans, sans-serif;

}

h1, h2, h3, h4 {
    font-family: Poppins, sans-serif;
}
</style>
