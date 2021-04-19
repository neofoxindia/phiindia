<template>
  <Loader v-if="loading" />
  <section v-else class="page-content style2">
    <div class="container">
      <div class="row mt-5">
        <div class="col-xl-8 col-lg-8">
          <div class="class-single-content">
            <h2 class="font-weight-bold">
              {{ course.name }}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel venenatis felis. Fusce id lectus sit
              amet nisi ornare ultricies. In sagittis lacinia lorem et tristique. Quisque mauris neque, sollicitudin sit
              amet imperdiet in, scelerisque sit amet arcu. In vehicula sem eget nisi convallis, a mattis orci
              imperdiet. Curabitur vitae sapien vel lectus sagittis consequat. Nullam enim velit, dignissim vel viverra
              ac, eleifend ut tellus.
            </p>

            <h3>Activities Involved</h3>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <ul class="ordrd">
                  <li>Sensory Time</li>
                  <li>Free Play with Technology Corner</li>
                  <li>Puppet shows and skits</li>
                </ul>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <ul class="ordrd">
                  <li>Creative Time</li>
                  <li>Language Readiness</li>
                  <li>Opportunities for fine and gross motor</li>
                </ul>
              </div>
            </div>
            <a href="classes.html" title="" class="btn-default">Enroll Now <i
              class="fa fa-long-arrow-alt-right"
            /></a>
          </div><!--class-single-content end-->
        </div>
        <div class="col-xl-4 col-lg-4">
          <div class="sidebar class-sidebar">
            <div class="widget widget-information">
              <h3 class="widget-title">
                Class Information
              </h3>
              <ul>
                <li>
                  <h4>Mon-Fri</h4>
                  <span>10 AM - 12 AM</span>
                </li>
                <li>
                  <h4>Age</h4>
                  <span>9-14 Years</span>
                </li>
                <li>
                  <h4>Class Size</h4>
                  <span>20-30 Kids</span>
                </li>
                <li>
                  <h4>Coures Duration</h4>
                  <span>25 hours</span>
                </li>
              </ul>
              <div class="tech-info">
                <div class="tech-tble">
                  <img src="https://via.placeholder.com/54x54" alt="">
                  <div class="tch-info">
                    <h3>Hubert Franck</h3>
                    <span>English Teacher</span>
                  </div>
                </div>
                <a href="contacts.html" title="" class="btn-default">Enroll Now <i
                  class="fa fa-long-arrow-alt-right"
                /></a>
              </div>
            </div><!--widget-information end-->
            <div class="widget widget-class">
              <div class="wd-class-post">
                <div class="wd-class-thumb">
                  <img src="/img/ci1.png" alt="">
                </div>
                <div class="wd-class-info">
                  <h3>Class Program</h3>
                  <span>Adobe Acrobat file, 123 КB</span>
                </div>
              </div><!--wd-class-post end-->
            </div><!--widget-class end-->
          </div><!--sidebar end-->
        </div>
      </div>
    </div>
  </section><!--page-content end-->
</template>

<script>

export default {
  name: 'CourseId',
  data: () => ({
    course: undefined,
    loading: true
  }),
  beforeMount () {
    fetch('/data/courses.json')
      .then(response => response.json())
      .then((data) => {
        this.course = data.courses.find(item => item.slug === this.$route.params.slug)
        this.loading = false
      })
  }
}
</script>

<style scoped>

</style>
