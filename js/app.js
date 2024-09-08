/********* Using Vanilla Js */
// const about = document.querySelector('.about');
// const buttons = document.querySelectorAll('.tab-btn');
// const contents = document.querySelectorAll('.content');

// about.addEventListener('click', function (e) {
//   //console.log(e.target.dataset.id);
//   const id = e.target.dataset.id;

//   if (id) {
//     //remove active from other buttons
//     buttons.forEach(function (btn) {
//       btn.classList.remove('active');
//       e.target.classList.add('active');
//     });

//     //hide other contents
//     contents.forEach(function (content) {
//       content.classList.remove('active');
//     });

//     const element = document.getElementById(id);
//     element.classList.add('active');
//   }
// });

/****** Using jQuery *********/
$(document).ready(function() {
  $('.about').on('click', function(e) {
    var id = $(e.target).data('id');

    if (id) {
      // Remove active from other buttons
      $('.tab-btn').removeClass('active');
      $(e.target).addClass('active');

      // Hide other contents
      $('.content').removeClass('active');

      $('#' + id).addClass('active');
    }
  });
});
