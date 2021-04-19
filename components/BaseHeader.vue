<template>
  <div class="main-section">
    <header>
      <div class="container">
        <div class="header-content d-flex flex-wrap align-items-center p-2">
          <div class="logo">
            <NuxtLink :to="{name: 'index'}" class="d-flex align-items-end" title="">
              <img
                height="421"
                width="370"
                style="width: 50px"
                src="/images/logo.png"
                alt="Phi India Logo"
              >
            </NuxtLink>
          </div><!--logo end-->
          <ul class="contact-add d-flex flex-wrap">
            <li>
              <div class="contact-info">
                <img src="@/assets/img/icon1.png" alt="">
                <div class="contact-tt">
                  <h4>Call</h4>
                  <a class="text-dark" href="tel:919549749426"><span>+91 9549749426</span></a>
                </div>
              </div><!--contact-info end-->
            </li>
            <li>
              <div class="contact-info">
                <img src="@/assets/img/icon2.png" alt="">
                <div class="contact-tt">
                  <h4>Work Time</h4>
                  <span>Mon - Sat 8 AM - 5 PM</span>
                </div>
              </div><!--contact-info end-->
            </li>
            <li>
              <div class="contact-info">
                <img src="@/assets/img/icon3.png" alt="">
                <div class="contact-tt">
                  <h4>Address</h4>
                  <span>Pratap Nagar</span>
                </div>
              </div><!--contact-info end-->
            </li>
          </ul>
          <div class="menu-btn">
            <a href="#">
              <span class="bar1" />
              <span class="bar2" />
              <span class="bar3" />
            </a>
          </div><!--menu-btn end-->
        </div><!--header-content end-->
        <div class="navigation-bar d-flex flex-wrap align-items-center p-3">
          <nav>
            <ul>
              <li>
                <NuxtLink :to="{name: 'index'}" title="">
                  Home
                </NuxtLink>
              </li>
              <li>
                <a href="about.html" title="">About</a>
              </li>
              <li>
                <a href="classes.html" title="">Classes</a>
              </li>
              <li>
                <a href="teachers.html" title="">Teachers</a>
                <!--                <ul>-->
                <!--                  <li><a href="teacher-single.html" title="">Teacher Single</a></li>-->
                <!--                </ul>-->
              </li>
              <li>
                <a href="blog.html" title="">Blog</a>
              </li>
              <li>
                <NuxtLink :to="{name: 'contact'}" title="">
                  Contacts
                </NuxtLink>
              </li>
            </ul>
          </nav><!--nav end-->
          <ul class="social-links ml-auto">
            <li><a href="#" title=""><i class="fab fa-facebook-f" /></a></li>
            <li><a href="#" title=""><i class="fab fa-linkedin-in" /></a></li>
            <li><a href="#" title=""><i class="fab fa-instagram" /></a></li>
          </ul>
        </div><!--navigation-bar end-->
      </div>
    </header><!--header end-->
    <div class="responsive-menu">
      <ul>
        <li><a href="index.html" title="">Home</a></li>
        <li><a href="about.html" title="">About</a></li>
        <li><a href="events.html" title="">Events</a></li>
        <li><a href="event-single.html" title="">Event Single</a></li>
        <li><a href="schedule.html" title="">Schedule</a></li>
        <li><a href="classes.html" title="">Classes</a></li>
        <li><a href="class-single.html" title="">Classe Single</a></li>
        <li><a href="teachers.html" title="">Teachers</a></li>
        <li><a href="teacher-single.html" title="">Teacher Single</a></li>
        <li><a href="blog.html" title="">Blog</a></li>
        <li><a href="post.html" title="">Blog Single</a></li>
        <li><a href="contacts.html" title="">Contacts</a></li>
        <li><a href="error.html" title="">404</a></li>
      </ul>
    </div><!--responsive-menu end-->
  </div>
</template>

<script>
export default {
  name: 'BaseHeader'
}
</script>

<style scoped>

</style>
