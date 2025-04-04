<template>
  <section
    class="breadcrumb-area d-flex align-items-center p-relative fix"
    style="background-image: url(/assets/img/bg/bdrc-bg.jpg)"
  >
    <div class="slider-circal"></div>
    <div class="slider-circal-2"></div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12">
          <div class="breadcrumb-wrap text-center">
            <div class="breadcrumb-title">
              <h2>Gallery</h2>
              <div class="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Gallery
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- breadcrumb-area-end -->
  <!-- gallery-area -->
  <section id="work" class="pt-120 pb-105">
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
                <a class="popup-image" href="/assets/img/gallery/protfolio-img01.png">
                  <figure class="gallery-image">
                    <img
                      src="/assets/img/gallery/protfolio-img01.png"
                      alt="img"
                      class="img"
                    />
                  </figure>
                </a>
              </div>
              <div class="grid-item banking">
                <a class="popup-image" href="/assets/img/gallery/protfolio-img02.png">
                  <figure class="gallery-image">
                    <img
                      src="/assets/img/gallery/protfolio-img02.png"
                      alt="img"
                      class="img"
                    />
                  </figure>
                </a>
              </div>
              <div class="grid-item insurance">
                <a class="popup-image" href="/assets/img/gallery/protfolio-img03.png">
                  <figure class="gallery-image">
                    <img
                      src="/assets/img/gallery/protfolio-img03.png"
                      alt="img"
                      class="img"
                    />
                  </figure>
                </a>
              </div>
              <div class="grid-item family">
                <a class="popup-image" href="/assets/img/gallery/protfolio-img04.png">
                  <figure class="gallery-image">
                    <img
                      src="/assets/img/gallery/protfolio-img04.png"
                      alt="img"
                      class="img"
                    />
                  </figure>
                </a>
              </div>
              <div class="grid-item business">
                <a class="popup-image" href="/assets/img/gallery/protfolio-img05.png">
                  <figure class="gallery-image">
                    <img
                      src="/assets/img/gallery/protfolio-img05.png"
                      alt="img"
                      class="img"
                    />
                  </figure>
                </a>
              </div>
              <div class="grid-item financial">
                <a class="popup-image" href="/assets/img/gallery/protfolio-img06.png">
                  <figure class="gallery-image">
                    <img
                      src="/assets/img/gallery/protfolio-img06.png"
                      alt="img"
                      class="img"
                    />
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
