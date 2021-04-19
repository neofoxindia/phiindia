<template>
  <section class="page-content">
    <div class="container-fluid m-0">
      <div class="row">
        <div class="container order-lg-1 order-2 mdp-contact col-lg-6 col-md-8">
          <div class="row justify-content-end pl-lg-5 ml-lg-5 ml-0 pl-0">
            <div class="col-12">
              <div class="mdp-our-contacts m-5" style="transform: scale(1.1)">
                <h2 class="display-4 text-dark font-weight-bold">
                  Our Contacts
                </h2>
                <ul class="p-5">
                  <li>
                    <div class="d-flex flex-wrap">
                      <div class="icon-v text-secondary">
                        <i class="fa fa-phone fa-3x" />
                      </div>
                      <div class="dd-cont">
                        <h4>Call</h4>
                        <span class="display-3" style="font-size: 1.3em">+2 342 5446 67</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-wrap">
                      <div class="icon-v text-primary">
                        <i class="fa fa-clock fa-3x" />
                      </div>
                      <div class="dd-cont">
                        <h4>Work Time</h4>
                        <span
                          class="display-3"
                          style="font-size: 1.3em"
                        >Mon - Fri 8 AM - 5 PM</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-wrap">
                      <div class="icon-v text-secondary">
                        <i class="fa fa-map fa-3x" />
                      </div>
                      <div class="dd-cont">
                        <h4>Address</h4>
                        <span class="display-3" style="font-size: 1.3em">Jaipur</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div><!--mdp-our-contacts end-->
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-8 col-12 order-lg-2 order-1 ml-auto">
          <img
            src="/images/mailbox.svg"
            class="float-right w-100"
            width="400"
            height="400"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div class="mdp-map">
        <iframe
          class="shadow-sm"
          src="https://maps.google.com/maps?q=PHI%20Institute,%20Sector%2017%20Road,%20Sector%2017,%20Pratap%20Nagar,%20Jaipur,%20Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
        />
      </div><!--mdp-map end-->
      <div class="mdp-contact">
        <div class="row" />
      </div><!--mdp-contact end-->
    </div>
  </section><!--page-content end-->
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
iframe {
  border-radius: 2px;
}
</style>
