<template>
  <footer
    class="footer-bg footer-p"
    style="
      background-color: #303539;
      background-image: url(/assets/img/bg/footer-bg.png);
    "
  >
    <div class="footer-top pb-70">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-4 col-lg-4 col-sm-6">
            <div class="footer-widget mb-30">
              <div class="f-widget-title">
                <h2><img src="/assets/img/logo/f_logo.png" alt="img" /></h2>
              </div>
              <div class="f-contact">
                <p>
                  Suspendisse non sem ante. Cras pretium gravida leo a
                  convallis. Nam malesuada interdum metus, sit amet dictum ante
                  congue eu. Maecenas ut maximus enim.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-sm-6">
            <div class="footer-widget mb-30">
              <div class="f-widget-title">
                <h2>Our Links</h2>
              </div>
              <div class="footer-link">
                <ul>
                  <li>
                    <NuxtLink to="/">Home</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/about-us">About Us</NuxtLink>
                  </li>
                  <li><NuxtLink to="/career">Career</NuxtLink></li>
                  <li><NuxtLink to="/services">Our Solutions</NuxtLink></li>
                  <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
                  <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="footer-widget mb-30">
              <div class="f-widget-title">
                <h2>Help Center</h2>
              </div>
              <div class="footer-link">
                <ul>
                  <li><a href="faq.html">Faq</a></li>
                  <li><a href="privacy-policy.html">Privacy</a></li>
                  <li>
                    <a href="terms-and-conditions.html"
                      >Term &amp; Conditions</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="footer-widget mb-30">
              <div class="f-widget-title">
                <h2>Subscribe Now !</h2>
              </div>
              <div class="footer-link">
                <div
                  class="subricbe p-relative"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                  <form
                    action="https://htmldemo.zcubethemes.com/xevsoft/news-mail.php"
                    method="post"
                    class="contact-form"
                  >
                    <input
                      type="text"
                      id="email2"
                      name="email2"
                      class="header-input"
                      placeholder="Your Email..."
                      required
                    />
                    <button class="btn header-btn">
                      <i class="fas fa-location-arrow"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="footer-social mt-10">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-wrap">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="copy-text">
              Copyright &copy; Metasquareinc 2025 . All rights reserved.
            </div>
          </div>
          <div class="col-lg-4 text-center"></div>
          <div class="col-lg-4 text-right text-xl-right">
            <ul>
              <li>
                <NuxtLink to="/privacy-policy">Privacy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms-of-services"
                  >Term &amp; Conditions</NuxtLink
                >
              </li>
              <!-- <li><a href="#">Legal</a></li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const route = useRoute();

const email = ref("");

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log("Newsletter subscription:", email.value);
  email.value = "";
};
</script>
<style></style>
