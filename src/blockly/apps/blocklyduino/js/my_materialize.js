$(document).ready(function () {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $('select').material_select();
  $(".button-collapse").sideNav();
  $('.tooltipped').tooltip({delay: 1500});
  $(".dropdown-button").dropdown();
});
