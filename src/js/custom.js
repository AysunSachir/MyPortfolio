$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true,
                autoplay: true,
                autoPlayHoverPause: true,
                dots: false,
                responsive:{
                    0:{
                        items:1
                    }
                }
            });

            var $grid = $('.grid').isotope({
              itemSelector: '.grid-item',
              
              layoutMode: 'fitRows'
            });
            // layout Isotope after each image loads
            $grid.imagesLoaded().progress( function() {
              $grid.isotope('layout');
            });  



            // filter functions
            var filterFns = {
              // show if number is greater than 50
              numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
              },
              // show if name ends with -ium
              ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
              }
            };

            // bind filter button click
            $('#filters').on( 'click', 'button', function() {
              var filterValue = $( this ).attr('data-filter');
              // use filterFn if matches value
              filterValue = filterFns[ filterValue ] || filterValue;
              $grid.isotope({ filter: filterValue });
            });

            // bind sort button click
            $('#sorts').on( 'click', 'button', function() {
              var sortByValue = $(this).attr('data-sort-by');
              $grid.isotope({ sortBy: sortByValue });
            });

            // change is-checked class on buttons
            $('.button-group').each( function( i, buttonGroup ) {
              var $buttonGroup = $( buttonGroup );
              $buttonGroup.on( 'click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $( this ).addClass('is-checked');
              });
            });
              


    });

window.sr = ScrollReveal();
sr.reveal('.hero-h1', {
    duration: 500,
    origin: 'bottom',
    distance: '70px',
    opacity: 0,
    mobile: true,
    scale: 1
});
sr.reveal('.hero-h4', {
    duration: 500,
    origin: 'bottom',
    delay: 100,
    scale: 1
});

sr.reveal('.btn-primary', {
    duration: 500,
    origin: 'bottom',
    delay: 200,
    scale: 1
});

sr.reveal('.about-me-h2', {
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 200,
    viewFactor: 1
});

sr.reveal('.about-me-img', {
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 200,
    viewFactor: 1
});

sr.reveal('.about-me-p', {
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 200,
    viewFactor: 1
});

sr.reveal('.my-services-1', {
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 100,
    viewFactor: 1
});

sr.reveal('.my-services-2', {
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 200,
    viewFactor: 1
});

sr.reveal('.my-services-3', {
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 300,
    viewFactor: 1
});

sr.reveal('.rw-1', {
    duration: 300,
    origin: 'left',
    distance: '30px',
    scale: 0.2,
    delay: 100,
    viewFactor: 1
});

sr.reveal('.rw-2', {
    duration: 300,
    origin: 'left',
    distance: '60px',
    scale: 0.2,
    delay: 100,
    viewFactor: 1
});

sr.reveal('.rw-3', {
    duration: 300,
    origin: 'right',
    distance: '30px',
    scale: 0.2,
    delay: 100,
    viewFactor: 1
});

sr.reveal('.rw-4', {
    duration: 600,
    origin: 'right',
    distance: '60px',
    scale: 0.2,
    delay: 100,
    viewFactor: 1
});

sr.reveal('.ascend-1', {
    duration: 2500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 150,
    viewFactor: 1
});

sr.reveal('.ascend-2', {
    duration: 2500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 250,
    viewFactor: 1
});

sr.reveal('.ascend-3', {
    duration: 2500,
    origin: 'bottom',
    distance: '100px',
    scale: 1,
    delay: 400,
    viewFactor: 1
});

sr.reveal('.contact', {
    duration: 600,
    origin: 'bottom',
    distance: '70px',
    opacity: 0,
    mobile: true,
    scale: 1
});


