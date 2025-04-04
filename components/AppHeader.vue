<template>
  <header class="header-area header-three">
    <div id="header-sticky" class="menu-area">
      <div class="container">
        <div class="second-menu">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2">
              <div class="logo">
                <NuxtLink to="/">
                  <img
                    class="header-image"
                    src="/assets/img/logo/f_logo.png"
                    alt="logo"
                  />
                </NuxtLink>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10">
              <div class="main-menu text-center text-xl-right">
                <nav id="mobile-menu">
                  <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                    <li class="has-sub">
                      <NuxtLink to="/services">Our Solution</NuxtLink>
                      <ul>
                        <li>
                          <NuxtLink to="/it-staffing">IT Staffing</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/it-consulting">IT Consulting</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/managed-services">Managed Services</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/recruitment-process">recruitment process outsourcing</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/software-development">Software Development</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <!-- <li><a href="faq.html">Faq</a></li> -->
                    <li><NuxtLink to="/career">Career</NuxtLink></li>
                    <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- <div class="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                                 <div class="login">
                                    <ul>
                                        <li><a href="#" class="menu-tigger"><i class="fal fa-search"></i></a></li>
                                        <li>
                                            <div class="second-header-btn">
                                               <a href="contact.html" class="btn">Get Started</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>                               
                            </div> -->
            <div class="col-12">
              <div class="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- offcanvas -->
    <div class="offcanvas-menu">
      <span class="menu-close"><i class="fas fa-times"></i></span>
      <form
        role="search"
        method="get"
        id="searchform"
        class="searchform"
        action="http://wordpress.zcube.in/xconsulta/"
      >
        <input type="text" name="s" id="search" value="" placeholder="Search" />
        <button><i class="fa fa-search"></i></button>
      </form>
      <div id="cssmenu2" class="menu-one-page-menu-container">
        <ul id="menu-one-page-menu-1" class="menu">
          <li class="menu-item menu-item-type-custom menu-item-object-custom">
            <a href="#home"><span>+8 12 3456897</span></a>
          </li>
          <li class="menu-item menu-item-type-custom menu-item-object-custom">
            <a href="#howitwork"><span>info@example.com</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="offcanvas-overly"></div>
  </header>
</template>

 