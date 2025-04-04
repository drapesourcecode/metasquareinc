<template>
    <div>
        <div class="float-buttn">
        <span @click="showModal = true"
          class="floating_btn float-btn-three"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Book A Meeting</span
        >
      </div>
      <div v-if="showModal"
        class="modal fade show "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        style="display: none; padding-right: 15px"
        aria-modal="true"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Book a metting with us
              </h5>
              <button
              @click="showModal = false"
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <iframe
                src="https://calendly.com/sukhendu-mukherjee-Metasquareinc/30min"
                scrolling="no"
                style="
                  width: 100%;
                  height: 700px;
                  border: medium;
                  overflow: hidden;
                "
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
const showModal = ref(false)
</script>

<style   scoped>
.modal{
  padding-top:50px;
}
.float-buttn span.floating_btn:last-child {
  transform: rotate(-90deg);
  left: inherit;
  right: 0px;
  margin-top: 0px;
  margin-right: -78px !important;
  border-radius: 6px 6px 0px 0px;
}

.float-buttn span.floating_btn {
  position: fixed;
  right: 8px;
  top: 44%;
  width: auto;
  max-width: 300px;
  margin-bottom: 10px;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-size: 19px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin-right: 40px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
  transform: translate(100%, -50%);
  z-index: 9999;
  padding: 9px 20px;
  border-radius: 3px 0px 0px 3px;
  transition: 0.5s;
}
</style>