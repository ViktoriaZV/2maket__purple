const video__play = document.querySelector('.video__play');
const sectionVideo = document.querySelector('section.video');
const videoIframe = document.querySelector('iframe.video__iframe');

video__play.addEventListener('click', function(event) {

  sectionVideo.classList.add('active');

  // sectionVideo.classList.toggle('active');
  
  // if (sectionVideo.classList.contains('active')) { // если класс .active есть
  //   sectionVideo.classList.remove('active');
  // } else { // нету класса .active
  //   sectionVideo.classList.add('active');
  // }

});

  // <!-- Initialize Swiper -->

    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });


