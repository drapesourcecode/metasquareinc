import jQuery from "jquery";

export default defineNuxtPlugin(() => {
  window.$ = window.jQuery = jQuery;

  return {
    provide: {
      $: jQuery,
      jQuery: jQuery
    }
  };
});
