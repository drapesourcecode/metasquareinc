<template>
  <div>
    <main>
      <section id="home" class="slider-area fix p-relative">
        <div class="slider-active" style="background: #333333;">
          <div class="single-slider slider-bg d-flex align-items-center"
            style="background-image: url(/assets/img/slider/banner-1.jpg); background-size: cover;">
            <div class="slider-line" data-animation="fadeInRight" data-delay=".8s">
              <img src="/assets/img/bg/slider-line.png" alt="slider-line">
            </div>
            <div class="slider-line2" data-animation="fadeInRight" data-delay=".4s">
              <img src="/assets/img/bg/slider-line2.png" alt="slider-line">
            </div>
            <div class="container">
              <div class="row justify-content-center align-items-center">
                <div class="col-lg-7 col-md-7 text-center">
                  <div class="slider-content s-slider-content mt-20">
                    <h2 data-animation="fadeInUp" data-delay=".4s">Speeding Up Business <span>Innovation</span></h2>
                    <p data-animation="fadeInUp" data-delay=".6s">Enhancing the Value of Your Workforce</p>
                    <div class="slider-btn mt-30">
                      <NuxtLink to="/contact" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">
                        Discover More</NuxtLink>
                      <NuxtLink to="/projects" class="btn ss-btn active" data-animation="fadeInRight" data-delay=".4s">
                        See Project</NuxtLink>
                      <!-- <a href="contact.html">Discover More</a>
                                             <a href="projects.html">See Project</a> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <!-- Brand Area -->
      <div class="brand-area pt-80  ">
        <div class="container">
          <div class="row brand-active slick-initialized slick-slider">

            <Carousel v-bind="carouselConfig" class="slick-track">
              <Slide class="col-xl-2 slick-slide slick-cloned" data-slick-index="-6" id="" aria-hidden="true"
                tabindex="-1" style="width: 220px">
                <div class="single-brand">
                  <img src="/assets/img/brand/b-logo2.png" alt="img" />
                </div>
              </Slide>
              <Slide class="col-xl-2 slick-slide slick-cloned" data-slick-index="-5" id="" aria-hidden="true"
                tabindex="-1" style="width: 220px">
                <div class="single-brand">
                  <img src="/assets/img/brand/b-logo3.png" alt="img" />
                </div>
              </Slide>
              <Slide class="col-xl-2 slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true"
                tabindex="-1" style="width: 220px">
                <div class="single-brand">
                  <img src="/assets/img/brand/b-logo4.png" alt="img" />
                </div>
              </Slide>
              <Slide class="col-xl-2 slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true"
                tabindex="-1" style="width: 220px">
                <div class="single-brand">
                  <img src="/assets/img/brand/b-logo5.png" alt="img" />
                </div>
              </Slide>
              <Slide class="col-xl-2 slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1"
                style="width: 220px">
                <div class="single-brand">
                  <img src="/assets/img/brand/b-logo1.png" alt="img" />
                </div>
              </Slide>
              <!-- <Slide v-for="image in images" :key="image.id">
                <div class="single-brand">
                  <img :src="image.url" alt="image" />
                </div>
              </Slide> -->
 
            </Carousel>

 
          </div>
        </div>
      </div>
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-f19294f elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div class="container">
          <div
            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d69dc0d"
            data-id="d69dc0d" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
              <div class="elementor-element elementor-element-4f64a14 elementor-widget elementor-widget-itsulu-divider"
                data-id="4f64a14" data-element_type="widget" data-widget_type="itsulu-divider.default">
                <div class="elementor-widget-container">
                  <div class="mil-divider"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services pt-90 pb-90 p-relative fix" style="
          background-image: url(/assets/img/bg/services-bg.png);
          background-size: cover;
          background-position: center top;
        ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 p-relative">
              <div class="section-title center-align mb-50 text-left">
                <h2>How We Can <span style="color: #fe7425">Help You</span></h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="services-08-item mb-30">
                <div class="services-08-thumb glyph">
                  <i class="fal fa-drafting-compass"></i>
                </div>
                <div class="services-08-content">
                  <h3><a href="single-service.html">IT Staffing</a></h3>
                  <p>
                    Flexibility is required in today's business world. Tek
                    Inspirations LLC has obtained a different insight into the
                    convergence
                  </p>
                  <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="services-08-item mb-30">
                <div class="services-08-thumb glyph">
                  <i class="fal fa-tasks-alt"></i>
                </div>
                <div class="services-08-content">
                  <h3><a href="single-service.html">IT Consulting</a></h3>
                  <p>
                    IT consulting services are advisory services that help
                    businesses evaluate new technologies and connect them with
                    their
                  </p>
                  <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="services-08-item mb-30">
                <div class="services-08-thumb glyph">
                  <i class="fal fa-clock"></i>
                </div>
                <div class="services-08-content">
                  <h3><a href="single-service.html">Managed Services</a></h3>
                  <p>
                    In the workforce solutions market, managed service
                    programmes, or MSPs, are commonly recognised as among the
                    most significant and
                  </p>
                  <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="services-08-item mb-30">
                <div class="services-08-thumb glyph">
                  <i class="fal fa-money-check-edit-alt"></i>
                </div>
                <div class="services-08-content">
                  <h3>
                    <a href="single-service.html">recruitment process outsourcing</a>
                  </h3>
                  <p>
                    Whenever a business outsources all or part of its ongoing
                    recruiting, it is known as Recruitment Process Outsourcing
                    (RPO).
                  </p>
                  <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="services-08-item mb-30">
                <div class="services-08-thumb glyph">
                  <i class="fal fa-bullseye-arrow"></i>
                </div>
                <div class="services-08-content">
                  <h3>
                    <a href="single-service.html"> Software Development </a>
                  </h3>
                  <p>
                    Software development refers to the process through which
                    programmers produce computer programmes. The Software
                    Development
                  </p>
                  <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <!--  <div class="col-lg-6 col-md-6 ">
                             <div class="services-08-item mb-30">
                                <div class="services-08-thumb glyph">
                                   <i class="fal fa-bezier-curve"></i>
                                </div>
                                <div class="services-08-content">
                                   
                                    <h3><a href="single-service.html">Illustration</a></h3>
                                     <p>Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare. </p>
                                    <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 ">
                             <div class="services-08-item mb-30">
                                 <div class="services-08-thumb glyph">
                                  <i class="fal fa-books-medical"></i>
                                </div>
                                <div class="services-08-content">
                                   
                                    <h3><a href="single-service.html">Firewall Advance  </a></h3>
                                     <p>Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare. </p>
                                    <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 ">
                               <div class="services-08-item mb-30">
                                  <div class="services-08-thumb glyph">
                                    <i class="far fa-user-headset"></i>
                                </div>
                                <div class="services-08-content">
                                   
                                    <h3><a href="single-service.html">24 x 7 Support</a></h3>
                                    <p>Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare. </p>
                                   <a class="readmore" href="single-service.html">Read More <i class="fas fa-long-arrow-right"></i></a>
                                </div>
                               
                            </div>
                        </div> -->
          </div>
        </div>
      </section>
      <!-- <section class="elementor-section elementor-top-section elementor-element elementor-element-f19294f elementor-section-boxed elementor-section-height-default elementor-section-height-default" >
               <div class="container">
                  <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d69dc0d" data-id="d69dc0d" data-element_type="column">
                     <div class="elementor-widget-wrap elementor-element-populated">
                        <div class="elementor-element elementor-element-4f64a14 elementor-widget elementor-widget-itsulu-divider" data-id="4f64a14" data-element_type="widget" data-widget_type="itsulu-divider.default">
                           <div class="elementor-widget-container">
                              <div class="mil-divider"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section> -->

      <section class="team-area2 fix p-relative pt-90 pb-80" style="background: #f2f3f3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 p-relative">
              <div class="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown" data-delay=".4s">
                <h2>Our Leadership <span style="color: #fe7425">Team</span></h2>
              </div>
            </div>
          </div>
          <div class="row team-active">
            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team01.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">Sukhend Mukherjee</a></h4>
                  <p>CEO & CO-FOUNDER</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/sukhendu-mukherjee-530331201/"><i
                            class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team02.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">Monomita Chakraborty</a></h4>
                  <p>COO & CO-FOUNDER</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/monomita-chakraborty-2aab86340/"><i
                            class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team03.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">George Guerrero</a></h4>
                  <p>Chief Finance Officer</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/guerrerocpa/"><i class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team04.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">Chuck Kable</a></h4>
                  <p>Chief Legal Officer</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/chuckkable/"><i class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team05.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">Mike Berry</a></h4>
                  <p>Senior Advisor</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/dmikeberry/"><i class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team06.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">Tom Ott</a></h4>
                  <p>Senior Advisor</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/tom-ott-74460790/"><i class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team07.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">Tobias</a></h4>
                  <p>Senior Advisor</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/tobiasdagergard/"><i class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4">
              <div class="single-team mb-40">
                <div class="team-thumb">
                  <div class="brd">
                    <img src="/assets/img/team/team08.jpg" alt="img" />
                  </div>
                </div>
                <div class="team-info">
                  <h4><a href="team-single.html">Carolyn Scott</a></h4>
                  <p>Venture Scout</p>
                  <div class="team-social">
                    <ul>
                      <!-- <li><a href="#"><i class="fab fa-facebook-f"></i></a></li> 
                                            <li> <a href="#"><i class="fab fa-twitter"></i></a></li>   
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                      <li>
                        <a href="https://www.linkedin.com/in/cscott13/"><i class="fab fa-linkedin"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- team-area-end -->
      <!-- cta-area -->
      <!--  <section class="cta-area cta-bg pt-90 pb-90" style="background-image:url(img/bg/cta_bg02.png)">
                <div class="container">
                    <div class="row justify-content-center  align-items-center">
                        <div class="col-lg-8">
                            <div class="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                                <h3>Watch Us</h3>
                                <h2> we provide truly prominent IT solutions.</h2>
                                <p>Nunc pellentesque eros ac augue tempus, vitae convallis lorem consectetur. Nulla maximus at nisl eu malesuada. Nullam quis blandit lacus. Fusce tincidunt tellus turpis, quis fermentum justo tempus eget.</p>
                                 <div class="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
                                      <a href="about.html" class="btn ss-btn smoth-scroll">Let's Get Started</a>            
                                </div>
                            </div>
                                             
                        </div>
                       <div class="col-lg-4">

                                <div class="s-video-content">
                                    <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" class="popup-video mb-50"><img src="/assets/img/bg/play-button.png" alt="circle_right"></a>
                                   
                                </div>
                        </div>
                    </div>
                </div>
            </section> -->
      <!-- cta-area-end -->
      <!-- gallery-area -->
      <section id="work" class="pt-90 pb-105 fix">
        <div class="row">
          <div class="col-lg-12 p-relative">
            <div class="section-title center-align mb-50 text-center">
              <h2>Latest Portfolio</h2>
            </div>
          </div>
        </div>
        <div class="container mb-50">
          <div class="row align-items-end">
            <div class="col-xl-12 col-lg-12">
              <div class="my-masonry text-center">
                <div class="button-group filter-button-group">
                  <button class="active" data-filter="*">All</button>
                  <button data-filter=".financial">Design</button>
                  <button data-filter=".banking">3D Printing</button>
                  <button data-filter=".insurance">Card Printing</button>
                  <button data-filter=".family">Flyer</button>
                  <button data-filter=".business">Pamphlet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="masonry-gallery-huge">
                <div class="grid col2">
                  <div class="grid-item financial">
                    <a class="popup-image" href="img/gallery/protfolio-img01.png">
                      <figure class="gallery-image">
                        <img src="/assets/img/gallery/protfolio-img01.png" alt="img" class="img" />
                      </figure>
                    </a>
                  </div>

                  <div class="grid-item insurance">
                    <a class="popup-image" href="img/gallery/protfolio-img03.png">
                      <figure class="gallery-image">
                        <img src="/assets/img/gallery/protfolio-img03.png" alt="img" class="img" />
                      </figure>
                    </a>
                  </div>
                  <div class="grid-item family">
                    <a class="popup-image" href="img/gallery/protfolio-img04.png">
                      <figure class="gallery-image">
                        <img src="/assets/img/gallery/protfolio-img04.png" alt="img" class="img" />
                      </figure>
                    </a>
                  </div>

                  <div class="grid-item business">
                    <a class="popup-image" href="img/gallery/protfolio-img05.png">
                      <figure class="gallery-image">
                        <img src="/assets/img/gallery/protfolio-img05.png" alt="img" class="img" />
                      </figure>
                    </a>
                  </div>
                  <div class="grid-item financial">
                    <a class="popup-image" href="img/gallery/protfolio-img06.png">
                      <figure class="gallery-image">
                        <img src="/assets/img/gallery/protfolio-img06.png" alt="img" class="img" />
                      </figure>
                    </a>
                  </div>
                  <div class="grid-item banking">
                    <a class="popup-image" href="img/gallery/protfolio-img02.png">
                      <figure class="gallery-image">
                        <img src="/assets/img/gallery/protfolio-img02.png" alt="img" class="img" />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- gallery-area-end -->

      <!-- frequently-area -->
      <section class="exclusive-offer pt-120 pb-120" style="background: #edf0f3">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-6">
              <div class="section-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
                <h2>Frequently Asked Question</h2>
              </div>
              <div class="faq-wrap mt-30 pr-30">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button class="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                          aria-bs-expanded="true" aria-bs-controls="collapseThree">
                          What services staffing companies offer ?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" class="collapse show" aria-bs-labelledby="headingThree"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        IT Consulting, IT Staffing, Managed Services,
                        Recruitment Process Outsourcing, and other forms of
                        recruitment services are offered by staffing firms.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-bs-expanded="false" aria-bs-controls="collapseOne">
                          What are the advantages of working with us?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        There are several advantages to working with us. For all
                        of your recruitment and staffing needs, you will always
                        receive personalized solutions. Our services are always
                        of excellent caliber and are reviewed according to
                        industry norms.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h2 class="mb-0">
                        <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-bs-expanded="false" aria-bs-controls="collapseTwo">
                          Why should I use staffing services instead of securing
                          candidates by myself?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        There are various distinctions between professional
                        service and self-service quality. The major benefit of
                        using a staffing firm is the high-quality service and
                        smooth experience. They are seasoned market players who
                        are well-versed in the sector, ensuring that you always
                        receive the most bang for your buck.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-bs-expanded="false" aria-bs-controls="collapseFour">
                          Is your agency able to assist me with hiring across
                          the USA?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        Yes, we are fully functioning throughout the United
                        States and offer skilled recruitment support.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-bs-expanded="false" aria-bs-controls="collapseFour">
                          Are you an equal opportunity employer?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        Yes, we are firm believers in equality and do not make
                        distinctions based on race, religion, ethnicity, or
                        gender. Without exception, we accept competent talent
                        from all around the world.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-bs-expanded="false" aria-bs-controls="collapseFour">
                          Do you provide temporary and permanent placements?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        Yes, we provide both temporary and permanent recruiting
                        services, depending on the requirements.
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-bs-expanded="false" aria-bs-controls="collapseFour">
                          What are the methods your agency uses to find talent?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        The process starts with the formation of a pool of
                        candidates, which is then screened three times before
                        being submitted to any job requirement. The sourcing
                        agents are in charge of the initial stage, which is to
                        gather applicants and construct a pool based on the
                        technologies and requirements.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingFour">
                      <h2 class="mb-0">
                        <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseFour" aria-bs-expanded="false" aria-bs-controls="collapseFour">
                          What kinds of staffing solutions do you provide?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample">
                      <div class="card-body">
                        The process starts with the formation of a pool of
                        candidates, which is then screened three times before
                        being submitted to any job requirement. The sourcing
                        agents are in charge of the initial stage, which is to
                        gather applicants and construct a pool based on the
                        technologies and requirements.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 text-right">
              <img src="/assets/img/bg/ex-offer-img.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

 

const carouselConfig = {
  height: 200,
  itemsToShow: 5,
  wrapAround: true,
}
useHead({
  title: "Metasquareinc",
  meta: [{ name: "description", content: "Welcome to Metasquareinc" }],
});
</script>

<style scoped>
/* Import the main styles */
@import "~/assets/css/style.css";
@import "~/assets/css/responsive.css";

:root {
  --carousel-transition: 300ms;
  --carousel-opacity-inactive: 0.7;
  --carousel-opacity-active: 1;
  --carousel-opacity-near: 0.9;

  background-color: #242424;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(10px) rotateY(-12deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1);
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--next~.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-10px) rotateY(12deg) scale(0.9);
}

.single-team{
  width:320px
}
</style>
